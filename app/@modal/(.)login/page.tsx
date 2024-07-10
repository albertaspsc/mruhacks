import Logo from "@/components/themed_logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import signInWithGithub from "@/lib/auth/signInWithGithub";
import signInWithGoogle from "@/lib/auth/signInWithGoogle";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <DialogHeader className="flex flex-row items-center space-x-2 pb-4">
        <Logo className="h-10 w-auto" />
        <VisuallyHidden>
          <DialogTitle>Login or Signup</DialogTitle>
        </VisuallyHidden>
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
    </>
  );
}
