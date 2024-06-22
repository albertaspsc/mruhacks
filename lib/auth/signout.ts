import { createClient } from "../supabase/server";

const signout = async () => {
  "use server";
  const supabase = createClient();
  await supabase.auth.signOut();
};

export default signout;
