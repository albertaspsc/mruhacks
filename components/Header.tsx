import Image from "next/image";

export default function Header() {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start flex-row flex-initial">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li><a href="#">Home</a></li>
						<li><a href="#">About MRUHacks</a></li>
						<li><a href="#">FAQs</a></li>
						<li><a href="#">Our Community</a></li>
						<li><a href="#">Sponsors</a></li>
					</ul>
				</div>
				<a className="btn btn-ghost"><Image src="/mruhacks_title.PNG" alt="MRUHacks" width={150} height={150} /></a>
			</div>

			<div className="hidden md:flex flex-row ">
				<div className="items-end">
					<ul className="menu menu-lg menu-horizontal px-1">
						<li><a href="#">Home</a></li>
						<li><a href="#">About MRUHacks</a></li>
						<li><a href="#">FAQs</a></li>
						<li><a href="#">Our Community</a></li>
						<li><a href="#">Sponsors</a></li>
					</ul>
				</div>
			</div>
		</div >
	);
}
