import {
  FaChartPie,
  FaPeopleArrows,
  FaWpforms,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import { get_perms } from "@/lib/auth/getPerms";

export default async function Page() {
  const perms = await get_perms();
  return (
    <div className="flex-1 bg-background border rounded-md p-4">
      <h1 className="text-3xl font-bold text-primary">Admin</h1>
      <ul className="flex flex-col gap-8 p-4">
        {perms?.can_make_announcements && (
          <Link
            href="/admin/announcements"
            className="flex flex-row items-center w-full p-4 justify-center border border-muted-foreground rounded-md space-x-2 max-w-screen-md mx-auto hover:scale-105 hover:shadow-md transition"
          >
            <FaEnvelope />
            <span>Announcements</span>
          </Link>
        )}
        {perms?.can_view_user_details && (
          <Link
            href="/admin/applications"
            className="flex flex-row items-center w-full p-4 justify-center border border-muted-foreground rounded-md space-x-2 max-w-screen-md mx-auto hover:scale-105 hover:shadow-md transition"
          >
            <FaWpforms />
            <span>Applications</span>
          </Link>
        )}
        {perms?.can_view_demographics && (
          <Link
            href="/admin/demographics"
            className="flex flex-row items-center w-full p-4 justify-center border border-muted-foreground rounded-md space-x-2 max-w-screen-md mx-auto hover:scale-105 hover:shadow-md transition"
          >
            <FaPeopleArrows />
            <span>Demographics</span>
          </Link>
        )}
        {perms?.can_view_agg_stats && (
          <Link
            href="/admin/stats"
            className="flex flex-row items-center w-full p-4 justify-center border border-muted-foreground rounded-md space-x-2 max-w-screen-md mx-auto hover:scale-105 hover:shadow-md transition"
          >
            <FaChartPie />
            <span>Stats</span>
          </Link>
        )}
      </ul>
    </div>
  );
}
