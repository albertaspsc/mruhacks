import { Countdown } from "./countdown";
import Profile from "../profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, Suspense, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/server";
import getUserInfo from "@/lib/auth/getUserInfo";
import _ from "lodash";
import AnnouncementCards from "../admin/announcements/AnnouncementCards";
import EventCards from "./EventCards";
import UserQR from "../QR";
function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-primary text-xl font-bold ", className)}>
      {children}
    </h3>
  );
}

const Section = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={className} {...props}>
    {children}
  </div>
);

async function Perms() {
  const supabase = createClient();
  const userInfo = await getUserInfo();
  if (!userInfo) return null;

  const { data, error } = await supabase
    .from("permissions")
    .select()
    .eq("user_id", userInfo.id)
    .single();

  if (error || !data) {
    // Not getting any data is not an error for use
    if (error.code !== "PGRST116") {
      console.error(error);
    }
    return null;
  }

  const { user_id, created_at, ...perms } = data;

  const has_perms = _.sum(Object.values(perms));
  if (!has_perms) return null;

  return (
    <div>
      <h3 className="font-semibold">You Have The Following Permissions</h3>
      <ul className="list-disc">
        {_.map(perms, (has_perm, perm_name) => {
          if (!has_perm) return;
          const pretty_name = _.lowerCase(perm_name);
          return (
            <li key={perm_name} className="capitalize list-inside pl-2">
              {pretty_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default async function Page() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>My Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="md:flex flex-row justify-between">
            <div className="p-5 md:flex flex-row space-x-5 flex-wrap lg:w-1/2 ">
              <Profile />
              <span className="w-[1px] my-10 bg-primary" />
              <Suspense>
                <Perms />
              </Suspense>
            </div>
            <UserQR />
            <div className="md:flex flex-row lg:w-1/2 justify-around">
              <Section className="overflow-hidden justify-self-center">
                <SectionTitle>MRUHacks Starts In</SectionTitle>
                <Countdown />
              </Section>
            </div>
          </div>
          <hr className="py-5" />
          <div className="lg:flex flex-row-reverse justify-around">
            <Section className="lg:w-[48%] h-full">
              <SectionTitle>Announcements</SectionTitle>
              <AnnouncementCards />
            </Section>
            <Section className="h-fit lg:w-[48%]">
              <SectionTitle>Upcoming Events</SectionTitle>
              <EventCards />
            </Section>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
