import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";

const signout = async () => {
  "use server";
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/");
};

export default signout;
