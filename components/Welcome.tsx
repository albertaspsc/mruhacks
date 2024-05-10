export default function Welcome() {
  return (
    <div className="hero bg-[url('../public/bg.jpg')] bg-auto" id="home">
      <div className="min-h-screen hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content flex-col">
        <h1 className="text-2xl font-bold text-text-200">MRUHacks</h1>
        <p className="text-text-200 text-lg">
          24 Hours of Collaboration, Coding, and Connections
        </p>
        <button className="btn bg-accent-700 hover:bg-accent-500 border-0 text-white">
          Join Us
        </button>
      </div>
    </div>
  );
}
