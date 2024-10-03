import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import Institute from "../public/Institute.jpg";
import Library from "../public/mrulibrary.png";
import Arcurve from "../public/arcurve_logo_2024_color_large.png";
export default function Sponsors() {
  return (
    <div id="sponsors" className="space-y-5">
      <h1 className="font-bold text-primary-content text-xl text-center">
        Our Sponsors
      </h1>
      <div className="flex flex-col items-center">
        <p className="font-medium text-center mb-4">
          MRUHacks would be impossible without our fantastic sponsors.
        </p>
        <div className="flex flex-row justify-evenly align-middle w-1/2 h-1/5 mx-4 py-8">
          <Image
            src={Arcurve}
            alt="Arcurve"
            width={300}
            className="object-contain"
          />
        </div>
        <div className="flex flex-row justify-evenly align-middle w-1/2 h-1/5 mx-4 my-4">
          <Image
            src={Institute}
            alt="Institute for Innovation and Entrepreneurship"
            width={250}
            className="object-contain"
          />
          <Image
            src={Library}
            alt="Mount Royal University Library"
            width={250}
            className="object-contain"
          />
        </div>
        <Button className="h-16 min-h-16 px-5 text-lg text-base-100" asChild>
          <Link href="mailto:outreach@mruhacks.ca" className="">
            Become a Sponsor!
          </Link>
        </Button>
      </div>
    </div>
  );
}
