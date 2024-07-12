import { createClient } from "@/lib/supabase/server";

import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  DialogFooter,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import { Suspense } from "react";
import ApplicationSkeleton from "./loading";

async function Application({ id }: { id: string }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("application_status")
    .select()
    .eq("user_id", id);

  if (error) console.error(error);

  const application = data?.[0];

  if (!application) return "Unknown Application";

  return (
    <DialogContent>
      <DialogHeader className="flex flex-row items-start bg-muted/50 pt-5">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Application: {application.name}
          </CardTitle>
          <CardDescription>
            Status: {application.application_status} <br />
            Date: {new Date(application.timeSubmitted).toLocaleDateString()}
          </CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <Check className="h-3.5 w-3.5" />
            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
              Approve Application
            </span>
          </Button>
        </div>
      </DialogHeader>
      <div className="grid gap-3">
        <div className="font-semibold">Applicant Details</div>
        <ul className="grid gap-3">
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">University</span>
            <span>{application.university}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Major</span>
            <span>{application.major}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Year</span>
            <span>{application.year}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Hackathons Attended</span>
            <span>{application.hackathons}</span>
          </li>
        </ul>
        <Separator className="my-2" />
        <ul className="grid gap-3"></ul>
      </div>
      <Separator className="my-4" />
      <div className="grid gap-3">
        <div className="font-semibold">Contact Information</div>
        <address className="grid gap-0.5 not-italic text-muted-foreground">
          <span>{application.name}</span>
          <span>
            <a href={`mailto:${application.email}`}>{application.email}</a>
          </span>
        </address>
      </div>
      <Separator className="my-4" />
      <div className="grid auto-rows-max gap-3">
        <div className="font-semibold">Links</div>
        <div className="text-muted-foreground">
          <dl>
            <div className="flex items-center justify-between">
              <dt>Github</dt>
              <dd>{application.github}</dd>
            </div>
          </dl>
          <dl>
            <div className="flex items-center justify-between">
              <dt>linkedin</dt>
              <dd>{application.linkedin}</dd>
            </div>
          </dl>
          <dl>
            <div className="flex items-center justify-between">
              <dt>Personal Site</dt>
              <dd>{application.personalSite}</dd>
            </div>
          </dl>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid gap-3">
        <div className="font-semibold">Additional Information</div>
        <dl className="grid gap-3">
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Dietary Preferences</dt>
            <dd>{application.dietary || "N/A"}</dd>
          </div>
        </dl>
        <dl>
          <div className="flex items-center justify-between">
            <dt>Sponsor Consent</dt>
            <dd>{application.sponsorConsent}</dd>
          </div>
        </dl>
      </div>
      <DialogFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Submitted{" "}
          <time dateTime={application.timeSubmitted}>
            {new Date(application.timeSubmitted).toLocaleDateString()}
          </time>
        </div>
      </DialogFooter>
    </DialogContent>
  );
}

export default function Modal({ params }: { params: { id: string } }) {
  // return <ApplicationSkeleton />;
  return (
    <Suspense fallback={<ApplicationSkeleton />}>
      <Application id={params.id} />{" "}
    </Suspense>
  );
}
