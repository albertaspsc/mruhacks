import Image from "next/image";

export default function Header() {
	return (
		<header className="w-full flex flex-row justify-between items-center bg-blue-900 text-white p-4 m-2">
			<div className="flex flex-row items-center justify-center space-x-8">
				<Image src="/mru_title.jpg" alt="MRUHacks" width={200} height={200} />
				{/* <h1 className="text-xl font-bold text-white">MRUHacks</h1> */}
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
