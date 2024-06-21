import { redirect } from "next/navigation";
import { getCallbackUrl } from "../getCallbackUrl";
import { createClient } from "../supabase/server";

export default async function signInWithGithub() {
  "use server";

  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: getCallbackUrl(),
    },
  });

  if (error) {
    console.error("Error logging in:", error);
    return;
  }

  return redirect(data.url as string);
}