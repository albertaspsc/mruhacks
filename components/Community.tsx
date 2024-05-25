import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import groupPicture from "../public/group_image_vlad4.jpg";

export default function Community() {
  return (
    <div className="flex flex-col items-center" id="community">
      <h1 className="text-2xl md:text-3xl font-bold text-primary-700 text-center">
        Join the MRUHacks Community
      </h1>
      <div className="mb-8 px-4">
        <Image
          src={groupPicture}
          alt="MRUHacks 2023 Participants"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-row mb-4 content-evenly lg:flex-wrap space-x-8 text-primary-500">
        {" "}
        {/* Added flex-wrap for responsive wrapping */}
        <div className="flex flex-col content-center mb-2">
          <a
            href="https://www.instagram.com/mruhacks"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-link"
          >
            <FaInstagram size={24} />
            <p className="text-md font-medium">Instagram</p>
          </a>
        </div>
        <div className="flex flex-col content-center mb-2">
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-link"
          >
            <FaDiscord size={24} />
            <p className="text-md font-medium">Discord</p>
          </a>
        </div>
        <div className="flex flex-col justify-center mb-2">
          <a
            href="https://www.linkedin.com/company/mruhacks"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-link"
          >
            <FaLinkedinIn size={24} />
            <p className="text-md font-medium">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
}
