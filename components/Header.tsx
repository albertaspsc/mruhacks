import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

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
        <MenuItems />
      </ul>
    </div>
  );

  return (
    <nav className="fixed w-full z-30">
      <div className="navbar sticky top-0 bg-primary text-neutral h-[52px]">
        <div className="navbar-start">
          <DropDown />
          <Image className="max-h-10 w-auto" src={Logo} alt="MRUHacks Logo" />
        </div>

        <div className="navbar-end hidden  lg:flex">
          <ul className="menu menu-horizontal font-medium flex-nowrap">
            <MenuItems />
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
