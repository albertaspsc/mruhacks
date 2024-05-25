import Image from "next/image";
export default function Welcome() {
  return (
    <div className="hero bg-[url('../public/bg3.jpg')]" id="home">
      <div className="min-h-screen hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white flex-col">
        {/* <h1 className="mb-5 text-7xl font-extrabold p-4">MRUHacks</h1> */}
        <Image
              className="hidden dark:block"
              src="/mru_title_light.jpg"
              alt="MRUHacks"
              width={500}
              height={500}
            />
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
