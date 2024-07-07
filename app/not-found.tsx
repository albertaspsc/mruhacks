import Link from "next/link";
import Image from "next/image";
import blue_screen from "@/assets/blue_screen.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={blue_screen}
        className="h-[30vh] w-auto"
        alt="crt montor with windows blue screen "
      />
      <h1 className="text-xl text-base-content">404</h1>
      <p>Content Not Found</p>
      <Link href="/" className="underline">
        Go Home
      </Link>
    </div>
  );
}
