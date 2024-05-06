'use client'

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Header () {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setShow(false);
      } else {
        // if scrolling up, show the navbar
        setShow(true);
      }

      // remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full transition-transform duration-300 transform ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="navbar sticky top-0 bg-base-300">
 			<div className="navbar-start flex-row flex-initial">
 				<div className="dropdown">
 					<div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
 						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
 					</div>
 					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
 						<li><a href="#">Home</a></li>
 						<li><a href="#">About MRUHacks</a></li>
 						<li><a href="#">FAQs</a></li>
 						<li><a href="#">Our Community</a></li>
 						<li><a href="#">Sponsors</a></li>
 					</ul>
 				</div>
 				<a className="btn btn-ghost">
 					<Image className="dark:hidden"src="/mru_title_dark.jpg" alt="MRUHacks" width={150} height={150} />
 					<Image className="hidden dark:block" src="/mru_title_light.jpg" alt="MRUHacks" width={150} height={150} />
 				</a>
 			</div>

 			<div className="navbar-end hidden md:flex flex-row items-end">
 				<div className="flex-none">
 					<ul className="menu menu-md menu-horizontal px-1">
 						<li><a href="#">Home</a></li>
 						<li><a href="#">About MRUHacks</a></li>
 						<li><a href="#">FAQs</a></li>
 						<li><a href="#">Our Community</a></li>
 						<li><a href="#">Sponsors</a></li>
 					</ul>
 				</div>
 			</div>
 		</div >
    </nav>
  );
};
