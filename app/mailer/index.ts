import "dotenv/config";
import nodemailer from "nodemailer";
import { readFile } from "fs/promises";
import { parse } from "csv-parse/sync";
import Handlebars from "handlebars";
import { convert } from "html-to-text";
import inquirer from "inquirer";
import papa from "papaparse";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  // secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  pool: false,
  maxConnections: 1,
  rateLimit: 10,
});

const acceptance = Handlebars.compile(
  (await readFile("./acceptance.hbs")).toString(),
);
const rejection = Handlebars.compile(
  (await readFile("./rejection.hbs")).toString(),
);
const global_styles = (await readFile("./styles.css")).toString();
const email_signature = (await readFile("./email_signature.html")).toString();

const normalizeHeader = (header: string) =>
  header.toLowerCase().trim().replace(/\s+/g, "_");

const data: [any] = papa.parse((await readFile("./data.csv")).toString(), {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: normalizeHeader,
}).data as [any];

async function send_all() {
  await Promise.all(
    data.map(async (element: any) => {
      try {
        const all_vars = {
          ...element,
          email_signature,
          global_styles,
          subject:
            element.hired == "Yes"
              ? "Welcome to the MRUHacks Organizing Team!"
              : "MRUHacks Organizing Team",
        };

        const html =
          element.hired == "Yes"
            ? acceptance({
                ...all_vars,
              })
            : rejection({
                ...all_vars,
              });

        const response = await transporter.sendMail({
          from: process.env.FROM_TEXT,
          to: all_vars.email,
          subject: all_vars.subject,
          text: convert(html),
          html: html,
        });
        console.log(response);
        return response;
      } catch (e) {
        console.log(e);
        console.log(`Failed to send email to ${JSON.stringify(element)}`);
      }
    }),
  );
}

if (process.env.SMTP_HOST !== "localhost" || 1) {
  const email_count = data.length;

  const confirm = await inquirer.prompt([
    {
      name: "confirm",
      type: "confirm",
      message: `About to send ${email_count} emails, using '${process.env.SMTP_HOST}'`,
    },
  ]);

  if (confirm.confirm) {
    await send_all();
  }

  transporter.close();
}
