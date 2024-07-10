import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import Link from "next/link";
import Image from "next/image";
import blue_screen from "@/assets/blue_screen.png";

export default function Page() {
  return (
    <>
      <DialogHeader className="flex flex-row items-center space-x-2 pb-4">
        <DialogTitle>Unauthorzied </DialogTitle>
      </DialogHeader>
      <DialogContent>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={blue_screen}
            className="h-[30vh] w-auto"
            alt="crt montor with windows blue screen "
          />
          <h1 className="text-xl text-base-content">
            403 Unauthorized Request
          </h1>
          <p>How dare you!</p>
        </div>
      </DialogContent>
    </>
  );
}
