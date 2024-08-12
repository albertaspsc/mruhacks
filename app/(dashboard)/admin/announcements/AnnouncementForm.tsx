"use client";

import { Input } from "@/components/ui/input";
import { Editor } from "./Editor";
import React from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MethodSelector } from "./methods";
import { handleAnnouncementSubmit } from "./handleSubmit";
import { schema } from "./lib";
import AnnouncementConfirm from "./AnnouncementConfirm";
import { Button } from "@/components/ui/button";
export type AnnouncementSubmission = z.infer<typeof schema>;

export const FormSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <div className="mb-8">
    <p className="text-lg font-bold ">{title}</p>
    {description && (
      <p className="text-md dark:dark:text-gray-500 mb-8">{description}</p>
    )}
    {children}
  </div>
);

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
        <FormSection
          title="Announcement Title"
          description="This will be included in Discord messages, as well as used for email subject lines."
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Announcement Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormSection>
        <FormSection title="Announcement Content" description="">
          <Editor />
        </FormSection>
        <FormSection
          title="Announcement Type"
          description="These methods will be used to notify participants."
        >
          <MethodSelector form={form} />
        </FormSection>
        <AnnouncementConfirm />
      </form>
    </Form>
  );
}
