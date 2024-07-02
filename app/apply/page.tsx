import { applicationSchema, partialApplicationSchema } from "./schema";
import ApplyForm from "./ApplyForm";
import { createClient } from "@/lib/supabase/server";
import getUserInfo from "@/lib/auth/getUserInfo";
import { z } from "zod";
import { redirect } from "next/navigation";
import { mergeObjects } from "@/lib/utils";
import { get } from "@vercel/edge-config";
import send_confirmation from "../mailer";

async function update_form(
  user: z.infer<typeof applicationSchema>,
): Promise<boolean> {
  "use server";

  const supabase = createClient();
  const userInfo = await getUserInfo();

  let userId = userInfo?.id;

  const { ok, did_insert } = await Promise.all([
    supabase.from("registrations").upsert({ id: userId, ...user }),
    supabase
      .from("users")
      .update({ application_status: "Applied" })
      .eq("user_id", userId),
  ]).then((results) => {
    let ok = true;

    results.map((result) => {
      if (result.error || Math.floor(result.status / 100) != 2) {
        console.error(result);
        ok &&= false;
      }
    });

    return {
      ok,
      did_insert: results?.[0].statusText === "Created" ?? false,
    };
  });

  // Only send a confirmation on the first submission
  if (ok && did_insert && userInfo?.email) {
    const response = await send_confirmation(userInfo?.email);

    if (response.rejected.length !== 0) {
      console.warn(response);
    }

    console.log(response);
  }

  return ok;
}

export default async function Register() {
  const userInfo = await getUserInfo();

  if (!userInfo) {
    return redirect("/");
  }

  const supabase = createClient();
  const { error, data } = await supabase
    .from("registrations")
    .select("*")
    .eq("id", userInfo?.id);

  if (error) console.error(error);

  // Match the first white space separated into capture group one
  // ex.
  // "Jane Jennifer Doe" -> ["Jane", "Jennifer Doe"]
  const regex = /^ *(\S+)( [\s\S]+)?$/;

  const database_info = applicationSchema.safeParse(data?.[0]).data ?? {};
  const meta_data = {
    first_name: regex.exec(userInfo.user_metadata.name)?.[1],
    last_name: regex.exec(userInfo.user_metadata.name)?.[2],
    email: userInfo.user_metadata.email,
  };

  const prefill = partialApplicationSchema.safeParse(
    mergeObjects(database_info, meta_data),
  ).data;

  return <ApplyForm onSubmit={update_form} previousResponses={prefill} />;
}
