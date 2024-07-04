import Link from "next/link";
import { Button } from "./ui/button";

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
        <Button className="h-16 min-h-16 px-5 text-lg text-base-100" asChild>
          <Link href="mailto:outreach@mruhacks.ca" className="">
            Become a Sponsor!
          </Link>
        </Button>
      </div>
    </div>
  );
}
