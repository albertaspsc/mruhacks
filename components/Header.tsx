import Image from "next/image";

export default function Header() {
	return (
		<header className="w-full flex flex-row justify-between items-center bg-blue-900 text-white p-4 m-2">
			<div className="flex flex-row items-center justify-center space-x-8">
				<Image src="/mruh.jpg" alt="MRUHacks" className="w-32 h-32" width={32} height={32} />
				<h1 className="text-xl font-bold text-white">MRUHacks</h1>
			</div>
			<div className="flex flex-row-reverse p-4 m-4">
				<span className="mx-4 px-2 text-white text-lg"><a>FAQ</a></span>
				<span className="mx-4 px-2 text-white text-lg"><a>Sponsors</a></span>
				<span className="mx-4 px-2 text-white text-lg"><a>About</a></span>
				<span className="mx-4 px-2 text-white text-lg"><a>Team</a></span>
				<span className="mx-4 px-2 text-white text-lg"><a>Events</a></span>
				<span className="mx-4 px-2 text-white text-lg"><a>Home</a></span>
			</div>

		</header>
	);
}
