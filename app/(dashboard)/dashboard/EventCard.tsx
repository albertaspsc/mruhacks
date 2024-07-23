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
                <DialogClose>
                  <Button variant="outline">Close</Button>
                </DialogClose>
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
