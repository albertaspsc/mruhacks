import { z } from "zod";
import { universities } from "./universities";
import { majors } from "./majors";

export const applicationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  age: z.coerce.number().gte(18, "Must be 18 or older"),
  gender: z.enum(["Female", "Male", "Other", "Prefer not to say"]),
  race: z.enum([
    "Native American",
    "Asian/Pacific Islander",
    "Black or African American",
    "Hispanic",
    "White/Caucasian",
    "Multiple/Other",
    "Prefer not to answer",
  ]),
  ethnicity: z.enum(["Hispanic or Latino", "Not Hispanic or Latino"]),
  dietary: z
    .array(
      z.enum([
        "Halal",
        "Kosher",
        "Vegan",
        "Vegetarian",
        "Nuts",
        "Fish",
        "Wheat",
        "Dairy",
        "Eggs",
      ]),
    )
    .optional(),
  accommodations: z.string().optional(),
  university: z.enum(universities),
  major: z.enum(majors),
  studyLevel: z.enum([
    "1st",
    "2nd",
    "3rd",
    "4th +",
    "Graduate (<1 year after)",
  ]),
  hackathonExperience: z.union([
    z.literal("").transform(() => undefined),
    z.coerce.number().min(0),
  ]),
  softwareExperience: z.enum([
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
  ]),
  heardFrom: z.enum([
    "Instagram",
    "LinkedIn",
    "Posters",
    "Student Newsletters",
    "In my classroom",
    "Word of mouth",
    "Other",
  ]),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  website: z.string().optional(),
  companies: z.array(z.enum(["Yes", "No"])).optional(),
});
