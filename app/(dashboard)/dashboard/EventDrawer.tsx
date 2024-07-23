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

export function EventDrawer({ event }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="my-4">
      <CardContent className="flex flex-row justify-between items-center h h-auto p-4">
        <div>{event.title}</div>
        <div>{event.start}</div>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">View Details</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>{event.title}</DrawerTitle>
              <DrawerDescription>
                <DrawerDescription className="font-semibold text-black">
                  {event.start} - {event.end} - {event.location}
                </DrawerDescription>
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
  );
}

export default EventDrawer;
