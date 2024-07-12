import FallbackImage from "@/components/FallbackImage";
import getUserInfo from "@/lib/auth/getUserInfo";
import missing_profile from "@/assets/missing_profile.png";
import { createClient } from "@/lib/supabase/server";
import assert from "assert";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const ApplicationStatus = async () => {
  const supabase = createClient();
  const userInfo = await getUserInfo();
  const { data, error } = await supabase
    .from("users")
    .select("application_status")
    .eq("user_id", userInfo?.id);

  if (error) console.error(error);

  if (data) {
    assert(data.length === 1);
  }

  return data?.[0]?.application_status ?? "<Unknown>";
};

async function _Profile() {
  const user = await getUserInfo();
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
        <p className="text-md text-muted-foreground">
          <ApplicationStatus />
        </p>
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
