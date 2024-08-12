import { z } from "zod";

// Discord does not allow over 2000 chars in webhooks
const MAX_LEN_DISCORD = 2000;
const MAX_TITLE_LEN = 100;
// Add some wiggle room for formatting
const BUFFER = 50;

export const schema = z.object({
  title: z
    .string()
    .min(1, { message: "Announcement Must Have Title" })
    .max(MAX_TITLE_LEN),
  message: z
    .string()
    .min(10)
    .max(MAX_LEN_DISCORD - (MAX_TITLE_LEN + BUFFER), {
      message: "Message Too Long",
    }),
  submission_methods: z.array(
    z.enum(["Discord", "Email", "Discord + @everyone", "Test Announcement"]),
    {
      message: "Distribution Method Required",
    },
  ),
});
