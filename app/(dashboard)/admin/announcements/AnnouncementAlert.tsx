"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const AnnouncementAlert = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Submit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[424px]">
        <DialogHeader>
          <DialogTitle>Announcement Confirmation</DialogTitle>
          <DialogDescription className="font-semibold text-black">
            Announcement Title Submission Method
          </DialogDescription>
          <DialogDescription>
            You are about to send an announcement to ____ people. Are you sure
            you want to send?
          </DialogDescription>
          <div className="flex flex-row justify-end space-x-4">
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="text-white font-semibold">
              Yes
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementAlert;
