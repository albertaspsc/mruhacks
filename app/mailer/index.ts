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
  const message = {
    from: "hello@mruhacks.ca",
    to: email,
    subject: "Your MRUHacks 2024 Application",
  };

  const html = (
    await readFile("app/mailer/registration_conf.md.html")
  ).toString();

  const response = await transporter.sendMail({
    from: "MRUHacks Application <hello@mruhacks.ca>",
    to: email,
    subject: "Your MRUHacks 2024 Application",
    text: convert(html),
    html,
  });
  return response;
}
