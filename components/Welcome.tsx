import Image from "next/image";
import background from "../public/bg3.jpg";
import logo from "../public/mru_title_light.jpg";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="hero min-h-screen bg-opacity-60 bg-auto" id="home">
      <Image
        src={background}
        alt=""
        className="hero-overlay absolute object-cover"
      />
      <div className="hero-content text-center text-white flex-col">
        <Image className="w-1/2" src={logo} alt="MRUHacks" />
        <p className="mb-5 font-semibold p-4">
          24 Hours of Collaboration, Coding, and Connections
        </p>
        <Link
          href="https://forms.gle/3E7CXnPtpGGGuN3y7"
          target="_blank"
          className="btn btn-secondary"
        >
          Pre-register now!
        </Link>
      </div>
    </div>
  );
}
