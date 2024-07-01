import "dotenv/config";
import nodemailer from "nodemailer";
import { readFile } from "fs/promises";
import { parse } from "csv-parse/sync";
import Handlebars from "handlebars";
import { convert } from "html-to-text";
import inquirer from "inquirer";
import papa from "papaparse";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const options: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(options);

const confirmation = Handlebars.compile(readFile("./regConf.hbs").toString());
const prereg = Handlebars.compile(readFile("./preregBlast.hbs").toString());

const normalizeHeader = (header: string) =>
  header.toLowerCase().trim().replace(/\s+/g, "_");

{
  /* const data: [any] = papa.parse((await readFile("./data.csv")).toString(), {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: normalizeHeader,
}).data as [any];
*/
}

export default async function send_confirmation(user: string) {
  try {
    const message = {
      from: "hello@mruhacks.ca",
      to: user,
      subject: "Your MRUHacks 2024 Application",
    };

    const html = confirmation({ ...message });

    const response = await transporter.sendMail({
      from: process.env.FROM_TEXT,
      to: user,
      subject: message.subject,
      text: convert(html),
      html: html,
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    console.log(`Failed to send email to ${JSON.stringify(user)}`);
  }
}

transporter.close();
