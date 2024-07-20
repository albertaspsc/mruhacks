"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  subject: z
    .string()
    .min(10, { message: "Subject must be at least 10" })
    .max(160, { message: "Subject must be less than 160" }),
  message: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(300, {
      message: "Bio must not be longer than 30 characters.",
    }),
  discord: z.boolean().default(false).optional(),
  email: z.boolean().default(false).optional(),
});

export function AnnouncementForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-9/12 space-y-6">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Annoucement Title"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="What do you want to tell participants?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-start">
            <FormField
              control={form.control}
              name="discord"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Discord</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Email</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row w-1/3 justify-between">
            <Button
              type="reset"
              className="bg-neutral text-primary font-semibold text-md"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-white font-semibold text-md"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
