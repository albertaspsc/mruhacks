import { error } from "console";
import { createClient } from "../supabase/server";
import getUserInfo from "./getUserInfo";

export async function is_admin() {
  const userInfo = await getUserInfo();
  const supabase = createClient();

  const { count } = await supabase
    .from("permissions")
    .select("", { count: "exact", head: true })
    .eq("user_id", userInfo?.id);

  return !!count && count > 0;
}

export async function get_perms() {
  const supabase = createClient();
  const userInfo = await getUserInfo();

  if (!userInfo) return { data: null, error: "Failed to get user info" };

  return await supabase.from("permissions").select().eq("user_id", userInfo.id);
}

export async function get_perms_by_user_id(user_id: string) {
  const supabase = createClient();

  return await supabase.from("permissions").select().eq("user_id", user_id);
}
