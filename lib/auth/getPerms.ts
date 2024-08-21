import { boolean } from "zod";
import { createClient } from "../supabase/server";
import getUserInfo from "./getUserInfo";
import { Database } from "@/types/supabase";
import { mapValues } from "lodash";

/**
 * @deprecated use `checkUserPerm("super_admin")` instead
 */
export async function is_admin() {
  return await checkUserPerm("super_admin");
}

export async function get_perms(): Promise<Record<Perms, boolean> | null> {
  const supabase = createClient();
  const userInfo = await getUserInfo();

  if (!userInfo) {
    console.error("Failed to fetch user info");
    return null;
  }

  const { data, error } = await supabase
    .from("permissions")
    .select()
    .eq("user_id", userInfo.id)
    .single();

  if (!data || error) {
    console.error(error || "failed to get permissions");
    return null;
  }

  const { super_admin, ...perm } = data;
  mapValues(
    perm,
    (element: unknown, key: Perms, object: Record<Perms, boolean>) => {
      if (typeof element === "boolean") object[key] = super_admin;
    },
  );

  return { super_admin, ...perm };
}

export async function get_perms_by_user_id(user_id: string) {
  const supabase = createClient();

  return await supabase.from("permissions").select().eq("user_id", user_id);
}

export async function checkUserPerm(perm: Perms, user_id?: string) {
  const userInfo = await getUserInfo();
  const supabase = createClient();

  const id = user_id ?? userInfo?.id;
  if (!id) {
    console.error("Failed to get user_id");
    return null;
  }

  const { data, error } = await supabase
    .from("permissions")
    .select()
    .eq("user_id", id)
    .maybeSingle();

  if (!data || error) {
    console.error(error || "Failed to get user with id : " + id);
    return null;
  }

  return data[perm] || data.super_admin;
}

// Remove the two non_perm columns from the permission table
export type Perms = keyof Omit<
  Database["public"]["Tables"]["permissions"]["Row"],
  "user_id" | "created_at"
>;

export type CheckPermsProps =
  Database["public"]["Functions"]["check_permission"]["Args"];
