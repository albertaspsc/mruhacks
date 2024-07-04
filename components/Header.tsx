import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaBookOpen,
  FaGithub,
  FaGoogle,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import Logo from "../public/mru_title_light.png";
import getUserInfo from "@/lib/auth/getUserInfo";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import signInWithGithub from "@/lib/auth/signInWithGithub";
import signout from "@/lib/auth/signout";
import { createClient } from "@/lib/supabase/server";
import { User } from "@supabase/auth-js";
import { UserIcon } from "lucide-react";
import signInWithGoogle from "@/lib/auth/signInWithGoogle";
import AdminLink from "./AdminLink";

const getUserApplicationStatus = async (user: User) => {
  const supabase = createClient();
  const { error, data } = await supabase
    .from("users")
    .select("application_status")
    .eq("user_id", user.id);

  if (error) {
    console.error(error);
  }

  return data?.[0]?.application_status;
};

export default async function Header() {
  const userInfo = await getUserInfo();
  const userApplicationStatus = userInfo
    ? await getUserApplicationStatus(userInfo)
    : undefined;

  const DropDown = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <FaBars />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-secondary w-min outline-none border-none m-1 mt-0">
        <div className="flex flex-col bg-secondary [&>*]:text-nowrap text-base-100 space-y-1">
          <AdminLink />
          <Link href="/#home">Home</Link>
          <Link href="/#about">About MRUHacks</Link>
          <Link href="/#fLinkq">FAQs</Link>
          <Link href="/#community">Our Community</Link>
          <Link href="/#sponsors">Sponsors</Link>
          {userInfo ? (
            <ProfileModal
              user={userInfo}
              application_status={userApplicationStatus || "<unknown>"}
            />
          ) : (
            <div>
              <form action={signInWithGithub}>
                <Button
                  variant="outline"
                  className="w-full p-2 text-md mt-4"
                  type="submit"
                >
                  <FaGithub className="mr-2" />
                  Sign In With Github
                </Button>
              </form>
              <form action={signInWithGoogle}>
                <Button
                  variant="outline"
                  className="w-full p-2 text-md mt-4"
                  type="submit"
                >
                  <FaGoogle className="mr-2" />
                  Sign In With Google
                </Button>
              </form>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );

  return (
    <nav className="w-full z-30">
      <div className="flex flex-row items-center bg-primary justify-between text-base-100 h-[60px] ">
        <div className="lg:hidden flex flex-row items-center ">
          <DropDown />
        </div>
        <Link
          href="/"
          className="h-10 mb-2
                    absolute left-[50%] translate-x-[-50%]
                    lg:relative lg:left-auto lg:translate-x-0"
        >
          <Image
            className="max-h-[52px] w-auto p-1 translate-"
            src={Logo}
            alt="MRUHacks Logo"
          />
        </Link>
        <div className="hidden lg:flex flex-row items-center *:px-2 pr-2">
          <AdminLink />
          <Link href="/#home">Home</Link>
          <Link href="/#about">About MRUHacks</Link>
          <Link href="/#fLinkq">FAQs</Link>
          <Link href="/#community">Our Community</Link>
          <Link href="/#sponsors">Sponsors</Link>
          {userInfo ? (
            <ProfileModal
              user={userInfo}
              application_status={userApplicationStatus || "<unknown>"}
            />
          ) : (
            <SignInModal />
          )}
        </div>
      </div>
    </nav>
  );
}

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
          <form action={signInWithGoogle}>
            <Button
              variant="outline"
              className="w-full p-2 text-md"
              type="submit"
            >
              <FaGoogle className="mr-2" />
              Sign In With Google
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
        <Button variant="outline" className="text-md">
          <UserIcon />
          Profile
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white">
        <div className="grid gap-4">
          <div className="flex flex-row items-center justify-left">
            {user?.user_metadata.avatar_url ? (
              /*eslint-disable-next-line @next/next/no-img-element*/
              <img
                src={user?.user_metadata?.avatar_url}
                className="w-12 h-12 rounded-full mr-2"
                alt="User Avatar"
              />
            ) : (
              <></>
            )}
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
