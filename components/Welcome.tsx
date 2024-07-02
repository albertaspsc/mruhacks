import Image from "next/image";
import background from "../public/hero.jpg";
import logo from "../public/mru_title_light.png";
import dark_logo from "../public/mru_title_dark.png";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import signInWithGithub from "@/lib/auth/signInWithGithub";
import { Button } from "./ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import signInWithGoogle from "@/lib/auth/signInWithGoogle";
import getUserInfo from "@/lib/auth/getUserInfo";

const SignInDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="btn btn-secondary btn-lg">Register Now!</button>
    </DialogTrigger>
    <DialogContent className="bg-white">
      <DialogHeader className="flex flex-row items-center space-x-2 pb-4">
        <Image className="h-10 w-auto" src={dark_logo} alt="MRUHacks" />
        <p className="text-primary-content">|</p>
        <h2 className="text-primary-content font-bold">Login or Signup</h2>
      </DialogHeader>
      <div className="flex flex-col items-center  space-y-2">
        <form action={signInWithGithub} className="w-full">
          <Button
            variant="default"
            className="flex flex-row align-middle text-base-100 w-full"
            type="submit"
          >
            <FaGithub className="mr-2" />
            Sign in with Github
          </Button>
        </form>
        <form action={signInWithGoogle} className="w-full">
          <Button
            variant="default"
            className="flex flex-row align-middle text-base-100 w-full"
            type="submit"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </Button>
        </form>
      </div>
    </DialogContent>
  </Dialog>
);

export default async function Welcome() {
  const userInfo = await getUserInfo();

  return (
    <div className="hero min-h-screen bg-opacity-60 bg-auto" id="home">
      <Image src={background} alt="" className="hero-overlay object-cover" />
      <div className="hero-content text-center text-white flex-col">
        <Image className="w-1/2" src={logo} alt="MRUHacks" />
        <p className="mb-5 font-semibold p-4">
          24 Hours of Collaboration, Coding, and Connections
        </p>
        {userInfo ? (
          <Link href="/apply">
            <button className="btn btn-secondary btn-lg">Register Now!</button>
          </Link>
        ) : (
          <SignInDialog />
        )}
      </div>
    </div>
  );
}
