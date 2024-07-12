import { useMemo } from "react";
import { MenuItem } from "../@sidebar/menu_item";
import { get_perms } from "@/lib/auth/getPerms";
import { FaChartPie, FaPeopleArrows, FaWpforms } from "react-icons/fa";
import Link from "next/link";

export default async function Page() {
  const { data, error } = await useMemo(() => {
    return get_perms();
  }, []);
  if (error) console.error(error);

  // This is a bit convoluted, but in effect the can_* will be set to true for
  // if the user is super_admin, otherwise it will the value in database or false
  // by default
  const { super_admin = false } = data?.[0] ?? {};
  const {
    can_view_user_details = super_admin,
    can_view_demographics = super_admin,
    can_view_agg_stats = super_admin,
  } = super_admin ? {} : data?.[0] ?? {};

  return (
    <div className="flex-1 bg-background border rounded-md p-4">
      <h1 className="text-3xl font-bold text-primary">Admin</h1>
      <ul className="flex flex-col gap-8 p-4">
        {can_view_user_details ? (
          <Link
            href="/admin/applications"
            className="flex flex-row items-center w-full p-4 justify-center border border-muted-foreground rounded-md space-x-2 max-w-screen-md mx-auto hover:scale-105 hover:shadow-md transition"
          >
            <FaWpforms />
            <span>Applications</span>
          </Link>
        ) : null}
        {can_view_demographics ? (
          <Link
            href="/admin/demographics"
            className="flex flex-row items-center w-full p-4 justify-center border border-muted-foreground rounded-md space-x-2 max-w-screen-md mx-auto hover:scale-105 hover:shadow-md transition"
          >
            <FaPeopleArrows />
            <span>Demographics</span>
          </Link>
        ) : null}
        {can_view_agg_stats ? (
          <Link
            href="/admin/stats"
            className="flex flex-row items-center w-full p-4 justify-center border border-muted-foreground rounded-md space-x-2 max-w-screen-md mx-auto hover:scale-105 hover:shadow-md transition"
          >
            <FaChartPie />
            <span>Stats</span>
          </Link>
        ) : null}
      </ul>
    </div>
  );
}
