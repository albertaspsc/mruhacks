import Image from "next/image";
import dark_logo from "../public/mru_title_dark.png";
import signInWithGithub from "@/lib/auth/signInWithGithub";
import { Button } from "./ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import signInWithGoogle from "@/lib/auth/signInWithGoogle";
import { ReactNode } from "react";

export const SignInForm = ({ children }: { children?: ReactNode }) => (
  <div className="flex flex-col items-center justify-center max-w-[20%] mx-auto pt-10">
    <Image className="h-20 w-auto" src={dark_logo} alt="MRUHacks" />
    <h2 className="text-primary-content font-bold">Login or Signup</h2>
    <div className="text-center py-4">{children}</div>
    <div className="flex flex-col items-center  space-y-2 w-full">
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
  </div>
);
