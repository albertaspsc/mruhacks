export default function Welcome() {
  return (
    <div
      className="hero min-h-screen bg-opacity-500"
      id="home"
      style={{ backgroundImage: "url(bg.jpg)"}}
    >
      <div className="hero-overlay">
        {/* <img src="/bg.jpg" alt="" /> */}
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold text-text-200">MRUHacks</h1>
          <p className="mb-5 text-text-200 text-lg">
            24 Hours of Collaboration, Coding, and Connections
          </p>
          <button className="btn bg-accent-700 hover:bg-accent-500 border-0 text-white">Join Us</button>
        </div>
      </div>
    </div>
  );
}
