"use client";

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
import { Button } from "@/components/ui/button";

const AnnouncementDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Submit</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Announcement Confirmation</DrawerTitle>
          <DrawerDescription>
            <DrawerDescription className="font-semibold text-black">
              Announcement Title Submission Method
            </DrawerDescription>
            You are about to send an announcement to ____ people. Are you sure
            you want to send?
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose>
            <div className="flex flex-col space-y-2">
              <Button type="submit" className="text-white font-semibold">
                Yes
              </Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AnnouncementDrawer;
