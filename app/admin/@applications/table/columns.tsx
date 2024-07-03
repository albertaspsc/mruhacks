import { ColumnDef } from "@tanstack/react-table";

type Application = {
  id: string;
  first_name: string;
  last_name: string;
};

export const columns: ColumnDef<Application>[] = [
  { accessorKey: "name", header: "First Name" },
  { accessorKey: "application_status", header: "Status" },
];
