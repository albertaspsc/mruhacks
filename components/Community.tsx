import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import groupPicture from "../public/group_image_vlad4.jpg";

export default function Community() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-2xl md:text-3xl font-bold text-primary-700 text-center">
        Join the MRUHacks Community!
      </h1>
      <Image
        src={groupPicture}
        alt="Image of MRUHacks 2023 Attendance, gathered for group photo"
        className="rounded-2xl"
      />

      <div className="mb-4 text-primary-500">
        <a
          href="https://www.instagram.com/mruhacks"
          rel="noopener noreferrer"
          className="btn btn-active btn-link mr-4 mb-2"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-active btn-link mr-4 mb-2"
        >
          <FaDiscord size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/mruhacks"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-active btn-link mb-2"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent-700">
          Sign up for our newsletter!
        </h2>

        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn join-item rounded-r-full bg-primary-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
