import { get } from "@vercel/edge-config";
import { notFound } from "next/navigation";

export default async function Register() {
  const deploy_page: boolean = (await get("allow_apply")) ?? false;

  if (!deploy_page) {
    notFound();
  }

  return (
    <p className="p-20 text-center text-xl font-bold text-primary">
      Vlad!! The form goes here, friend!
    </p>
  );
}
