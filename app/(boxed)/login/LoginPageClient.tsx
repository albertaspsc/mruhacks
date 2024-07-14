"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginClient({
  signInWithGithub,
  signInWithGoogle,
  signIn,
}: {
  signInWithGithub: () => void;
  signInWithGoogle: () => void;
  signIn: (formData: FormData) => void;
}) {
  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();
    await signIn(new FormData(e.target));
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl">Log In</CardTitle>
        <CardDescription>Enter your information to sign in</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form onSubmit={handleEmailSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="btables@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                required
              />
            </div>
            <div className="text-center text-sm">
              <Link href="#" className="underline">
                Forgot your password?
              </Link>
            </div>
            <Button type="submit" className="w-full text-white font-bold">
              Sign In
            </Button>
          </form>
          <p className="text-center text-sm text-muted">Or sign in with</p>
          <div className="grid grid-cols-2 gap-4">
            <form action={signInWithGithub}>
              <Button variant="outline" className="w-full text-black font-bold">
                <FaGithub className="mr-2" />
                GitHub
              </Button>
            </form>
            <form action={signInWithGoogle}>
              <Button variant="outline" className="w-full text-black font-bold">
                <FaGoogle className="mr-2" />
                Google
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </>
  );
}
