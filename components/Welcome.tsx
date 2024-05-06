export default function Welcome() {
	return (
		<div className="hero min-h-screen" style={{backgroundImage: 'url(bg.jpg)'}}>
		<div className="hero-overlay bg-opacity-30">
			{/* <img src="/bg.jpg" alt="" /> */}
		</div>
		<div className="hero-content text-center text-neutral-content">
			<div className="max-w-md">
			<h1 className="mb-5 text-7xl font-bold">Welcome to MRUHacks</h1>
			<p className="mb-5">Enabling students to dream, design, and develop their future!</p>
			<button className="btn btn-primary">Join Us</button>
			</div>
		</div>
		</div>
	);
}
