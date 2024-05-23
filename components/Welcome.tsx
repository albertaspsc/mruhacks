export default function Welcome() {
  return (
    <div
      className="hero min-h-screen bg-opacity-500"
      id="home"
    // style={{ backgroundImage: "url(bg.jpg)" }}
    >
      <div className="hero-overlay">
        {/* <img src="/bg.jpg" alt="" /> */}
      </div>
      <div className="hero-content text-center text-primary-500 p-10 opacity-90">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold p-10">MRUHacks</h1>
          <p className="mb-5 text-xl font-semibold p-8">
            24 Hours of Collaboration, Coding, and Connections
          </p>
          <button className="btn bg-gray-300 border-0 text-black disabled">Join Us</button>
        </div>
      </div>
    </div>
  );
}
