"use client";

import { applicationSchema } from "./schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodNumber, ZodString, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SelectContent } from "@radix-ui/react-select";

function camelToSentence(str: string) {
  if (!str) {
    return;
  }
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert a space before each uppercase letter
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Handle cases with consecutive uppercase letters
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter
}

const renderField = (field, form) => {
  const fieldType = field._def.typeName;

  switch (fieldType) {
    case "ZodString":
      return <Input placeholder={camelToSentence(field.name)} {...form} />;
    case "ZodNumber":
      return (
        <Input
          type="number"
          placeholder={camelToSentence(field.name)}
          {...form}
        />
      );
    case "ZodEnum":
      return (
        <Select {...form}>
          <SelectTrigger> </SelectTrigger>
          <SelectContent>
            {field._def.values.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    case "ZodArray":
      return (
        <Checkbox {...form}>
          {field._def.type._def.values.map((option) => (
            <label key={option}>
              <input type="checkbox" value={option} />
              {option}
            </label>
          ))}
        </Checkbox>
      );
    default:
      return <Input placeholder={camelToSentence(field.name)} {...form} />;
  }
};

export default function Register() {
  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
  });

  function onSubmit(values: z.infer<typeof applicationSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {Object.keys(applicationSchema.shape).map((key) => (
          <FormField
            key={key}
            control={form.control}
            name={key}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{camelToSentence(field.name)}</FormLabel>
                <FormControl>
                  {renderField(applicationSchema.shape[key], field)}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
