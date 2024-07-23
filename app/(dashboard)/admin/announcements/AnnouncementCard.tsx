"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { DialogClose } from "@radix-ui/react-dialog";
export function AnnouncementCard({ announcement }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card className="my-4">
      <CardContent className="flex flex-row justify-between items-center h h-auto p-4">
        <div>{announcement.title}</div>
        <div>{announcement.date}</div>
        <Dialog open={open} key={announcement.id} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">View Details</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[424px]">
            <DialogHeader>
              <DialogTitle>{announcement.title}</DialogTitle>
              <DialogDescription className="font-semibold text-black">
                {announcement.date}
              </DialogDescription>
              <DialogDescription>{announcement.description}</DialogDescription>
              <DialogClose>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
