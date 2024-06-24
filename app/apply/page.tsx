import { applicationSchema } from "./schema";

import { z } from "zod";

import ApplyForm from "./ApplyForm";

import getUserInfo from "@/lib/auth/getUserInfo";

import { createClient } from "@/lib/supabase/server";

export default function Register() {
  async function onSubmit(values: z.infer<typeof applicationSchema>) {
    "use server";
    const supabase = createClient();

    let userInfo = await getUserInfo();

    if (!userInfo) {
      return;
    }

    let userId = userInfo.id;
    console.log(userId);
    const user = values;
    const { data, error } = await supabase.from("registrations").upsert({
      id: userId,
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      age: user.age,
      gender: user.gender,
      race: user.race,
      dietary: user.dietary,
      additional: user.accommodations,
      university: user.university,
      major: user.major,
      year: user.studyLevel,
      hackathons: user.hackathonExperience,
      software_exp: user.softwareExperience,
      hearAbout: user.heardFrom,
      github: user.github,
      linkedin: user.linkedin,
      personalSite: user.website,
      sponsorConsent: user.companies,
    });
  }

  return <ApplyForm onSubmit={onSubmit} />;
}
