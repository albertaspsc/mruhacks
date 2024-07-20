"use server";

import { headers } from "next/headers";
import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {
  const origin = headers().get("origin") as string;

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("first-name") as string;
  const lastName = formData.get("last-name") as string;

  const supabase = createClient();

  const { data: email_in_use } = await supabase.rpc("is_email_in_users", {
    email_to_check: email,
  });

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: { full_name: `${firstName} ${lastName}` },
    },
  });

  if (error) {
    return { message: error.message };
  } else if (email_in_use) {
    return { message: "Email already in use, please try logging in" };
  }

  return {
    message: "Check Your Email",
    done: true,
  };
};

export const signIn = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  let url = headers().get("origin") ?? "http://localhost:3000/";

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  let redir = new URL("login", url);
  redir.searchParams.set("tab", "login");

  if (error) {
    return { message: error.message };
  }

  return redirect("/dashboard");
};
