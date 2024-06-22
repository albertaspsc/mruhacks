"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  age: z.coerce.number().int().min(18),
  gender: z.enum([
    "Male",
    "Female",
    "Non-binary",
    "Other",
    "Prefer not to say",
  ]),
  race: z.enum([
    "Native American",
    "Asian / Pacific Islander",
    "Black / African American",
    "Hispanic",
    "White / Caucasian",
    "Multiple / Other",
    "Prefer not to say",
  ]),
  ethnicity: z.enum(["Hispanic or Latino", "Not Hispanic or Latino"]),
  dietary: z.array(z.string()),
  additional: z.string().optional(),
});

export default function ApplyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      dietary: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="pt-24 mx-auto px-4 max-w-screen-md"
      >
        <p className="text-2xl font-bold text-gray-900">Personal Information</p>
        <p className="text-lg text-gray-500 mb-8">
          Disclaimer: your answers to these questions do not have any impact on
          your admission.
        </p>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel className="text-xl font-bold text-gray-900">
                First Name
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-md" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel className="text-xl font-bold text-gray-900">
                Last Name
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-md" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel className="text-xl font-bold text-gray-900">
                Email
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-md" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel className="text-xl font-bold text-gray-900">
                Age
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-md" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel className="text-xl font-bold text-gray-900">
                Gender
                <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="bg-white">
                  <SelectTrigger>
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Non-binary">Non-binary</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                  <SelectItem value="Prefer not to say">
                    Prefer not to say
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-md" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="race"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel className="text-xl font-bold text-gray-900">
                Race
                <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="bg-white">
                  <SelectTrigger>
                    <SelectValue placeholder="Race" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Native American">
                    Native American
                  </SelectItem>
                  <SelectItem value="Asian / Pacific Islander">
                    Asian / Pacific Islander
                  </SelectItem>
                  <SelectItem value="Black / African American">
                    Black / African American
                  </SelectItem>
                  <SelectItem value="Hispanic">Hispanic</SelectItem>
                  <SelectItem value="White / Caucasian">
                    White / Caucasian
                  </SelectItem>
                  <SelectItem value="Multiple / Other">
                    Multiple / Other
                  </SelectItem>
                  <SelectItem value="Prefer not to say">
                    Prefer not to say
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-md" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ethnicity"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel className="text-xl font-bold text-gray-900">
                Ethnicity
                <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="bg-white">
                  <SelectTrigger>
                    <SelectValue placeholder="Ethnicity" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Hispanic or Latino">
                    Hispanic or Latino
                  </SelectItem>
                  <SelectItem value="Not Hispanic or Latino">
                    Not Hispanic or Latino
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-md" />
            </FormItem>
          )}
        />

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
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}

              <FormMessage className="text-red-500 text-md" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="additional"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel className="text-xl font-bold text-gray-900">
                Additional Information
              </FormLabel>
              <FormDescription className="text-gray-500 text-md">
                Is there anything we can do to better accommodate you?
              </FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-md" />
            </FormItem>
          )}
        />

        <p className="text-2xl font-bold text-gray-900">
          Education Information
        </p>

        <Button type="submit" className="text-white font-bold float-right">
          Submit
        </Button>
      </form>
    </Form>
  );
}
