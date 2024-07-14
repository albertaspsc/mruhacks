import { createClient } from "@/lib/supabase/server";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  DialogFooter,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import { Suspense } from "react";
import ApplicationSkeleton from "./loading";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
    <DialogContent className="max-h-screen overflow-y-auto">
      <DialogHeader className="flex flex-row items-start bg-muted/50 pt-5">
        <div className="grid gap-0.5">
          <CardTitle className="group flex flex-row flex-wrap items-baseline text-xl">
            <span className="mr-1">{application.name}</span>
            <span className="text-muted-foreground text-lg">
              (<a href={`mailto:${application.email}`}>{application.email}</a>)
            </span>
          </CardTitle>
          <CardDescription>
            {application.application_status} -{" "}
            {new Date(application.timeSubmitted).toLocaleDateString()}
          </CardDescription>
        </div>
      </DialogHeader>
      <div className="grid gap-3 mb-2">
        <div className="font-semibold">Applicant Details</div>
        <ul className="flex flex-row">
          <li className="flex flex-col flex-1">
            <span className="text-muted-foreground text-sm">University</span>
            <span>{application.university}</span>
          </li>
          <li className="flex flex-col flex-1">
            <span className="text-muted-foreground text-sm">Major</span>
            <span>{application.major}</span>
          </li>
        </ul>
        <ul className="flex flex-row">
          <li className="flex flex-col flex-1">
            <span className="text-muted-foreground text-sm">Year</span>
            <span>{application.year}</span>
          </li>
          <li className="flex flex-col flex-1">
            <span className="text-muted-foreground text-sm">
              Hackathons Attended
            </span>
            <span>{application.hackathons}</span>
          </li>
        </ul>
      </div>
      <div className="grid auto-rows-max gap-3 mb-2">
        <div className="font-semibold">Links</div>
        <ul className="grid gap-3">
          {application.github && (
            <li className="flex flex-col">
              <span className="text-muted-foreground text-sm">GitHub</span>
              <a
                href={
                  application.github.startsWith("http")
                    ? application.github
                    : `https://github.com/${application.github}`
                }
              >
                {application.github}
              </a>
            </li>
          )}
          {application.linkedin && (
            <li className="flex flex-col">
              <span className="text-muted-foreground text-sm">LinkedIn</span>
              <a
                href={
                  application.linkedin.startsWith("http")
                    ? application.linkedin
                    : `https://linkedin.com/in/${application.linkedin}`
                }
              >
                {application.linkedin}
              </a>
            </li>
          )}
          {application.portfolio && (
            <li className="flex flex-col">
              <span className="text-muted-foreground text-sm">
                Personal Site
              </span>
              <a href={application.portfolio}>{application.portfolio}</a>
            </li>
          )}
        </ul>
      </div>
      <div className="grid gap-3">
        <div className="font-semibold">Additional Information</div>
        <ul className="flex flex-row">
          <li className="flex flex-col flex-1">
            <span className="text-muted-foreground text-sm">
              Dietary Preferences
            </span>
            <span>{application.dietary || "N/A"}</span>
          </li>
          <li className="flex flex-col flex-1">
            <span className="text-muted-foreground text-sm">
              Sponsor Consent
            </span>
            <span>{application.sponsorConsent}</span>
          </li>
        </ul>
      </div>
      <DialogFooter className="flex flex-row items-center border-t bg-muted/50 px-2 py-2">
        <div className="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <Check className="h-3.5 w-3.5" />
            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
              Approve Application
            </span>
          </Button>
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
