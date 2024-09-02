import { z } from "zod";

// Discord does not allow over 2000 chars in webhooks
const MAX_LEN_DISCORD = 2000;
const MAX_TITLE_LEN = 100;
// Add some wiggle room for formatting
const BUFFER = 50;

export const MAX_MESSAGE_LEN = MAX_LEN_DISCORD - (MAX_TITLE_LEN + BUFFER);
export type Schema = z.infer<typeof schema>;

export const schema = z.object({
  title: z
    .string()
    .min(1, { message: "Announcement Must Have Title" })
    .max(MAX_TITLE_LEN),
  message: z.string().min(10).max(MAX_MESSAGE_LEN, {
    message: "Message Too Long",
  }),
  submission_methods: z.array(z.enum(["Discord"]), {
    message: "Distribution Method Required",
  }),
  test_options: z.array(z.enum(["Test Announcement"]), {
    message: "Distribution Method Required",
  }),
});

import crypto from "crypto";

export const unsubscribeURL = ({
  email,
  uuid,
}: {
  email: string;
  uuid: string;
}) => {
  const url = new URL("/emails/unsub", "http://localhost:3000");

  const signature = crypto.createHmac("sha256", process.env.EMAIL_USUB_SECRET!);
  signature.update(email + uuid);

  url.searchParams.set("email", email);
  url.searchParams.set("uuid", uuid);
  url.searchParams.set("sig", signature.digest("base64url"));

  return url.href;
};
