import FallbackImage from "@/components/FallbackImage";
import getUserInfo from "@/lib/auth/getUserInfo";
import missing_profile from "@/assets/missing_profile.png";
import { createClient } from "@/lib/supabase/server";
import assert from "assert";
import { Skeleton } from "@/components/ui/skeleton";
import { ReactNode, Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { get_color } from "@/lib/colors";
import Link from "next/link";

export const Flag = ({
  className,
  name,
  id,
}: {
  className?: string;
  name: string;
  id: number;
}) => (
  <li className="pointer-events-auto">
    <Link href={`/flag/${id}`}>
      <Badge
        style={{
          backgroundColor: get_color(name ?? "")!,
        }}
        className={cn("pointer-events-auto text-nowrap", className)}
      >
        {name}
        <QuestionMarkCircledIcon />
      </Badge>
    </Link>
  </li>
);

async function AccountFlags() {
  const supabase = createClient();
  const userInfo = await getUserInfo();
  if (!userInfo) return null;

  const { data, error } = await supabase
    .from("user_flags")
    .select("flag, user_flag_types ( name )")
    .eq("removed", false)
    .eq("user_id", userInfo.id);

  if (error || !data) {
    // Not getting any data is not an error for use
    if (error.code !== "PGRST116") {
      console.error(error);
    }
    return null;
  }

  return (
    <div>
      <ul>
        {data.map(({ flag, user_flag_types }) => (
          <Flag
            name={user_flag_types?.name ?? "<Unknown>"}
            key={flag}
            id={flag}
          />
        ))}
      </ul>
    </div>
  );
}

const applicationStatus = async () => {
  const supabase = createClient();
  const userInfo = await getUserInfo();

  if (!userInfo) {
    return "<Unknown>";
  }

  const { data, error } = await supabase
    .from("users")
    .select("application_status")
    .eq("user_id", userInfo?.id);

  if (error) console.error(error);

  if (data) {
    assert(data.length === 1);
  }

  const status: string | undefined = data?.[0]?.application_status ?? undefined;
  return status;
};

async function _Profile() {
  const user = await getUserInfo();
  const application_status = await applicationStatus();

  if (!(user && application_status)) {
    return <ProfileLoading />;
  }

  const colors: Record<string, { outer: string; inner: string }> = {
    "In Progress": { outer: "bg-orange-500/10", inner: "bg-orange-500/80" },
    Approved: { outer: "bg-green-500/10", inner: "bg-green-500/80" },
    Denied: { outer: "bg-red-500/10", inner: "bg-red-500/80" },
    Applied: { outer: "bg-blue-500/30", inner: "bg-blue-500" },
  };

  return (
    <div className="flex flex-row items-center justify-left">
      <FallbackImage
        src={user?.user_metadata?.avatar_url}
        fallback={missing_profile}
        className="rounded-full mr-2"
        width={48}
        height={48}
        alt="User Avatar"
        unoptimized
      />
      <div className="flex flex-col justify-center">
        <h4 className="font-bold leading-none text-md mb-1 text-primary">
          {user?.user_metadata?.full_name}
        </h4>
        <div className="flex flex-row items-center">
          <div>
            <div
              className={`h-4 w-4 rounded-full ${colors[application_status].outer} flex items-center justify-center`}
            >
              <div
                className={`animate-pulse h-2 w-2 rounded-full ${colors[application_status].inner} `}
              />
            </div>
          </div>
          <p className="ml-2 text-md text-muted-foreground">
            {application_status}
          </p>
        </div>
        <AccountFlags />
      </div>
    </div>
  );
}

function ProfileLoading() {
  return (
    <div className="flex flex-row items-center justify-left">
      <Skeleton className="h-12 w-12 rounded-full mr-2" />
      <div className="space-y-2">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-12 h-4" />
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <Suspense fallback={<ProfileLoading />}>
      <_Profile />
    </Suspense>
  );
}
