import { createClient } from "@/lib/supabase/server";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Table() {
  const supabase = createClient();

  const { data, error } = await supabase.from("application_status").select("*");

  if (error) console.error(error);

  return (
    <div className="flex-1">
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
}
