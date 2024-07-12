import {
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ApplicationSkeleton() {
  return (
    <DialogContent>
      <DialogHeader className="flex flex-row items-start bg-muted/50 pt-5">
        <div className="grid gap-2">
          <CardTitle className="group flex items-center gap-2 text-lg">
            <Skeleton className="h-6 w-48" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-4 w-48" />
          </CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Skeleton className="h-8 w-24" />
        </div>
      </DialogHeader>
      <div className="grid gap-3">
        <div className="font-semibold">
          <Skeleton className="h-6 w-52" />
        </div>
        <ul className="grid gap-3">
          {[...Array(4)].map((_, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="text-muted-foreground">
                <Skeleton className="h-4 w-32" />
              </span>
              <span>
                <Skeleton className="h-4 w-16" />
              </span>
            </li>
          ))}
        </ul>
        <Separator className="my-2" />
        <ul className="grid gap-3"></ul>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-3">
          <div className="font-semibold">
            <Skeleton className="h-6 w-48" />
          </div>
          <address className="grid gap-0.5 not-italic text-muted-foreground">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-48" />
          </address>
        </div>
        <div className="grid auto-rows-max gap-3">
          <div className="font-semibold">
            <Skeleton className="h-6 w-48" />
          </div>
          <div className="text-muted-foreground space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid gap-3">
        <div className="font-semibold">
          <Skeleton className="h-6 w-48" />
        </div>
        <dl className="grid gap-3">
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">
              <Skeleton className="h-4 w-32" />
            </dt>
            <dd>
              <Skeleton className="h-4 w-16" />
            </dd>
          </div>
          <div>
            <dt>
              <Skeleton className="h-4 w-32" />
            </dt>
            <dd>
              <Skeleton className="h-4 w-16 mt-2" />
            </dd>
          </div>
        </dl>
      </div>
      <DialogFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          <Skeleton className="h-4 w-32" />
        </div>
      </DialogFooter>
    </DialogContent>
  );
}
