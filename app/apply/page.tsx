"use client";

import { applicationSchema } from "./schema";

import { ZodNumber, ZodString, z } from "zod";

import ApplyForm from "./ApplyForm";

export default function Register() {
  function onSubmit(values: z.infer<typeof applicationSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return <ApplyForm onSubmit={onSubmit} />;
}
