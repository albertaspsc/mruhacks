import { CardTitle } from "@/components/ui/card";

export default async function Applications({ children }) {
  return (
    <>
      <CardTitle className="mb-2">Applicants</CardTitle>
      {children}
    </>
  );
}
