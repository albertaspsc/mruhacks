"use client";

import { applicationSchema } from "./schema";
import { universities } from "./universities";
import { majors } from "./majors";
import { Check, ChevronsUpDown } from "lucide-react";

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

const dietaryOptions = [
  {
    id: "Halal",
    label: "Halal",
  },
  {
    id: "Kosher",
    label: "Kosher",
  },
  {
    id: "Vegan",
    label: "Vegan",
  },
  {
    id: "Vegetarian",
    label: "Vegetarian",
  },
  {
    id: "Nuts",
    label: "Nuts",
  },
  {
    id: "Fish",
    label: "Fish",
  },
  {
    id: "Wheat",
    label: "Wheat",
  },
  {
    id: "Dairy",
    label: "Dairy",
  },
  {
    id: "Eggs",
    label: "Eggs",
  },
];

type ApplicationField = keyof z.infer<typeof applicationSchema>;

const FormSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <div className="mb-8">
    <p className="text-2xl font-bold text-gray-900">{title}</p>
    {description && <p className="text-lg text-gray-500 mb-8">{description}</p>}
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
}: {
  label: string;
  name: ApplicationField;
  form: UseFormReturn<z.infer<typeof applicationSchema>>;
  description?: string;
  required?: boolean;
  area?: boolean;
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem className="mb-8">
        <FormLabel className="text-xl font-bold text-gray-900">
          {label} {required && <span className="text-red-500">*</span>}
        </FormLabel>
        <FormControl>
          {area ? <Textarea {...field} /> : <Input {...field} />}
        </FormControl>
        <FormDescription className="text-gray-500 text-md">
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
  options: { value: string; label: string }[];
  description?: string;
  required?: boolean;
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem className="mb-8">
        <FormLabel className="text-xl font-bold text-gray-900">
          {label} {required && <span className="text-red-500">*</span>}
        </FormLabel>
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value?.toString()}
        >
          <FormControl className="bg-white">
            <SelectTrigger>
              <SelectValue placeholder={label} />
            </SelectTrigger>
          </FormControl>
          <SelectContent className="bg-white">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
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
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem className="mb-8 min-w-screen-md">
        <FormLabel className="text-xl font-bold text-gray-900">
          {label}
          <span className="text-red-500">*</span>
        </FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant="outline"
                role="combobox"
                className={cn(
                  "min-w-full bg-white justify-between hover:bg-white text-md",
                  !field.value && "text-muted-foreground",
                )}
              >
                {field.value || "Select " + label}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-[--radix-popover-trigger-width] bg-white p-0">
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

const DietaryRestrictions = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof applicationSchema>>;
}) => (
  <FormField
    control={form.control}
    name="dietary"
    render={() => (
      <FormItem className="mb-8">
        <FormLabel className="text-xl font-bold text-gray-900">
          Dietary Restrictions
        </FormLabel>
        {dietaryOptions.map((item) => (
          <FormField
            key={item.id}
            control={form.control}
            name="dietary"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    // @ts-ignore
                    checked={field.value?.includes(item.id)}
                    onCheckedChange={(checked) =>
                      checked
                        ? // @ts-ignore
                          field.onChange([...field.value, item.id])
                        : field.onChange(
                            field.value?.filter((value) => value !== item.id),
                          )
                    }
                  />
                </FormControl>
                <FormLabel className="font-normal text-md">
                  {item.label}
                </FormLabel>
              </FormItem>
            )}
          />
        ))}
        <FormMessage className="text-red-500 text-md" />
      </FormItem>
    )}
  />
);

export default function ApplyForm({
  onSubmit,
}: {
  onSubmit: (values: z.infer<typeof applicationSchema>) => void;
}) {
  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      dietary: [],
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="pt-24 mx-auto px-4 max-w-screen-md"
      >
        {/* <p className="text-2xl font-bold text-gray-900">Personal Information</p>
        <p className="text-lg text-gray-500 mb-8">
          Disclaimer: your answers to these questions do not have any impact on
          your admission.
        </p> */}
        <FormSection
          title="Personal Information"
          description="Disclaimer: your answers to these questions do not have any impact on your admission."
        >
          <TextInput label="First Name" name="firstName" form={form} required />
          <TextInput label="Last Name" name="lastName" form={form} required />
          <TextInput label="Email" name="email" form={form} required />
          <TextInput label="Age" name="age" form={form} required />
          <SelectInput
            label="Gender"
            name="gender"
            form={form}
            options={[
              {
                value: "Male",
                label: "Male",
              },
              {
                value: "Female",
                label: "Female",
              },
              {
                value: "Other",
                label: "Other",
              },
              {
                value: "Prefer not to say",
                label: "Prefer not to say",
              },
            ]}
            required
          />
          <SelectInput
            label="Race"
            name="race"
            form={form}
            options={[
              { value: "Native American", label: "Native American" },
              {
                value: "Asian / Pacific Islander",
                label: "Asian / Pacific Islander",
              },
              {
                value: "Black or African American",
                label: "Black or African American",
              },
              { value: "Hispanic", label: "Hispanic" },
              { value: "White / Caucasian", label: "White / Caucasian" },
              { value: "Multiple / Other", label: "Multiple / Other" },
              { value: "Prefer not to answer", label: "Prefer not to answer" },
            ]}
            required
          />
          <SelectInput
            label="Ethnicity"
            name="ethnicity"
            form={form}
            options={[
              {
                label: "Hispanic or Latino",
                value: "Hispanic or Latino",
              },
              {
                label: "Not Hispanic or Latino",
                value: "Not Hispanic or Latino",
              },
            ]}
            required
          />
          <DietaryRestrictions form={form} />
          <TextInput
            label="Additional Information"
            name="accommodations"
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
            name="studyLevel"
            form={form}
            options={[
              { value: "1st", label: "1st Year" },
              { value: "2nd", label: "2nd Year" },
              { value: "3rd", label: "3rd Year" },
              { value: "4th +", label: "4th Year +" },
              {
                value: "Graduate (<1 year after)",
                label: "Graduate (<1 year after)",
              },
            ]}
            required
          />
          <TextInput
            label="Hackathon Experience"
            name="hackathonExperience"
            form={form}
            description="Please enter the number of hackathons you have attended."
            required
          />
          <SelectInput
            label="Software Experience"
            name="softwareExperience"
            form={form}
            options={[
              { value: "Beginner", label: "Beginner" },
              { value: "Intermediate", label: "Intermediate" },
              { value: "Advanced", label: "Advanced" },
              { value: "Expert", label: "Expert" },
            ]}
            required
          />
          <SelectInput
            label="How did you hear about MRUHacks?"
            name="heardFrom"
            form={form}
            options={[
              { value: "Instagram", label: "Instagram" },
              { value: "LinkedIn", label: "LinkedIn" },
              { value: "Posters", label: "Posters" },
              {
                value: "Student Newsletters",
                label: "Student Newsletters",
              },
              { value: "In my classroom", label: "In my classroom" },
              { value: "Word of mouth", label: "Word of mouth" },
              { value: "Other", label: "Other" },
            ]}
            required
          />
        </FormSection>

        <FormSection
          title="Social Information"
          description="This information is optional and will not affect your application. If you choose to provide it, this information may be shared with our sponsors."
        >
          <TextInput label="GitHub" name="github" form={form} />
          <TextInput label="LinkedIn" name="linkedin" form={form} />
          <TextInput label="Website" name="website" form={form} />
          <SelectInput
            label="Can we share your information with companies?"
            name="companies"
            form={form}
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
          />
        </FormSection>

        <Button
          type="submit"
          className="text-white font-bold float-right mb-12"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
