import { Checkbox } from "@/components/ui/checkbox";
import React, { ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Schema, z } from "zod";
import { useForm } from "react-hook-form";
import { schema } from "./lib";

type ArrayOfEnumsKeys<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T]: T[K] extends z.ZodArray<z.ZodEnum<any>> ? K : never;
}[keyof T];

export const FieldSelector = ({
  form,
  children,
  field,
}: {
  form: ReturnType<typeof useForm<z.infer<typeof schema>>>;
  children?: ReactNode;
  field: ArrayOfEnumsKeys<typeof schema.shape>;
}) => (
  <FormItem>
    <div className="flex flex-row space-x-5">
      {Object.keys(schema.shape[field].element.enum).map((key) => (
        <FormField
          key={key}
          control={form.control}
          name={field}
          render={({ field }) => (
            <div className="flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value?.includes(key as never)}
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
            </div>
          )}
        />
      ))}
    </div>
    <FormDescription>{children}</FormDescription>
    <FormMessage />
  </FormItem>
);
