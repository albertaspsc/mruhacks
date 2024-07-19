import type { Database } from "@/types/supabase";

export type UserPermissions =
  Database["public"]["Views"]["user_permissions"]["Row"];
export const EXCLUDE_COLS: ValidColumn[] = ["user_id", "created_at", "self"];
export type ValidColumn = keyof UserPermissions;

export const LOADING_HEADERS: ValidColumn[] = [
  "name",
  "email",
  "user_id",
  "created_at",
  "super_admin",
  "can_view_user_details",
  "can_view_demographics",
  "can_view_agg_stats",
  "self",
];
