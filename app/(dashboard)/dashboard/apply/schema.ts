import { IsObject } from "@/lib/utils";
import { assert } from "console";
import { record, z } from "zod";

// This is ugly, but zod requires this type
export type MinLengthArray = [string, ...string[]];

export const options = {
  race: [
    "Native American",
    "Asian / Pacific Islander",
    "Black or African American",
    "Hispanic",
    "White / Caucasian",
    "Multiple / Other",
    "Prefer not to answer",
  ] as MinLengthArray,

  dietary: [
    "Halal",
    "Kosher",
    "Vegan",
    "Vegetarian",
    "Nuts",
    "Fish",
    "Wheat",
    "Dairy",
    "Eggs",
  ] as MinLengthArray,

  gender: ["Female", "Male", "Other", "Prefer not to say"] as MinLengthArray,

  year: [
    "1st",
    "2nd",
    "3rd",
    "4th +",
    "Graduate (<1 year after)",
  ] as MinLengthArray,

  experience_level: [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
  ] as MinLengthArray,

  hear_about: [
    "Instagram",
    "LinkedIn",
    "Posters",
    "Student Newsletters",
    "In my classroom",
    "Word of mouth",
    "Other",
  ] as MinLengthArray,

  ethnicity: ["Hispanic or Latino", "Not Hispanic or Latino"] as MinLengthArray,
};

const formSchema = z.object({
  first_name: z.string().min(1, { message: "Required Field" }),
  last_name: z.string().min(1, { message: "Required Field" }),
  email: z.string().email(),
  age: z.coerce
    .number({ message: "Invalid Age" })
    .pipe(z.number().gte(18, { message: "Must be 18 or older" })),
  gender: z.enum(options.gender),
  race: z.enum(options.race),
  ethnicity: z.enum(options.ethnicity),
  dietary: z.array(z.enum(options.dietary)).optional(),
  additional: z.string().optional(),
  university: z.string(),
  major: z.string(),
  year: z.enum(options.year),
  hackathons: z.coerce
    .number({ message: "That's not a number!" })
    .pipe(
      z.number().gte(0, { message: "How can you attend negative events???" }),
    ),
  software_exp: z.enum(options.experience_level),
  hearAbout: z.enum(options.hear_about),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  personalSite: z.string().optional(),
  sponsorConsent: z.enum(["Yes", "No"]),
});

export const partialApplicationSchema = formSchema.partial();

export type Application = typeof formSchema._output;

export const applicationSchema = z.preprocess(
  // Cast all nullish types to `undefined`
  (x) => {
    if (!IsObject(x)) return x;
    return Object.keys(x).reduce((acc: Record<string, unknown>, key) => {
      acc[key] = x[key] ?? undefined;
      return acc;
    }, {});
  },
  formSchema,
);
