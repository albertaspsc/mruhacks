"use server";
import { renderAsync } from "@react-email/components";
import { createClient } from "@/lib/supabase/server";
import nodemailer from "nodemailer";
import { AnnouncementSubmission } from "./AnnouncementForm";
import getUserInfo from "@/lib/auth/getUserInfo";
import { schema, Schema } from "./lib";
import { checkUserPerm } from "@/lib/auth/getPerms";
import { randomUUID } from "crypto";
import _ from "lodash";
import { z } from "zod";

export async function handleAnnouncementSubmit(
  unsafe_values: AnnouncementSubmission,
) {
  const { data: values, success } = validateSubmission(unsafe_values);
  if (!success) return { error: "Bad Request: Did not match schema" };

  const userInfo = await getUserInfo();
  if (!userInfo) return { error: "Bad Request: Failed to get user profile" };

  const supabase = createClient();
  if (!(await checkUserPerm("can_make_announcements")))
    return { error: "Unauthorized Sender" };

  // If it is a test announcements, we add a uuid to ensure that it is not duplicated
  if (values.test_options.includes("Test Announcement")) {
    values.message += "\n\nTest Announcement: " + randomUUID();
  }

  const { error: insertError, id } = await insertAnnouncement(supabase, values);
  if (insertError?.code === "23505")
    return { error: "This Announcement already exists" };
  if (insertError) return { error: insertError.message };

  const results = [];

  if (values.submission_methods.includes("Discord")) {
    results.push(sendDiscordNotification(values));
  }

  if (values.submission_methods.includes("Email")) {
    results.push(sendEmailNotification(values, id));
  }

  await Promise.all(results);

  return { ok: "Announcement submitted successfully" };
}

function validateSubmission(unsafe_values: AnnouncementSubmission) {
  return schema.safeParse(unsafe_values);
}

async function insertAnnouncement(
  supabase: ReturnType<typeof createClient>,
  values: Schema,
) {
  const { error, data } = await supabase
    .from("announcements")
    .insert({ ...values })
    .select();

  if (error) {
    return { error };
  }

  return { id: data[0].id };
}

async function sendDiscordNotification(values: Schema) {
  const supabase = createClient();
  const messageContent = `# ${values.title}\n\n${values.message}\n\n||@everyone||`;

  const { data } = await supabase
    .from("endpoint")
    .select()
    .eq("name", "DISCORD_HOOK")
    .eq("env_kind", values.test_options.length > 0 ? "testing" : "prod")
    .single();

  return await fetch(data?.value!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: messageContent,
      username: "AnnouncementBot",
    }),
  });
}

async function sendEmailNotification(values: Schema, id: string) {
  "use server";
  const supabase = createClient();
  const transporter = createEmailTransporter(values.test_options);

  const isTestAnnoucment = values.test_options.includes("Test Announcement");
  const { data: fetchedEmails } = await supabase
    .from("subscribed_emails")
    .select("email");

  // Filter for defined values, we need this purely cause the type is not
  // infred using the .map().filter() chain
  function defined<T>(x: T | null | undefined): x is T {
    return !!x;
  }

  // If this is test Announcement we only send this to the user themselves
  const emails =
    (isTestAnnoucment
      ? [(await getUserInfo())?.email]
      : fetchedEmails?.map((x) => x.email)
    )?.filter(defined) ?? [];

  for (const email of emails) {
    (await transporter)
      .sendMail({
        from: "MRUHacks <hello@mruhacks.ca>",
        to: email,
        subject: values.title,
        text: values.message,
        html: await renderAsync(
          NotificationTemplate({
            markdown: values.message,
            send_to: email,
            message_id: id,
          }),
        ),
      })
      .then((x) => console.log(x));
  }
}

async function createEmailTransporter(options: Schema["test_options"]) {
  const smtp_config = z.object({
    SMTP_HOST: z.string(),
    SMTP_PORT: z.coerce.number(),
    SMTP_USER: z.string(),
    SMTP_PASSWORD: z.string(),
  });

  const supabase = createClient();
  const env_kind = options.includes("Send Locally")
    ? "dev"
    : options.includes("Test Announcement")
      ? "testing"
      : "prod";

  const { data: pairs } = await supabase
    .from("endpoint")
    .select("name,value")
    .eq("env_kind", env_kind)
    .like("name", "SMTP_%");

  const { data: config } = smtp_config.safeParse(
    pairs?.reduce((acc, item) => {
      // @ts-ignore
      acc[item.name] = item.value;
      return acc;
    }, {}),
  );

  if (!config) {
    throw new Error("Failed to get smtp config");
  }

  return nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: false,
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASSWORD,
    },
  });
}

import { Email as NotificationTemplate } from "./email_template";
