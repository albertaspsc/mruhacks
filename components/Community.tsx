"use server";

import Image from "next/image";
import { FaLinkedinIn, FaDiscord, FaInstagram } from "react-icons/fa";

import groupPicture from "../public/group_image_vlad4.jpg";
import Link from "next/link";

export default async function Community() {
  const socials = {
    Instagram: {
      href: "https://www.instagram.com/mruhacks",
      icon: FaInstagram,
    },
    Discord: { href: "https://www.example.com", icon: FaDiscord },
    LinkedIn: {
      href: "https://www.linkedin.com/company/mruhacks",
      icon: FaLinkedinIn,
    },
  };

  const Socials = () =>
    Object.entries(socials).map(([name, props], key) => {
      return (
        <Link
          key={key}
          href={props.href}
          target="_blank" /* Open in new tab */
          rel="noopener noreferrer"
          className="btn btn-link font-medium text-primary-content text-lg"
        >
          {/* I hate this more than you know but it works soooo*/}
          <props.icon />
          {name}
        </Link>
      );
    });

  return (
    <div className="space-y-5" id="community">
      <h1 className="text-xl font-bold text-primary-content text-center">
        Join the MRUHacks Community
      </h1>
      <Image
        src={groupPicture}
        alt="MRUHacks 2023 Participants"
        className="rounded-2xl"
      />
      <span className="flex justify-center flex-wrap ">
        <Socials />
      </span>
    </div>
  );
}
