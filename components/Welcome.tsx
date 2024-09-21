import Image from "next/image";
import background from "../public/hero.jpg";
import logo from "../public/mru_title_light.png";
import Link from "next/link";
import { Button } from "./ui/button";
import getUserInfo from "@/lib/auth/getUserInfo";
import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

{
  /* export const RegisterText = () => {
  const get_text = async () => {
    const supabase = createClient();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) return "Register Now!";

    // RLS means we only get the current user here
    const { error, data } = await supabase
      .from("users")
      .select("application_status")
      .single();

    // PGRST116 is the error code for no rows found, which we don't care about
    if (error && error.code !== "PGRST116") console.error(error);

    const application_status = data?.application_status ?? undefined;

    if (application_status === "Applied") return "Edit Application";

    return "Complete Application";
  };

  return <Suspense fallback="Register Now!">{get_text()}</Suspense>;
}; */
}

export default function Welcome() {
  // const userInfo = await getUserInfo();

  return (
    <div
      className="h-screen bg-cover flex flex-col justify-center items-center text-white"
      id="home"
    >
      <Image
        src={background}
        alt=""
        loading="eager"
        placeholder="blur"
        quality={100}
        fill
        className="object-cover -z-10 max-h-screen"
      />
      <Image className="w-1/2" src={logo} alt="MRUHacks" />
      <p className="mb-5 font-semibold p-4">
        24 Hours of Collaboration, Coding, and Connections
      </p>

      <Button
        variant="secondary"
        className="h-16 min-h-16 px-5 text-lg"
        asChild
      >
        <Link href="https://forms.gle/zcKry96wHj94FyZ96">
          {/* <RegisterText /> */}
          Register Now!
        </Link>
      </Button>
    </div>
  );
}
