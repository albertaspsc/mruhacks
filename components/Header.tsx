import Image from "next/image";

export default function Header() {
	return (
		<div className="navbar bg-base-100">
		<div className="navbar-start">
			<div className="dropdown">
			<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</div>
			<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<li><a>Home</a></li>
				<li><a>FAQ</a></li>
				<li><a>Sponsors</a></li>
				<li><a>About</a></li>
				<li><a>Team</a></li>
				<li><a>Events</a></li>
			</ul>
			</div>
			<a className="btn btn-ghost"><Image src="/mru_title.jpg" alt="MRUHacks" width={150} height={150} /></a>
		</div>
		<div className="navbar-center hidden lg:flex">
			<ul className="menu menu-horizontal px-1">
				<li><a>Home</a></li>
				<li><a>FAQ</a></li>
				<li><a>Sponsors</a></li>
				<li><a>About</a></li>
				<li><a>Team</a></li>
				<li><a>Events</a></li>
			</ul>
		</div>
		<div className="navbar-end">
			<a className="btn">Button</a>
		</div>
		</div>
	);
}

// 'use client'

// import Image from 'next/image';
// import React from 'react';

// export default function Header() {
//     const [hovered, setHovered] = React.useState(false);

//     return (
//         <header className="w-full flex flex-row justify-between items-center bg-blue-700 text-white p-4 m-2">
//             <div className="flex flex-row items-center justify-center space-x-8">
//                 <div
//                     onMouseEnter={() => setHovered(true)}
//                     onMouseLeave={() => setHovered(false)}
//                 >
//                     {hovered ? (
//                         <Image
//                             src="/mru_title.jpg"
//                             alt="MRUHacks"
//                             width={128}
//                             height={128}
//                         />
//                     ) : (
//                         <Image
//                             src="/mru_hacks.jpg"
//                             alt="MRUHacks"
//                             width={64}
//                             height={64}
//                         />
//                     )}
//                 </div>
//             </div>
//             <div className="flex flex-row-reverse p-4 m-4">
//                 <span className="mx-4 px-2 text-white text-lg"><a>FAQ</a></span>
//                 <span className="mx-4 px-2 text-white text-lg"><a>Sponsors</a></span>
//                 <span className="mx-4 px-2 text-white text-lg"><a>About</a></span>
//                 <span className="mx-4 px-2 text-white text-lg"><a>Team</a></span>
//                 <span className="mx-4 px-2 text-white text-lg"><a>Events</a></span>
//                 <span className="mx-4 px-2 text-white text-lg"><a>Home</a></span>
//             </div>
//         </header>
//     );
// }

{/* <header className="w-full flex flex-row justify-between items-center bg-blue-900 text-white p-4 m-2">
			<div className="flex flex-row items-center justify-center space-x-8">
				<Image src="/mru_title.jpg" alt="MRUHacks" width={200} height={200} />
			</div>
			<div className="flex flex-row-reverse p-4 m-4">
				<span className="mx-4 px-2 text-white text-lg"><a>FAQ</a></span>
				<span className="mx-4 px-2 text-white text-lg"><a>Sponsors</a></span>
				<span className="mx-4 px-2 text-white text-lg"><a>About</a></span>
				<span className="mx-4 px-2 text-white text-lg"><a>Team</a></span>
				<span className="mx-4 px-2 text-white text-lg"><a>Events</a></span>
				<span className="mx-4 px-2 text-white text-lg"><a>Home</a></span>
			</div>

		</header> */}