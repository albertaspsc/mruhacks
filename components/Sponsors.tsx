import Image from "next/image"

export default function Sponsors() {
    return (
        <div className="container p-8 mt-4">
            <h1 className="text-4xl font-semibold text-center">Our Sponsors</h1>
            <p className="text-lg font-medium text-text-500">MRUHacks would be impossible without our fantastic sponsors.</p>
            <div className="btn btn-secondary"><a href="mailto:outreach@mruhacks.ca">Become a Sponsor!</a></div>
            <div className="grid grid-cols-7 gap-6 items-center">
                <div className="col-span-3 row-span-1 col-start-3"><Image className="bg-gray-200 m-4" src="/accenture.png" alt="Accenture" width={6251} height={1648}></Image></div>
                <div className="col-span-3 row-span-2"><Image className="bg-gray-200 m-4" src="/citi.jpg" alt="CITI" width={310} height={163}></Image></div>
                <div className="col-span-3 row-span-3 col-start-4"><Image className="bg-gray-200 m-4" src="/github.png" alt="GitHub" width={3840} height={2160}></Image></div>
                <div className="col-span-1 row-span-1"><Image className="bg-gray-200 m-4" src="/infinitemind.png" alt="Infinite Mind Pictures" width={1280} height={370}></Image></div>
                <div className="col-span-1 row-span-1"><Image className="bg-gray-200 m-4" src="/institute.jpg" alt="Institute for Innovation and Entrepreneurship" width={600} height={240}></Image></div>
                <div className="col-span-7 row-span-2"><Image className="bg-gray-200 m-4" src="/adx.jpg" alt="Alberta Diamond Exchange" width={1325} height={575}></Image></div>
                <div className="col-span-1 row-span-1"><Image className="bg-gray-200 m-4" src="/mathcomputing.png" alt="Department of Mathematics and Computing" width={440} height={113}></Image></div>
                <div className="col-span-1 row-span-1"><Image className="bg-gray-200 m-4" src="/mrulibrary.png" alt="Mount Royal University Library" width={423} height={76}></Image></div>
                <div className="col-span-2 row-span-2"><Image className="bg-gray-200 m-4" src="/showpass.png" alt="Showpass" width={3882} height={1200}></Image></div>
                <div className="col-span-3 row-span-2"><Image className="bg-gray-200 m-4" src="/stackoverflow.png" alt="StackOverflow" width={1866} height={372}></Image></div>
            </div>
        </div>);
}
