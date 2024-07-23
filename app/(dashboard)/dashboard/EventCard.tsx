"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { events } from "@/events/events";

export function EventDetails({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}

export function EventCards() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return events.map((event) => (
      <Card key={event.id} className="my-4">
        <CardContent className="flex flex-row justify-between items-center h h-auto p-4">
          <div>{event.title}</div>
          <div>{event.start}</div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">View Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[424px]">
              <DialogHeader>
                <DialogTitle>{event.title}</DialogTitle>
                <DialogDescription className="font-semibold text-black">
                  {event.start} - {event.end} - {event.location}
                </DialogDescription>
                <DialogDescription>{event.description}</DialogDescription>
                <div className="flex flex-row justify-end space-x-4">
                  <Button variant="outline">Close</Button>
                  <Button
                    variant="default"
                    className="text-white font-semibold"
                  >
                    Register
                  </Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    ));
  }

  return events.map((event) => (
    <Card key={event.id} className="my-4">
      <CardContent className="flex flex-row justify-between items-center h h-auto p-4">
        <div>{event.title}</div>
        <div>{event.id}</div>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">View Details</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>{event.title}</DrawerTitle>
              <DrawerDescription>
                <DialogDescription className="font-semibold text-black">
                  {event.start} - {event.end} - {event.location}
                </DialogDescription>
                {event.description}
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="default"
                    className="text-white font-semibold"
                  >
                    Register
                  </Button>
                  <Button variant="outline">Close</Button>
                </div>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardContent>
    </Card>
  ));
}
