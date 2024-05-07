import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="container p-8 mt-4" id="sponsors">
      <h1 className="text-3xl font-bold text-primary-700 mb-4 text-center">
        Our Sponsors
      </h1>
      <div className="flex flex-col items-center p-6 m-4">
        <p className="text-xl font-medium text-text text-center mb-4 text-text-800">
          MRUHacks would be impossible without our fantastic sponsors!
        </p>
        <div className="btn bg-primary-300 text-xl text-text-50 m-auto">
          <a href="mailto:outreach@mruhacks.ca">Become a Sponsor!</a>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-6 items-center mb-6">
        <div className="col-span-4 row-span-1 col-start-4">
          <Image
            className="rounded-lg m-4"
            src="/mathcomputing.png"
            alt="Department of Mathematics and Computing"
            width={440}
            height={113}
          />
        </div>
        <div className="col-span-2 row-span-1 row-start-2 col-start-1">
          <Image
            className="rounded-lg m-4"
            src="/institute.jpg"
            alt="Institute for Innovation and Entrepreneurship"
            width={600}
            height={240}
          />
        </div>
        <div className="col-span-2 row-span-1 row-start-2 col-start-7">
          <Image
            className="rounded-lg m-4"
            src="/mrulibrary.png"
            alt="Mount Royal University Library"
            width={423}
            height={76}
          />
        </div>
        <div className="col-span-2 row-span-1 col-start-4">
          <Image
            className="rounded-lg m-4"
            src="/accenture.png"
            alt="Accenture"
            width={6251}
            height={1648}
          />
        </div>
        <div className="col-span-4 row-span-3 col-start-3">
          <Image
            className="rounded-lg m-4"
            src="/adx.jpg"
            alt="Alberta Diamond Exchange"
            width={1325}
            height={575}
          />
        </div>
        <div className="col-span-2 row-span-1 col-start-7 row-start-4">
          <Image
            className="rounded-lg m-4"
            src="/showpass.png"
            alt="Showpass"
            width={3882}
            height={1200}
          />
        </div>
        <div className="col-span-2 row-span-1 col-start-1 row-start-4">
          <Image
            className="rounded-lg m-4"
            src="/infinitemind.png"
            alt="Infinite Mind Pictures"
            width={1280}
            height={370}
          />
        </div>
        <div className="col-span-3 row-span-1">
          <Image
            className="rounded-lg m-4"
            src="/stackoverflow.png"
            alt="StackOverflow"
            width={1866}
            height={372}
          />
        </div>
        <div className="col-span-2 row-span-1 col-start-5">
          <Image
            className="rounded-lg m-4"
            src="/citi.jpg"
            alt="CITI"
            width={310}
            height={163}
          />
        </div>
        <div className="col-span-2 row-span-1 col-start-7">
          <Image
            className="rounded-lg m-4"
            src="/github.png"
            alt="GitHub"
            width={3840}
            height={2160}
          />
        </div>
      </div>
    </div>
  );
}
