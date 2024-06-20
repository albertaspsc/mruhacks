import { createClient } from "@/lib/supabase/server";
import { User } from "@supabase/auth-js";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { getCallbackUrl } from "@/lib/getCallbackUrl";

import Logo from "../public/mru_title_light.png";

export default async function Header() {
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
        <MenuItems handleLogIn={handleLogIn} signout={signout} user={user} />
      </ul>
    </div>
  );

  const getUserInfo = async () => {
    const supabase = createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    console.error(error);

    if (!user) {
      return null;
    }

    return user;
  };

  const handleLogIn = async () => {
    "use server";

    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: getCallbackUrl(),
      },
    });

    if (error) {
      console.error("Error logging in:", error);
      return;
    }

    return redirect(data.url as string);
  };

  const signout = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
  };

  const user = await getUserInfo();

  return (
    <nav className="fixed w-full z-30">
      <div className="navbar sticky top-0 bg-primary text-neutral h-[52px]">
        <div className="navbar-start">
          <DropDown />
          <Image className="max-h-10 w-auto" src={Logo} alt="MRUHacks Logo" />
        </div>

        <div className="navbar-end hidden  lg:flex">
          <ul className="menu menu-horizontal font-medium flex-nowrap">
            <MenuItems
              handleLogIn={handleLogIn}
              signout={signout}
              user={user}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

const MenuItems = ({
  handleLogIn,
  signout,
  user,
}: {
  handleLogIn: () => Promise<void>;
  signout: () => Promise<void>;
  user: User | null;
}) => (
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
