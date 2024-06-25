/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaBookOpen,
  FaGithub,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import Logo from "../public/mru_title_light.png";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import getUserInfo from "@/lib/auth/getUserInfo";

import signInWithGithub from "@/lib/auth/signInWithGithub";
import signout from "@/lib/auth/signout";
import { UserIcon } from "lucide-react";
import { User } from "@supabase/auth-js";
import { createClient } from "@/lib/supabase/server";

const getUserApplicationStatus = async (user: User) => {
  const supabase = createClient();
  const userApplicationStatus = await supabase
    .from("users")
    .select("application_status")
    .eq("user_id", user.id);

  if (userApplicationStatus.error) {
    console.error(userApplicationStatus.error);
    return null;
  }

  return userApplicationStatus;
};

export default async function Header() {
  const userInfo = await getUserInfo();
  const userApplicationStatus = userInfo
    ? (await getUserApplicationStatus(userInfo))?.data[0]?.application_status
    : null;

  const DropDown = () => (
    <div className="dropdown">
      <button
        tabIndex={0}
        role="button"
        className="btn btn-primary lg:hidden text-base-100"
      >
        <FaBars />
      </button>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-2 z-[1] 
                        shadow rounded-box 
                        bg-secondary [&_*]:text-nowrap"
      >
        <MenuItems />
        <li className="mt-2">
          {userInfo ? (
            <ProfileModal
              user={userInfo}
              application_status={userApplicationStatus}
            />
          ) : (
            <form action={signInWithGithub} className="inline-block p-0">
              <Button
                variant="outline"
                className="w-full p-2 text-md"
                type="submit"
              >
                <FaGithub className="mr-2" />
                Sign In
              </Button>
            </form>
          )}
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="fixed w-full z-30">
      <div className="navbar sticky top-0 bg-primary text-neutral h-[52px]">
        <div className="navbar-start">
          <DropDown />
          <Link href="/">
            <Image className="max-h-10 w-auto" src={Logo} alt="MRUHacks Logo" />
          </Link>
        </div>

        <div className="navbar-end hidden  lg:flex">
          <ul className="menu menu-horizontal font-medium flex-nowrap items-center">
            <MenuItems />
            <li>
              {userInfo ? (
                <ProfileModal
                  user={userInfo}
                  application_status={userApplicationStatus}
                />
              ) : (
                <SignInModal />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const MenuItems = () => (
  <>
    <li>
      <Link href="#home">Home</Link>
    </li>
    <li>
      <Link href="#about">About MRUHacks</Link>
    </li>
    <li>
      <Link href="#fLinkq">FAQs</Link>
    </li>
    <li>
      <Link href="#community">Our Community</Link>
    </li>
    <li>
      <Link href="#sponsors">Sponsors</Link>
    </li>
  </>
);

const SignInModal = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="p-2 text-md">
          <FaSignInAlt className="mr-2" />
          Sign In
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Register for MRUHacks</h4>
            <p className="text-sm text-muted-foreground">
              Log in or sign up to register for MRUHacks
            </p>
          </div>
          <form action={signInWithGithub} className="grid gap-2">
            <Button
              variant="outline"
              className="flex flex-row align-middle justify-left text-md"
              type="submit"
            >
              <FaGithub className="mr-2" />
              Sign in with Github
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const ProfileModal = ({
  user,
  application_status,
}: {
  user: User | null;
  application_status: string | null;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="p-2 text-md">
          <UserIcon />
          Profile
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white">
        <div className="grid gap-4">
          <div className="flex flex-row items-center justify-left">
            <img
              src={user?.user_metadata?.avatar_url}
              className="w-12 h-12 rounded-full mr-2"
              alt="User Avatar"
            />
            <div>
              <h4 className="font-bold leading-none text-md mb-1">
                {user?.user_metadata?.full_name}
              </h4>
              <p className="text-muted text-md">
                Application Status: {application_status}
              </p>
            </div>
          </div>
          <Link href="/apply" className="w-full">
            <Button
              variant="outline"
              className="p-2 text-md justify-start pl-4 w-full"
            >
              <FaBookOpen className="mr-2" />
              Edit Application
            </Button>
          </Link>
          <form action={signout} className="grid gap-2">
            <Button
              variant="outline"
              className="flex flex-row align-middle justify-start pl-4 text-md"
              type="submit"
            >
              <FaSignOutAlt className="mr-2" />
              Sign Out
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};
