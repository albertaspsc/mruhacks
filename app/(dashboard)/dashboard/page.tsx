import { Countdown } from "./countdown";
import Profile from "../profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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

export default async function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-5">
          <Profile />
        </div>
        <hr className="py-5" />
        <div className="grid grid-cols-3">
          <div className="row-span-2">
            <SectionTitle>MRUHacks Starts In</SectionTitle>
            <Countdown />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
