import { headers } from "next/headers";
import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {
  "use server";

  const origin = headers().get("origin") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("first-name") as string;
  const lastName = formData.get("last-name") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: { full_name: `${firstName} ${lastName}` },
    },
  });

  if (error) {
    console.error(error);
    return redirect("/login?message=Invalid%20credentials");
  }

  return redirect(
    "/login?message=Check%20your%20email%20for%20a%20login%20link",
  );
};

export const signIn = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect("/login?message=Invalid%20credentials");
  }

  return redirect("/dashboard");
};
