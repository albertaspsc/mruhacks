import { checkUserPerm } from "@/lib/auth/getPerms";
import Link from "next/link";

export default async function Page() {
  if (await checkUserPerm("super_admin")) {
    return <Link href="/admin">Admin</Link>;
  }

  return;
}
