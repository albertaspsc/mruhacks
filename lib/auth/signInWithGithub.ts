import { redirect } from "next/navigation";
import { getCallbackUrl } from "../getCallbackUrl";
import { createClient } from "../supabase/server";

export default async function signInWithGithub() {
  "use server";

  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${getCallbackUrl()}?next=apply`,
    },
  });

  if (error) {
    console.error("Error logging in:", error);
    return;
  }

  console.log(data.url);
  return redirect(data.url as string);
}
