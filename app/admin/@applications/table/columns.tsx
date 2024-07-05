"use client";
import { Button } from "@/components/ui/button";
import { Column, ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { DataTableColumnHeader } from "./column_header";
import { Input } from "@/components/ui/input";

type Application = {
  id: string;
  first_name: string;
  last_name: string;
};

function sortable_column({
  column,
  name,
}: {
  column: Column<Application, unknown>;
  name: string;
}) {
  return (
    <Button
      variant="ghost"
      className="w-full justify-between"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Name
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <>
        <DataTableColumnHeader column={column} title="Email" />
      </>
    ),
  },
  {
    accessorKey: "application_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
];
