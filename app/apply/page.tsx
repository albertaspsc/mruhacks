"use client";

import { applicationSchema } from "./schema";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { memo } from "react";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";
import { useMemo } from "react";

const camelToSentence = (str) => {
  if (!str) {
    return;
  }
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

export default function ApplicationForm() {
  const RenderField = memo(({ field, form }) => {
    const fieldType = field._def.typeName;

    switch (fieldType) {
      case "ZodString":
        return (
          <FormControl>
            <Input placeholder={camelToSentence(field.name)} {...form} />
          </FormControl>
        );
      case "ZodNumber":
        return (
          <FormControl>
            <Input
              type="number"
              placeholder={camelToSentence(field.name)}
              {...form}
            />
          </FormControl>
        );
      case "ZodEnum":
        const Options = memo(() => {
          return (
            <SelectContent>
              {field._def.values.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          );
        });

        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <Options />
          </Select>
        );
      case "ZodArray":
        return (
          <FormControl>
            <Checkbox {...form}>
              {field._def.type._def.values.map((option) => (
                <label key={option}>
                  <input type="checkbox" value={option} />
                  {option}
                </label>
              ))}
            </Checkbox>
          </FormControl>
        );
      default:
        return <Input placeholder={camelToSentence(field.name)} {...form} />;
    }
  });

  const form = useForm({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const memoizedFields = useMemo(() => {
    return Object.keys(applicationSchema.shape).map((key) => (
      <FormField
        key={key}
        control={form.control}
        name={key}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{camelToSentence(field.name)}</FormLabel>
            <RenderField field={applicationSchema.shape[key]} form={field} />
            <FormMessage />
          </FormItem>
        )}
      />
    ));
  }, [applicationSchema.shape, form.control]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {memoizedFields}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

ApplicationForm.displayName = "foo";
