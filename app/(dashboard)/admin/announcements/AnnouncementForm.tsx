"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Editor } from "./Editor";
import React from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MethodSelector } from "./methods";
import { handleAnnouncementSubmit } from "./handleSubmit";
import { schema } from "./lib";

export type AnnouncementSubmission = z.infer<typeof schema>;

export function AnnouncementForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      message: "",
    },
  });

  const { title, message } = form.watch();

  function onSubmit(values: AnnouncementSubmission) {
    handleAnnouncementSubmit(values).then(() => {
      // TODO : toast, and reload page data
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Subject</FormLabel>
              <FormControl>
                <Input placeholder="Announcement Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Editor />
        <MethodSelector form={form} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
