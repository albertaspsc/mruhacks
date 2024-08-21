"use client";

import { Input } from "@/components/ui/input";
import { Editor } from "./Editor";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldSelector } from "./methods";
import { handleAnnouncementSubmit } from "./handleSubmit";
import { schema } from "./lib";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
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
  const [sending, setSending] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "Testing Title",
      message: `**A superlong test message.....**

# Heading
> Block

\`\`\`python
code
\`\`\`\`
`,
      submission_methods: ["Email", "Discord"],
      test_options: ["Test Announcement", "Send Locally"],
    },
  });

  function onSubmit(values: AnnouncementSubmission) {
    if (sending) return;
    setSending(true);

    handleAnnouncementSubmit(values).then((response) => {
      toast({
        title: response.ok ? "Posted Announcement" : "Failed With Error",
        description: response.ok ?? response.error,
      });

      if (response.ok) {
        form.reset();
      }

      setSending(false);
    });
  }

  const disableFormClasses = sending ? "pointer-events-none opacity-50" : "";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full ${disableFormClasses}`}
      >
        <FormSection title="Announcement Title">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormDescription>
                  This will be included in Discord messages, as well as used for
                  email subject lines
                </FormDescription>
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
        <FormSection title="Announcement Settings">
          <FormItem>
            <FormLabel>Delivery Methods</FormLabel>
            <FieldSelector form={form} field="submission_methods" />
          </FormItem>
          <FormItem>
            <FormLabel>Testing Option(s)</FormLabel>
            <FieldSelector form={form} field="test_options">
              <>
                <strong>Test Announcement</strong> Controls if this announcement
                will only be sent on private testing channels and or your own
                email(s)
                <br />
                <strong>Send Locally</strong> Will send email over dev email
                server
              </>
            </FieldSelector>
          </FormItem>
        </FormSection>
        <Button role="submit">Send</Button>
      </form>
    </Form>
  );
}
