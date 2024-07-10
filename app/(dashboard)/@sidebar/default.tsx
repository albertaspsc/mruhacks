import { ReactNode, useMemo } from "react";
import { FaChartPie, FaPeopleArrows, FaWpforms } from "react-icons/fa";
import { Logout } from "../logout";
import { MenuItem } from "./menu_item";
import { DashboardIcon } from "@radix-ui/react-icons";
import { get_perms } from "@/lib/auth/getPerms";
import { memoize } from "lodash";

const MenuHeader = ({ children }: { children: ReactNode }) => (
  <li className="last:hidden block text-white font-bold">
    {children}
    <hr />
  </li>
);

const Items = async () => {
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
    <div className="pt-4 space-y-5">
      <div className="flex items-center justify-center w-full md:hidden">
        <Logout />
      </div>
      <ul>
        <MenuHeader>My MRUHacks</MenuHeader>
        <MenuItem href="/dashboard">
          <DashboardIcon />
          Dashboard
        </MenuItem>
        <span>
          <MenuHeader>Admin</MenuHeader>
          {/* These don't control perms!! if the user navigates to here 
              they will only get data about themselves */}
          {can_view_user_details ? (
            <MenuItem href="/admin/applications">
              <FaWpforms />
              Applications
            </MenuItem>
          ) : null}
          {can_view_demographics ? (
            <MenuItem href="/admin/demographics">
              <FaPeopleArrows />
              Demographics
            </MenuItem>
          ) : null}
          {can_view_agg_stats ? (
            <MenuItem href="/admin/stats">
              <FaChartPie />
              Stats
            </MenuItem>
          ) : null}
        </span>
      </ul>
    </div>
  );
};

const Mobile = () => {};

const Desktop = () => (
  <div className="pl-3 pr-10  bg-primary h-full hidden md:block min-h-screen">
    <Items />
  </div>
);

export default function Sidebar() {
  return (
    <div className="">
      <Desktop />
    </div>
  );
}
