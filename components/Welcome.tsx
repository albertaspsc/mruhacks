export default function Welcome() {
  return (
    <div
      className="hero min-h-screen bg-opacity-500"
      id="home" style={{ backgroundImage: "url(bg3.jpg)" }}
    >
      <div className="hero-content text-center text-white p-10 opacity-90">
        <div className="max-w-full p-10">
          <h1 className="mb-5 text-7xl font-extrabold p-4">MRUHacks</h1>
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
    </div>
  );
}
