import FallbackImage from "@/components/FallbackImage";
import getUserInfo from "@/lib/auth/getUserInfo";
import missing_profile from "@/assets/missing_profile.png";
import { createClient } from "@/lib/supabase/server";
import assert from "assert";

const ApplicationStatus = async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("users")
    .select("application_status");
  if (error) console.error(error);

  if (data) {
    assert(data);
  }

  return "<Unknown>";
};

export default async function Profile() {
  const user = await getUserInfo();
  return (
    <div className="grid gap-4">
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
          <h4 className="font-bold leading-none text-md mb-1">
            {user?.user_metadata?.full_name}
          </h4>
          <p className="text-muted text-md">
            <ApplicationStatus />
          </p>
        </div>
      </div>
    </div>
  );
}
