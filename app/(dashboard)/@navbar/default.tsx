import Image from "next/image";
import Link from "next/link";
import logo from "@/public/mru_title_light.png";
import { Logout } from "../logout";
import { ModeToggle } from "@/components/theme-select";

export default function Nav() {
  return (
    <nav className="">
      <div className="flex flex-row items-center bg-primary justify-between text-base-100 h-[60px] pl-4 ">
        <Link
          href="/"
          className="h-10 mb-2
                    absolute left-[50%] translate-x-[-50%]
                    lg:relative lg:left-auto lg:translate-x-0"
        >
          <Image
            className="max-h-[52px] w-auto p-1 translate-"
            src={logo}
            alt="MRUHacks Logo"
          />
        </Link>
        <div className="flex flex-row gap-4">
          <ModeToggle />
          <Logout className="hidden md:block" />
        </div>
      </div>
    </nav>
  );
}
