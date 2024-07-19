import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import _ from "lodash";
import { EXCLUDE_COLS, ValidColumn } from "./lib";
import { PermissionsRow } from "./table_perm_row";
import { createClient } from "@/lib/supabase/server";
import { Card } from "@/components/ui/card";
import { AddRow } from "./add_row";

export default async function Page() {
  const supabase = createClient();

  const { data, error } = await supabase.from("user_permissions").select();

  if (error || !data) {
    console.error(error);
    return (
      <Card className="flex flex-col text-xs w-full items-center justify-center h-full opacity-75">
        Failed To Load Data
        <p className="text-mono">{error?.code}</p>
        <p className="text-mono">{error?.message}</p>
        <p>Please contact us to resolve this issue.</p>
      </Card>
    );
  }

  const headers = (Object.keys(data[0]) as ValidColumn[])
    .filter((name) => !EXCLUDE_COLS.includes(name))
    .map((x) => (
      <TableCell key={x} className="capitalize">
        {_.lowerCase(x)}
      </TableCell>
    ));

  return (
    <div>
      <AddRow />
      <Table>
        <TableHeader>
          <TableRow>{headers}</TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <PermissionsRow row={row} key={row.user_id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
