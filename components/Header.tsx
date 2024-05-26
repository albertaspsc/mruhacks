"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import Logo from "../public/mru_title_light.jpg";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      setShow(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const DropDown = () => (
    <div className="dropdown">
      <button tabIndex={0} role="button" className="btn btn-primary lg:hidden">
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
    <nav
      className={`fixed w-full z-30 
          transition-transform duration-300 transform 
          ${show ? "translate-y-0" : "-translate-y-full"} 
          `}
    >
      <div className="navbar sticky top-0 bg-primary text-neutral h-[52px]">
        <div className="navbar-start">
          <DropDown />
          <Image
            className="hidden dark:block max-h-10 w-auto"
            src={Logo}
            alt="MRUHacks Logo"
          />
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
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#about">About MRUHacks</a>
    </li>
    <li>
      <a href="#faq">FAQs</a>
    </li>
    <li>
      <a href="#community">Our Community</a>
    </li>
    <li>
      <a href="#sponsors">Sponsors</a>
    </li>
  </>
);
