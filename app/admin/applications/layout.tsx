import { CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

export default async function Applications({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <CardTitle className="mb-2">Applicants</CardTitle>
      {children}
    </>
  );
}
