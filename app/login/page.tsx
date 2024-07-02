import { Button } from "@/components/ui/button";
import logo from "@/public/mru_title_dark.png";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import signInWithGithub from "@/lib/auth/signInWithGithub";

export default function Login() {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen bg-white flex flex-col items-center justify-center">
      <Image className="px-12 w-full lg:w-1/3" src={logo} alt="MRUHacks" />
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form action={signInWithGithub} className="grid gap-2">
        <Button
          variant="default"
          className="flex flex-row align-middle justify-left text-md text-white p-6"
          type="submit"
        >
          <FaGithub className="mr-2" />
          Sign in with Github
        </Button>
      </form>
    </div>
  );
}
