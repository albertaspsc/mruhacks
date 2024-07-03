import { is_admin } from "@/lib/auth/getPerms";
import Link from "next/link";

export default async function Page() {
  if (await is_admin()) {
    return <Link href="/admin">Admin</Link>;
  }

  return;
}
