import { Countdown } from "./countdown";
import Profile from "../profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, Suspense, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/server";
import getUserInfo from "@/lib/auth/getUserInfo";
import _ from "lodash";
import { events } from "@/events/events";
import { announcements } from "@/events/announcements";
import { EventCards } from "./EventCard";
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

function Announcements() {
  return announcements.map((announcement) => (
    <Card key={announcement.title} className="my-4">
      <CardContent className="flex flex-row justify-between items-center h h-auto p-4">
        <div className="font-semibold">{announcement.title}</div>
        <div>{announcement.date}</div>
      </CardContent>
    </Card>
  ));
}
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
    <Card>
      <CardHeader>
        <CardTitle>My Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5 flex flex-row space-x-5 flex-wrap ">
          <Profile />
          <span className="w-[1px] my-10 bg-primary" />
          <Suspense>
            <Perms />
          </Suspense>
        </div>
        <hr className="py-5" />
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 ">
          <Section className="row-span-1">
            <SectionTitle>Upcoming Events</SectionTitle>
            <EventCards />
          </Section>
          <Section className="row-span-1">
            <SectionTitle>Announcements</SectionTitle>
            <Announcements />
          </Section>
          <Section className="overflow-hidden justify-self-center">
            <SectionTitle>MRUHacks Starts In</SectionTitle>
            <Countdown />
          </Section>
        </div>
      </CardContent>
    </Card>
  );
}
