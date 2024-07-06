import Image from "next/image";
import blue_screen from "@/assets/blue_screen.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={blue_screen}
        className="h-[30vh] w-auto"
        alt="crt montor with windows blue screen "
      />
      <h1 className="text-xl text-base-content">403 Unauthorized Request</h1>
      <p>How dare you!</p>
      <Link href="/" className="underline">
        Go Home
      </Link>
    </div>
  );
}
