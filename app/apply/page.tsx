import { applicationSchema } from "./schema";

import { z } from "zod";

import ApplyForm from "./ApplyForm";

export default function Register() {
  async function onSubmit(values: z.infer<typeof applicationSchema>) {
    "use server";
    console.log(values);
  }

  return <ApplyForm onSubmit={onSubmit} />;
}
