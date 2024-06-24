import { applicationSchema } from "./schema";
import ApplyForm from "./ApplyForm";
import { createClient } from "@/lib/supabase/server";
import getUserInfo from "@/lib/auth/getUserInfo";
import { z } from "zod";

export default function Register() {
  async function onSubmit(values: z.infer<typeof applicationSchema>) {
    "use server";
    const supabase = createClient();

    let userInfo = await getUserInfo();

    if (!userInfo) {
      return;
    }

    let userId = userInfo.id;
    const user = values;

    const { error } = await supabase.from("registrations").upsert({
      id: userId,
      ...user,
    });

    if (error) {
      console.error(error);
    }
  }

  return <ApplyForm onSubmit={onSubmit} />;
}
