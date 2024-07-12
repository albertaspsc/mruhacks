import FallbackImage from "@/components/FallbackImage";
import getUserInfo from "@/lib/auth/getUserInfo";
import missing_profile from "@/assets/missing_profile.png";
import { createClient } from "@/lib/supabase/server";
import assert from "assert";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

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
      <div>
        <h4 className="font-bold leading-none text-md mb-1 text-white">
          {user.user_metadata?.full_name ?? "<Unknown>"}
        </h4>
        <p className="text-muted text-md text-white">{application_status}</p>
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
