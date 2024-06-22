import { get } from "@vercel/edge-config";
import { notFound } from "next/navigation";
import ApplyForm from "./ApplyForm";

export default async function Register() {
  const deploy_page: boolean = (await get("allow_apply")) ?? false;

  if (!deploy_page) {
    notFound();
  }

  return <ApplyForm />;
}
