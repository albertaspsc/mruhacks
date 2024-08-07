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
import { createClient } from "@/lib/supabase/client";

export const schema = z.object({
  title: z.string().min(1, { message: "Announcement Must Have Title" }),
  message: z.string().min(10),
  submission_methods: z.array(z.enum(["Discord", "Email"]), {
    message: "Distribution Method Required",
  }),
});

export function AnnouncementForm() {
  const client = createClient();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    client
      .from("announcements")
      .insert({
        ...values,
      })
      .then((res) => {
        console.log(res);
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
