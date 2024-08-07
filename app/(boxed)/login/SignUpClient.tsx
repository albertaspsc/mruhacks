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
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

import wave from "@/assets/wage.png";
import { DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

function Toast() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={wave}
        className="h-[30vh] w-auto"
        alt="crt montor with windows blue screen "
      />
      <h1 className="text-xl text-base-content">Signup Successful</h1>
      <p>Please check your email for a confirmation link</p>
    </div>
  );
}

export default function SignUpClient({
  signInWithGithub,
  signInWithGoogle,
  signUp,
}: {
  signInWithGithub: () => void;
  signInWithGoogle: () => void;
  signUp: (formData: FormData) => Promise<{ message?: string; done?: boolean }>;
}) {
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();
  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();
    const data = await signUp(new FormData(e.target));
    setMessage(data?.message ?? "");

    if (data.done) {
      setShowToast(true);
    }
  };

  if (showToast) {
    return <Toast />;
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form onSubmit={handleEmailSubmit} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  type="text"
                  name="first-name"
                  placeholder="Bobby"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Tables"
                  type="text"
                  name="last-name"
                  required
                />
              </div>
            </div>

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
                min={6}
                required
              />
            </div>
            <p className="text-xs">{message}</p>
            <Button type="submit" className="w-full text-white font-bold">
              Create an account
            </Button>
          </form>
          <p className="text-center text-sm text-muted">Or sign up with</p>
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
        <p className="text-center text-sm text-muted mt-2">
          By signing up, you agree to our{" "}
          <Link href="/privacypolicy.html" className="underline">
            Privacy Policy
          </Link>
        </p>
      </CardContent>
    </>
  );
}
