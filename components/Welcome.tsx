export default function Welcome() {
  return (
    <div
      className="hero min-h-screen bg-opacity-500"
      id="home" style={{ backgroundImage: "url(bg3.jpg)" }}
    >
      <div className="hero-content text-center text-primary-600 p-10 opacity-90">
        <div className="max-w-full p-10">
          <h1 className="mb-5 text-7xl font-extrabold p-4">MRUHacks</h1>
          <p className="mb-5 text-xl text-white font-semibold p-4">
            24 Hours of Collaboration, Coding, and Connections
          </p>
          <button className="btn disabled bg-gray-300 btn-active:bg-secondary-500 border-0 btn-lg text-black">Register for MRUHacks 2024!</button>
        </div>
      </div>
    </div>
  );
}
