import { createClient } from "@/lib/supabase/server";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { DataTableViewOptions } from "./column_toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Table() {
  const supabase = createClient();

  const { data, error } = await supabase.from("application_status").select("*");

  return (
    <div className="container mx-auto py-10">
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Applicants</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data ?? []} />
        </CardContent>
      </Card>
    </div>
  );
}
