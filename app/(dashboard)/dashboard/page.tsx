import { createClient } from "@/lib/supabase/server";
import getUserInfo from "@/lib/auth/getUserInfo";
import assert from "assert";
import Link from "next/link";

const getApplicationStatus = async () => {
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

  return data?.[0]?.application_status;
};

const getUserName = async () => {
  const userInfo = await getUserInfo();
  return userInfo?.user_metadata.full_name;
};

export default async function Dashboard() {
  const applicationStatus = await getApplicationStatus();
  const userName = await getUserName();

  return (
    <div className="flex flex-col px-4">
      <h1 className="text-3xl font-bold text-primary">{userName}</h1>
      <ApplicationStatus applicationStatus={applicationStatus} />
    </div>
  );
}

function ApplicationStatus({
  applicationStatus,
}: {
  applicationStatus: string;
}) {
  switch (applicationStatus) {
    case "In Progress":
      return (
        <Link href="/dashboard/apply">
          <div className="rounded-full p-4 border border-muted-foreground flex items-center w-max hover:scale-110 hover:shadow-md transition">
            <div className="rounded-full w-4 h-4 flex flex-col items-center justify-center bg-orange-200 text-white mr-2">
              <div className="rounded-full w-2 h-2 bg-orange-500"></div>
            </div>
            <p className="text-lg text-muted-foreground mr-2">
              Application {applicationStatus}
            </p>
          </div>
        </Link>
      );
    case "Applied":
      <div className="rounded-full p-4 border border-muted-foreground flex items-center w-max">
        <div className="rounded-full w-4 h-4 flex flex-col items-center justify-center bg-blue-200 text-white mr-2">
          <div className="rounded-full w-2 h-2 bg-blue-500"></div>
        </div>
        <p className="text-lg text-muted-foreground mr-2">
          Application Submitted
        </p>
      </div>;
  }
}
