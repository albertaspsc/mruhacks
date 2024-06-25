import { applicationSchema } from "./schema";
import ApplyForm from "./ApplyForm";
import { createClient } from "@/lib/supabase/server";
import getUserInfo from "@/lib/auth/getUserInfo";
import { z } from "zod";
import { redirect } from "next/navigation";

export default async function Register() {
  const userInfo = await getUserInfo();

  if (!userInfo) {
    return redirect("/");
  }

  async function onSubmit(values: z.infer<typeof applicationSchema>) {
    "use server";
    const supabase = createClient();

    let userId = userInfo?.id;
    const user = values;

    const { error } = await supabase.from("registrations").upsert({
      id: userId,
      ...user,
    });

    if (error) {
      console.error(error);
    }

    const { data, error: userError } = await supabase
      .from("users")
      .update({ application_status: "Applied" })
      .eq("user_id", userId);

    const { data: data2, error: userError2 } = await supabase
      .from("users")
      .select("application_status")
      .eq("user_id", userId);

    console.log(data2);

    if (userError) {
      console.error(userError);
    }
  }

  async function getUserApplicationResponses() {
    const supabase = createClient();
    const userInfo = await getUserInfo();
    const userApplicationResponses = await supabase
      .from("registrations")
      .select("*")
      .eq("id", userInfo?.id);

    if (userApplicationResponses.error) {
      console.error(userApplicationResponses.error);
      return null;
    }

    return userApplicationResponses;
  }

  const userResponses = await getUserApplicationResponses();

  return (
    <ApplyForm
      onSubmit={onSubmit}
      // @ts-ignore
      previousResponses={
        userResponses as unknown as z.infer<typeof applicationSchema>
      }
    />
  );
}
