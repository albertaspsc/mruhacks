import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Logo from "../public/mru_title_light.png";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
// import AdminLink from "./AdminLink";
import { createClient } from "@/lib/supabase/server";

export default async function Header() {
  {
    /* const client = createClient();
  const getSession = async () => {
    const session = await client.auth.getSession();
    return session;
  };

  const isLoggedIn = (await getSession()).data.session !== null;
*/
  }
  const DropDown = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <FaBars />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-secondary w-min outline-none border-none m-1 mt-0">
        <div className="flex flex-col bg-secondary [&>*]:text-nowrap text-base-100 space-y-1">
          {/* <AdminLink /> */}
          <Link href="/#home">Home</Link>
          <Link href="/#about">About MRUHacks</Link>
          <Link href="/#fLinkq">FAQs</Link>
          <Link href="/#community">Our Community</Link>
          <Link href="/#sponsors">Sponsors</Link>
          {/* {isLoggedIn ? (
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="w-full p-2 text-md mt-4"
                type="submit"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button
                variant="outline"
                className="w-full p-2 text-md mt-4"
                type="submit"
              >
                Log In / Sign Up
              </Button>
            </Link>
          )} */}
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
          {/* <AdminLink /> */}
          <Link href="/#home">Home</Link>
          <Link href="/#about">About MRUHacks</Link>
          <Link href="/#fLinkq">FAQs</Link>
          <Link href="/#community">Our Community</Link>
          <Link href="/#sponsors">Sponsors</Link>
          {/* {isLoggedIn ? (
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="w-full p-2 text-md"
                type="submit"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button
                variant="outline"
                className="w-full p-2 text-md"
                type="submit"
              >
                Log In / Sign Up
              </Button>
            </Link>
          )} */}
        </div>
      </div>
    </nav>
  );
}
