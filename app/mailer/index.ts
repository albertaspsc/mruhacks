import nodemailer from "nodemailer";
import { readFile } from "fs/promises";
import { convert } from "html-to-text";
import SMTPTransport from "nodemailer/lib/smtp-transport";

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

export default async function send_confirmation(email: string) {
  const html = `
<p id="hey-hacker">Hey hacker,</p>
<p>
  Thank you for applying to MRUHacks 2024! We’re so excited to have received
  your application and can’t wait to see what you’ll create at our event.
</p>
<p>
  In the meantime, be sure to join our
  <a href="https://discord.com/invite/tRtW5phPQv">Discord</a> to chat with other
  hackers, and check out our
  <a
    href="https://mruhacks.notion.site/Hackerpack-426b5b28cc0a4b069deb0f64f26af37a"
    >Hackerpack</a
  >
  for any and all event information.
</p>
<p>
  If you have any questions or concerns, feel free to reach out to us at
  <a href="mailto:hello@mruhacks.ca">hello@mruhacks.ca</a>.
</p>
<p>Best, The MRUHacks Team</p>
<hr />
<p>MRUHacks 2024, October 5th - 6th</p>
<p><a href="https://mruhacks.ca">mruhacks.ca</a></p>
  `;

  const response = await transporter.sendMail({
    from: "MRUHacks Application <hello@mruhacks.ca>",
    to: email,
    subject: "Your MRUHacks 2024 Application",
    text: convert(html),
    html,
  });
  return response;
}
