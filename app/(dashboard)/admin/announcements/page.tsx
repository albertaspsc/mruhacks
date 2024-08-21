import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnnouncementForm } from "./AnnouncementForm";
import Announcements from "./AnnouncementCards";
import { createClient } from "@/lib/supabase/server";
import { checkUserPerm } from "@/lib/auth/getPerms";
import { unsubscribeURL } from "./lib";

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

export default async function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Announcements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5 flex flex-row space-x-5 flex-wrap "></div>
        <hr className="py-5" />
        <Section className="row-span-1">
          <SectionTitle>Make an Announcement</SectionTitle>
          <Card className="flex items-center justify-center h h-auto p-6 my-4">
            <AnnouncementForm />
          </Card>
        </Section>
      </CardContent>
    </Card>
  );
}
