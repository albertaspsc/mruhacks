import { ReactNode, Suspense, useMemo } from "react";
import {
  FaAddressBook,
  FaChartPie,
  FaHome,
  FaPeopleArrows,
  FaQq,
  FaQrcode,
  FaShieldAlt,
  FaWpforms,
} from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { Logout } from "../logout";
import { MenuItem } from "./menu_item";
import { DashboardIcon } from "@radix-ui/react-icons";
import { get_perms } from "@/lib/auth/getPerms";
import { memoize } from "lodash";
import Profile from "../profile";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/mru_title_dark.png";
import small_logo from "@/public/mruhacks.png";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MenuHeader = ({ children }: { children: ReactNode }) => (
  <li className="last:hidden mt-4 block text-primary font-bold">{children}</li>
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
    <div className="flex flex-col justify-between h-full">
      <div className="pt-4 space-y-5">
        <Link
          href="/"
          className="h-10 mb-2
                    absolute left-[50%] translate-x-[-50%]
                    md:relative md:left-auto lg:translate-x-0"
        >
          <Image
            className="max-h-[52px] w-auto p-1"
            src={logo}
            alt="MRUHacks Logo"
          />
        </Link>
        <div className="flex items-center justify-center w-full md:hidden">
          <Logout />
        </div>
        <ul>
          <MenuHeader>My MRUHacks</MenuHeader>
          <MenuItem href="/dashboard">
            <DashboardIcon />
            Dashboard
          </MenuItem>
          <MenuItem href="/dashboard/apply">
            <FaAddressBook />
            Application
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
      <div className="flex flex-col pt-4">
        <Suspense>
          <Profile />
        </Suspense>
        <div className="flex items-center space-x-4 py-4 border-t mt-4">
          <Logout className="flex-1 w-full" />
        </div>
      </div>
    </div>
  );
};

const Mobile = async () => {
  const has_perms = !!((await get_perms()).data?.length ?? 0 > 0);

  return (
    <div className="bg-background md:hidden flex flex-row p-4 border mb-0">
      <Suspense>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex-1 h-full flex flex-row space-x-4 justify-around items-center text-xl">
            <Link href="/dashboard">
              <FaHome />
              <VisuallyHidden>Dashboard</VisuallyHidden>
            </Link>
            <Link href="/dashboard/apply">
              <FaAddressBook />
              <VisuallyHidden>Application</VisuallyHidden>
            </Link>
            {has_perms ? (
              <Link href="/admin">
                <FaShieldAlt />
                <VisuallyHidden>Admin</VisuallyHidden>
              </Link>
            ) : null}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

const Desktop = () => (
  <div className="px-4 bg-background h-full hidden md:block border-r">
    <Suspense>
      <Items />
    </Suspense>
  </div>
);

export default function Sidebar() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}
