import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { schema } from "./AnnouncementForm";
import { z } from "zod";
import { useForm } from "react-hook-form";

export const MethodSelector = ({
  form,
}: {
  form: ReturnType<typeof useForm<z.infer<typeof schema>>>;
}) => (
  <FormItem>
    <FormLabel className="text-lg">Methods</FormLabel>
    <div className="flex flex-row space-x-5">
      {Object.keys(schema.shape.submission_methods.element.enum).map((key) => (
        <FormField
          key={key}
          control={form.control}
          name="submission_methods"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value?.includes(
                    key as (typeof field.value)[number],
                  )}
                  onCheckedChange={(checked) =>
                    checked
                      ? field.onChange([...(field.value ?? []), key])
                      : field.onChange(
                          field.value?.filter((value) => value !== key),
                        )
                  }
                />
              </FormControl>
              <FormLabel className="font-normal">{key}</FormLabel>
            </FormItem>
          )}
        />
      ))}
    </div>
    <FormDescription>
      These methods will be used to notify participants
    </FormDescription>
    <FormMessage />
  </FormItem>
);
