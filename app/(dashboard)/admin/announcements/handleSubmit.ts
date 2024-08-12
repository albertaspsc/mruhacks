"use server";

import { createClient } from "@/lib/supabase/server";
import nodemailer from "nodemailer";
import { convert } from "html-to-text";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { AnnouncementSubmission } from "./AnnouncementForm";
import AnnouncementConfirm from "./AnnouncementConfirm";
import getUserInfo from "@/lib/auth/getUserInfo";
import { schema } from "./lib";

export async function handleAnnouncementSubmit(
  unsafe_values: AnnouncementSubmission,
) {
  const { data: values, success } = schema.safeParse(unsafe_values);
  if (!success) return new Response("Bad Request", { status: 400 });

  const userInfo = await getUserInfo();
  const supabase = createClient();

  if (!userInfo)
    return new Response("Bad Request: Failed to get user profile", {
      status: 400,
    });

  const { data, error } = await supabase
    .from("permissions")
    .select("can_make_announcements")
    .eq("user_id", userInfo?.id)
    .maybeSingle();

  if (error) console.error(error);
  if (!data?.can_make_announcements) {
    return new Response("Unauthorized Sender", {
      status: 403,
    });
  }

  if (values.submission_methods.includes("Email")) {
    const { count, error } = await supabase
      .from("users")
      .select("*", { count: "exact", head: true })
      .eq("testing_account", "false");

    console.log(count);
  }

  if (values.submission_methods.includes("Discord")) {
    let messageContent = "# " + values.title + "\n\n" + values.message;
    await fetch(process.env.DISCORD_HOOK!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: messageContent,
        username: "AnnouncementBot",
      }),
    });
  }

  if (values.submission_methods.includes("Discord + @everyone")) {
    let messageContent =
      "# " + values.title + "\n\n" + values.message + "\n\n" + "||@everyone||";
    await fetch(process.env.DISCORD_HOOK!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: messageContent,
        username: "AnnouncementBot",
      }),
    });
  }

  {
    /*  const response = await supabase.from("announcements").insert({
    subject: values.title,
      message: values.message,
        email: false,
  });  */
  }

  {
    /* if (response.error) console.error(response.error);
  } */
  }

  const options: SMTPTransport.Options = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(options);

  {
    /*  export default async function send_announcement(email: string) {
    const response = await transporter.sendMail({
      from: "MRUHacks Application <hello@mruhacks.ca>",
      to: email,
      subject,
      text: convert(html),
      html,
    });
    return response;
  } */
  }
}
