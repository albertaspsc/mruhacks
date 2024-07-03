import { SignInForm } from "@/components/SignInDialog";
import Unauthorized from "@/components/Unauthorized";
import { is_admin } from "@/lib/auth/getPerms";
import getUserInfo from "@/lib/auth/getUserInfo";
import { ReactNode } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default async function Layout(props: {
  children: ReactNode;
  applications: React.ReactNode;
}) {
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
    <div className="flex-row">
      <h1>Dashboard</h1>
      <Tabs>
        <TabsList>
          <TabsTrigger value="application">Applications</TabsTrigger>
          <TabsTrigger value="check_in">Check In</TabsTrigger>
        </TabsList>
        <TabsContent value="application">{props.applications}</TabsContent>
        <TabsContent value="check_in">TODO</TabsContent>
      </Tabs>
    </div>
  );
}
