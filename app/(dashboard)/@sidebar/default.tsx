import { ReactNode, Suspense, useMemo } from "react";
import {
  FaAddressBook,
  FaChartPie,
  FaEnvelope,
  FaFlag,
  FaIdBadge,
  FaPeopleArrows,
  FaWpforms,
} from "react-icons/fa";
import { Logout } from "../logout";
import { MenuItem } from "./menu_item";
import {
  DashboardIcon,
  DiscordLogoIcon,
  HamburgerMenuIcon,
  InstagramLogoIcon,
  NotionLogoIcon,
} from "@radix-ui/react-icons";
import { get_perms } from "@/lib/auth/getPerms";
import Profile from "../profile";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/mru_title_dark.png";
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet";

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
    <div className="flex flex-col justify-start h-screen w-max">
      <Link href="/" className="h-10 mb-2 mt-4">
        <Image className="max-h-[52px] w-auto" src={logo} alt="MRUHacks Logo" />
      </Link>
      <div className="space-y-5 overflow-y-auto pt-5 text-nowrap">
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
            {super_admin && (
              <MenuItem href="/admin/permissions">
                <FaIdBadge />
                Permissions
              </MenuItem>
            )}
            {super_admin && (
              <MenuItem href="/admin/flags">
                <FaFlag />
                User Flags
              </MenuItem>
            )}
          </span>
          <span>
            <MenuHeader>Useful Links</MenuHeader>
            <MenuItem href="https://discord.gg/nuJKBcaCKq">
              <DiscordLogoIcon />
              Discord
            </MenuItem>
            <MenuItem href="https://mruhacks.notion.site/Hackerpack-426b5b28cc0a4b069deb0f64f26af37a?pvs=74">
              <NotionLogoIcon />
              Hacker Pack
            </MenuItem>
            <MenuItem href="https://www.instagram.com/mruhacks/">
              <InstagramLogoIcon />
              Instagram
            </MenuItem>
            <MenuItem href="mailto:hello@mruhacks.ca">
              <FaEnvelope />
              Contact Us
            </MenuItem>
          </span>
        </ul>
      </div>
      <div className="flex flex-col pt-4  mt-auto ">
        <Suspense>
          <Profile />
        </Suspense>
        <div className="flex items-center border-t my-2">
          <Logout className="flex-1 w-full" />
        </div>
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden block">
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <Items />
      </SheetContent>
    </Sheet>
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
