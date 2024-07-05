import { SignInForm } from "@/components/SignInDialog";
import Unauthorized from "@/components/Unauthorized";
import { is_admin } from "@/lib/auth/getPerms";
import getUserInfo from "@/lib/auth/getUserInfo";
import { ReactNode } from "react";

import React from "react";
import Link from "next/link";

export default async function Layout(props: { children: ReactNode }) {
  const userInfo = await getUserInfo();

  if (!userInfo) {
    return (
      <SignInForm>
        Looks like you stumbled into the admin view, please login to continue
      </SignInForm>
    );
  }

  if (!(await is_admin())) {
    return Unauthorized();
  }

  return (
    <div className="flex flex-row flex-grow px-10">
      <div id="menu" className="pt-10 pr-20 [&>ul]:pl-1">
        <h2 className="text-xl font-bold pb-5">Admin Menu</h2>
        <ul>
          <li className="pb-2">
            <Link href="/admin/applications">Applications</Link>
          </li>
          <ul className="pl-4">
            <li>
              <Link href="/admin/applications/table">Table</Link>
            </li>
            <li>
              <Link href="/admin/applications/stats">Stats</Link>
            </li>
          </ul>
        </ul>
      </div>
      <div className="flex-grow mt-20">{props.children}</div>
    </div>
  );
}
