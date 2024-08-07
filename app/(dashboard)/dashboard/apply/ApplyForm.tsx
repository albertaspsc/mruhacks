"use client";

import { useRouter } from "next/navigation";
import { applicationSchema, options, partialApplicationSchema } from "./schema";
import { universities } from "./universities";
import { majors } from "./majors";
import { Check, ChevronsUpDown, LucideLoader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

type ApplicationField = keyof z.infer<typeof applicationSchema>;

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
    <p className="text-2xl font-bold ">{title}</p>
    {description && (
      <p className="text-lg dark:dark:text-gray-500 mb-8">{description}</p>
    )}
    {children}
  </div>
);

const TextInput = ({
  label,
  name,
  form,
  description,
  required = false,
  area = false,
  number = false,
}: {
  label: string;
  name: ApplicationField;
  form: UseFormReturn<z.infer<typeof applicationSchema>>;
  description?: string;
  required?: boolean;
  area?: boolean;
  number?: boolean;
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem className="mb-8">
        <FormLabel className="text-xl font-bold ">
          {label} {required && <span className="text-red-500">*</span>}
        </FormLabel>
        <FormControl>
          {area ? (
            <Textarea
              {...field}
              placeholder={label}
              className=""
              // required={required}
            />
          ) : number ? (
            <Input {...field} type="number" placeholder={label} className="" />
          ) : (
            <Input {...field} placeholder={label} className="" />
          )}
        </FormControl>
        <FormDescription className="dark:text-gray-500 text-md">
          {description}
        </FormDescription>
        <FormMessage className="text-red-500 text-md" />
      </FormItem>
    )}
  />
);

const SelectInput = ({
  label,
  name,
  form,
  options,
  description,
  required = false,
}: {
  label: string;
  name: ApplicationField;
  form: UseFormReturn<z.infer<typeof applicationSchema>>;
  options: (string | { label: string; value: string })[];
  description?: string;
  required?: boolean;
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem className="mb-8 relative">
        <FormLabel className="text-xl font-bold ">
          {label} {required && <span className="text-red-500">*</span>}
        </FormLabel>
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value?.toString()}
        >
          <FormControl className="">
            <SelectTrigger>
              <SelectValue placeholder={label} />
            </SelectTrigger>
          </FormControl>
          <SelectContent className="">
            {options
              // Normalize to the label-value pair
              .map((t) => (typeof t === "string" ? { label: t, value: t } : t))
              .map((option, key) => {
                return (
                  <SelectItem key={key} value={option.value}>
                    {option.label}
                  </SelectItem>
                );
              })}
          </SelectContent>
        </Select>
        <FormMessage className="text-red-500 text-md" />
      </FormItem>
    )}
  />
);

const ComboBoxInput = ({
  label,
  name,
  form,
  options,
  description,
  required = false,
}: {
  label: string;
  name: ApplicationField;
  form: UseFormReturn<z.infer<typeof applicationSchema>>;
  options: string[];
  description?: string;
  required?: boolean;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-8 min-w-screen-md">
          <FormLabel className="text-xl font-bold ">
            {label}
            <span className="text-red-500">*</span>
          </FormLabel>
          <Popover modal={false}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "min-w-full  justify-between hover: text-md",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value || "Select " + label}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width]  p-0">
              <Command>
                <CommandInput placeholder="Search majors..." />
                <CommandEmpty>No major found.</CommandEmpty>
                <CommandGroup className=" max-h-[400px] overflow-auto">
                  {options.map((option) => (
                    <CommandItem
                      value={option}
                      key={option}
                      onSelect={() => {
                        form.setValue(name, option);
                        field.onChange(option);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          option === field.value ? "opacity-100" : "opacity-0",
                        )}
                      />
                      {option}
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandList />
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage className="text-red-500 text-md" />
        </FormItem>
      )}
    />
  );
};

const DietaryRestrictions = ({
  form,
  disabled,
}: {
  form: UseFormReturn<z.infer<typeof applicationSchema>>;
  disabled: boolean;
}) => {
  return (
    <FormField
      control={form.control}
      name="dietary"
      render={() => (
        <FormItem className="mb-8">
          <FormLabel className="text-xl font-bold ">
            Dietary Restrictions
          </FormLabel>
          {options.dietary.map((item, id) => (
            <FormField
              key={id}
              control={form.control}
              name="dietary"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 overflow-hidden relative">
                  <FormControl>
                    <Checkbox
                      disabled={disabled}
                      checked={field.value?.includes(
                        item as (typeof field.value)[number],
                      )}
                      onCheckedChange={(checked) =>
                        checked
                          ? field.onChange([...(field.value ?? []), item])
                          : field.onChange(
                              field.value?.filter((value) => value !== item),
                            )
                      }
                    />
                  </FormControl>
                  <FormLabel className="font-normal text-md">{item}</FormLabel>
                </FormItem>
              )}
            />
          ))}
          <FormMessage className="text-red-500 text-md" />
        </FormItem>
      )}
    />
  );
};

export default function ApplyForm({
  onSubmit: server_submit_handler,
  previousResponses,
}: {
  onSubmit: (values: z.infer<typeof applicationSchema>) => Promise<boolean>;
  previousResponses?: z.infer<typeof partialApplicationSchema>;
}) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  let defaultValues = previousResponses ?? {};

  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof applicationSchema>) {
    setLoading(true);
    const success = await server_submit_handler(values);

    toast(
      success
        ? {
            title: "Application submitted!",
            description: "Your application has been submitted.",
          }
        : {
            title: "Something went wrong...",
            description:
              "Please try submitting again, if the issue persists contact the MRUHacks Team",
          },
    );

    if (success) {
      router.push("/dashboard");
    } else {
      setLoading(false);
    }
  }

  const loading_disable = loading
    ? `
        [&_button]:pointer-events-none [&_button]:opacity-50
        [&_input]:pointer-events-none [&_input]:opacity-50
        [&_textarea]:pointer-events-none [&_textarea]:opacity-50
       `
    : "";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`block p-4 bg-background border rounded-md ${loading_disable}`}
      >
        <FormSection
          title="Personal Information"
          description="Disclaimer: your answers to these questions do not have any impact on your admission."
        >
          <TextInput
            label="First Name"
            name="first_name"
            form={form}
            required
          />
          <TextInput label="Last Name" name="last_name" form={form} required />
          <TextInput label="Email" name="email" form={form} required />
          <TextInput label="Age" name="age" form={form} number required />
          <SelectInput
            label="Gender"
            name="gender"
            form={form}
            options={options.gender}
            required
          />
          <DietaryRestrictions form={form} disabled={loading} />
          <TextInput
            label="Additional Information"
            name="additional"
            form={form}
            description="Is there anything we can do to better accommodate you?"
            area
          />
        </FormSection>
        <FormSection
          title="Education Information"
          description="All universities and majors are able to participate in MRUHacks 2024."
        >
          <ComboBoxInput
            label="University"
            name="university"
            form={form}
            options={universities}
            required
          />
          <ComboBoxInput
            label="Major"
            name="major"
            form={form}
            options={majors}
            required
          />
          <SelectInput
            label="Study Level"
            name="year"
            form={form}
            options={options.year}
            required
          />
          <TextInput
            label="How many hackathons have you attended?"
            name="hackathons"
            form={form}
            number
            required
          />
          <SelectInput
            label="How would you rate your experience in software development."
            name="software_exp"
            form={form}
            options={options.experience_level}
            required
          />
          <SelectInput
            label="How did you hear about MRUHacks?"
            name="hearAbout"
            form={form}
            options={options.hear_about}
            required
          />
        </FormSection>

        <FormSection
          title="Social Information"
          description="This information is optional and will not affect your application. If you choose to provide it, this information may be shared with our sponsors."
        >
          <TextInput label="GitHub" name="github" form={form} />
          <TextInput label="LinkedIn" name="linkedin" form={form} />
          <TextInput label="Website" name="personalSite" form={form} />
          <SelectInput
            label="Can we share your information with companies?"
            name="sponsorConsent"
            form={form}
            options={["Yes", "No"]}
          />
        </FormSection>

        {loading ? (
          <Button
            role="submit"
            type="submit"
            className="text-white font-bold float-right mb-12 opacity-100"
            disabled
          >
            <LucideLoader2 className="animate-spin mr-2 opacity-100" />
            Submit Application
          </Button>
        ) : (
          <Button
            role="submit"
            type="submit"
            className="text-white font-bold float-right"
          >
            Submit Application
          </Button>
        )}
      </form>
    </Form>
  );
}
