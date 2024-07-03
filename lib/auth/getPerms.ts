import { createClient } from "../supabase/server";
import getUserInfo from "./getUserInfo";

const supabase = createClient();

export async function is_admin() {
  const { count } = await supabase
    .from("permissions")
    .select("", { count: "exact", head: true });

  return !!count && count > 0;
}

export async function get_perms() {
  const userInfo = await getUserInfo();

  if (!userInfo) return null;

  return await supabase.from("permissions").select().eq("user_id", userInfo.id);
}
