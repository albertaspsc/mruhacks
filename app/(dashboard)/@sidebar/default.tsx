import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { FaChartPie, FaPeopleArrows, FaWpforms } from "react-icons/fa";
import { Logout } from "./profile";
import { MenuItem } from "./menu_item";

const MenuHeader = ({
  children,
  ...props
}: { children: ReactNode } & LinkProps) => (
  <li className="Padding B">
    <Link {...props}>{children}</Link>
  </li>
);

const Items = () => (
  <div className="pt-4 space-y-5">
    <div className="flex items-center justify-center w-full">
      <Logout />
    </div>
    <ul>
      <MenuItem href="/admin/applications">
        <FaWpforms />
        Applications
      </MenuItem>
      <MenuItem href="/admin/demographics">
        <FaPeopleArrows />
        Demographics
      </MenuItem>
      <MenuItem href="/admin/stats">
        <FaChartPie />
        Stats
      </MenuItem>
    </ul>
  </div>
);

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
