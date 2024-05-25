import Image from "next/image";

import logo from "../public/mru_title_light.jpg";

export default function Welcome() {
  return (
    <div className="hero bg-[url('../public/bg3.jpg')] bg-auto" id="home">
      <div className="min-h-screen hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white flex-col">
        <Image src={logo} alt="MRUHacks title logo" />
        <p className="mb-5 text-xl font-semibold p-4">
          24 Hours of Collaboration, Coding, and Connections
        </p>
        <a href="https://forms.gle/3E7CXnPtpGGGuN3y7" target="_blank">
          <button className="btn bg-secondary-500 text-xl border-0 btn-xl text-white font-semibold hover:bg-secondary-300 hover:text-black">
            Pre-register now!
          </button>
        </a>
      </div>
    </div>
  );
}
