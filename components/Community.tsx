import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Community() {
  return (
    <div
      className="flex flex-col p-12 items-center justify-center"
      id="community"
    >
      <h1 className="text-3xl font-bold text-primary-700 mb-4">
        Join the MRUHacks Community
      </h1>
      <div className="mb-8">
        <Image
          src="/group_image_vlad4.jpg"
          alt="MRUHacks 2023"
          className="rounded"
          width={1600}
          height={0}
        />
      </div>
      <div className="flex flex-wrap mb-4 space-x-8 text-primary-500">
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
