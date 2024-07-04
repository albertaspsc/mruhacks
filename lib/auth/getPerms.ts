import { createClient } from "../supabase/server";
import getUserInfo from "./getUserInfo";

export async function is_admin() {
  const supabase = createClient();
  const { count } = await supabase
    .from("permissions")
    .select("", { count: "exact", head: true });

  return !!count && count > 0;
}

export async function get_perms() {
  const supabase = createClient();
  const userInfo = await getUserInfo();

  if (!userInfo) return null;

  return await supabase.from("permissions").select().eq("user_id", userInfo.id);
}
