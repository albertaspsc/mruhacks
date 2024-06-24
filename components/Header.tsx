import Image from "next/image";
import Link from "next/link";
import { FaBars, FaGithub, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import Logo from "../public/mru_title_light.png";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import getUserInfo from "@/lib/auth/getUserInfo";

import signInWithGithub from "@/lib/auth/signInWithGithub";
import signout from "@/lib/auth/signout";

export default async function Header() {
  const userInfo = await getUserInfo();

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
            <form action={signout} className="inline-block p-0">
              <Button
                variant="outline"
                className="w-full p-2 text-md"
                type="submit"
              >
                <FaSignOutAlt className="mr-2" />
                Sign Out
              </Button>
            </form>
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
                <form action={signout} className="inline-block p-0">
                  <Button
                    variant="outline"
                    className="p-2 text-md"
                    type="submit"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Sign Out
                  </Button>
                </form>
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
