"use client";

import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableSearchColumns<TData>({
  table,
  exclude = [],
}: { exclude: string[] } & DataTableViewOptionsProps<TData>) {
  const visible_columns = table
    .getAllColumns()
    .filter((col) => col.getIsVisible())
    .filter((col) => col.getCanFilter())
    .filter((col) => exclude.indexOf(col.id) === -1);

  return (
    <div className="flex flex-row">
      {visible_columns.map((col) => (
        <Input
          key={col.id}
          className="capitalize h-8"
          placeholder={"Search by " + col.id.replaceAll(/_/g, " ")}
          onChange={(e) => {
            console.log(e);
            console.log(col);
            col.setFilterValue(e.target.value);
          }}
        />
      ))}
    </div>
  );
}
