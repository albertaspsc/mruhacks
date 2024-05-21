import Image from "next/image";
import BubbleUI from "react-bubble-ui-v2";
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
        Join the MRUHacks Community!
      </h1>
      <div className="mb-8">
        <Image
          src="/group_image_vlad4.jpg"
          alt="Big cat chilling"
          className="rounded"
          width={1600}
          height={0}
        />
      </div>
      <div className="flex flex-wrap mb-4 text-primary-500">
        {" "}
        {/* Added flex-wrap for responsive wrapping */}
        <a
          href="https://www.instagram.com/mruhacks"
          target="_blank"
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
    </div>
  );
}
