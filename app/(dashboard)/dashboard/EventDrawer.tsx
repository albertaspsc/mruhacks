"use client";
import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { type Event } from "@/lib/events/events";
export function EventDrawer(event: Event) {
  const [open, setOpen] = useState(false);

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
  };
  return (
    <Card className="my-4">
      <CardContent className="flex flex-row justify-between items-center h h-auto p-4">
        <div>{event.title}</div>
        <div>{event.startDate.toLocaleDateString("en-us", dateOptions)}</div>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">View Details</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>{event.title}</DrawerTitle>
              <DrawerDescription>
                {event.startDate.toLocaleDateString("en-us", dateOptions)}
              </DrawerDescription>
              <DrawerDescription>
                <DrawerDescription className="flex flex-row justify-between font-semibold text-black">
                  <div>
                    {event.startDate.toLocaleTimeString("en-us", timeOptions)} -{" "}
                    {event.endDate.toLocaleTimeString("en-us", timeOptions)}
                  </div>
                  <div>{event.location}</div>
                </DrawerDescription>
                {event.description}
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <div className="flex flex-col space-y-2">
                  <a href={event.registration} target="_blank">
                    <Button
                      variant="default"
                      className="text-white font-semibold w-full"
                    >
                      Register
                    </Button>
                  </a>
                  <Button variant="outline">Close</Button>
                </div>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardContent>
    </Card>
  );
}

export default EventDrawer;
