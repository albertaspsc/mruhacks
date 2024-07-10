import signInWithGithub from "@/lib/auth/signInWithGithub";
import { Button } from "./ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import signInWithGoogle from "@/lib/auth/signInWithGoogle";
import { ReactNode } from "react";
import Logo from "./themed_logo";
import { Card, CardContent, CardHeader } from "./ui/card";

const SignInForm = ({ children }: { children?: ReactNode }) => (
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
);

export const SignInPage = ({ children }: { children?: ReactNode }) => (
  <Card className="lg:max-w-[30vw] mx-auto mt-10">
    <CardHeader className="flex flex-col items-center justify-center">
      <Logo className="flex-none" />
      <h2 className="text-primary-content font-bold">Login or Signup</h2>
      <div className="text-center py-4">{children}</div>
    </CardHeader>
    <CardContent className="w-full">
      <SignInForm>{children}</SignInForm>
    </CardContent>
  </Card>
);
