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

export function AnnouncementDrawer({ announcement }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="my-4">
      <CardContent className="flex flex-row justify-between items-center h h-auto p-4">
        <div>{announcement.title}</div>
        <div>{announcement.date}</div>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">View Details</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>{announcement.title}</DrawerTitle>
              <DrawerDescription>
                <DrawerDescription className="font-semibold text-black">
                  {announcement.date}
                </DrawerDescription>
                {announcement.description}
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardContent>
    </Card>
  );
}

export default AnnouncementDrawer;
