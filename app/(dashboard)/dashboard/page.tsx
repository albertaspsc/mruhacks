import { Countdown } from "./countdown";
import Profile from "../profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, Suspense, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/server";
import getUserInfo from "@/lib/auth/getUserInfo";
import _, { values } from "lodash";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

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

function PlaceHolderCard() {
  return (
    <Card>
      <CardContent className="opacity-50 flex items-center justify-center h h-52 p-6">
        Coming Soon
      </CardContent>
    </Card>
  );
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

async function AccountFlags() {
  const supabase = createClient();
  const userInfo = await getUserInfo();
  if (!userInfo) return null;

  const { data, error } = await supabase
    .from("users")
    .select("user_id, testing_account, organizers ( user_id )")
    .eq("user_id", userInfo.id)
    .single();

  const is_testing_account = !!data?.testing_account;

  console.log(data);

  const Flag = ({
    className,
    name,
  }: {
    className: string;
    name: string;
    children: ReactNode;
  }) => (
    <li>
      <Badge className={className}>
        {name}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <QuestionMarkCircledIcon />
            </TooltipTrigger>
            <TooltipContent className="max-w-52"></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Badge>
    </li>
  );

  return (
    <div>
      The Following Flags Are Set This Account
      <ul>
        {is_testing_account ? (
          <Flag name={"Testing Account"} className="bg-red-500/50">
            This account has been marked as a testing account, these means it{" "}
            <strong>will not</strong> be considered during the application
            process. If you have been marked as a testing account, contact use
            immediately!
          </Flag>
        ) : null}
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
        <div className="p-5 flex flex-row space-x-5">
          <Profile />
          <span className="w-[1px] my-10 bg-primary" />
          <Suspense>
            <Perms />
          </Suspense>
          <span className="block last:hidden w-[1px] my-10 bg-primary" />
          <Suspense>
            <AccountFlags />
          </Suspense>
        </div>
        <hr className="py-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
          <Section className="row-span-1">
            <SectionTitle>Upcoming Events</SectionTitle>
            <PlaceHolderCard />
          </Section>
          <Section className="row-span-1">
            <SectionTitle>Announcements</SectionTitle>
            <PlaceHolderCard />
          </Section>
          <Section className="row-span-1">
            <SectionTitle>Announcements</SectionTitle>
            <PlaceHolderCard />
          </Section>
          <Section className="overflow-hidden">
            <SectionTitle>MRUHacks Starts In</SectionTitle>
            <Countdown />
          </Section>
        </div>
      </CardContent>
    </Card>
  );
}
