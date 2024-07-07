"use server";

import Image from "next/image";
import { FaLinkedinIn, FaDiscord, FaInstagram } from "react-icons/fa";

import groupPicture from "../public/group_image_vlad4.jpg";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function Community() {
  const socials = {
    Instagram: {
      href: "https://www.instagram.com/mruhacks",
      icon: FaInstagram,
    },
    Discord: { href: "https://discord.gg/tRtW5phPQv", icon: FaDiscord },
    LinkedIn: {
      href: "https://www.linkedin.com/company/mruhacks",
      icon: FaLinkedinIn,
    },
  };

  const Socials = () =>
    Object.entries(socials).map(([name, props], key) => {
      return (
        <Button
          key={key}
          className="text-md space-x-1 flex-wrap"
          variant="link"
        >
          <props.icon />
          <Link
            rel="noopener noreferrer"
            href={props.href}
            target="_blank" /* Open in new tab */
          >
            {name}
          </Link>
        </Button>
      );
    });

  return (
    <div className="space-y-5" id="community">
      <h1 className="text-xl font-bold text-primary-content text-center">
        Join the MRUHacks Community
      </h1>
      <div className="mb-8">
        <Image
          src={groupPicture}
          alt="MRUHacks 2023 Participants"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-row justify-center ">
        <Socials />
      </div>
    </div>
  );
}
