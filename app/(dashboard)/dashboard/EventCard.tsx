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

export function EventCard({ event }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card className="my-4">
      <CardContent className="flex flex-row justify-between items-center h h-auto p-4">
        <div>{event.title}</div>
        <div>{event.start}</div>
        <Dialog open={open} key={event.id} onOpenChange={setOpen}>
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
                <Button variant="default" className="text-white font-semibold">
                  Register
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
