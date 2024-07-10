"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./sortable_header";
import { Badge } from "@/components/ui/badge";
import { Filter, ListFilter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/client";
import getUserInfo from "@/lib/auth/getUserInfo";

type Application = {
  id: string;
  first_name: string;
  last_name: string;
};

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "application_status",
    header: ({ column }) => {
      const keys = Array.from(column.getFacetedUniqueValues().keys());
      const current_filter = column.getFilterValue();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <ListFilter className="h-3 pr-2" />
              Application Status
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[150px] bg-white">
            <DropdownMenuLabel>Select Filter</DropdownMenuLabel>
            {keys.map((key, index) => (
              <DropdownMenuCheckboxItem
                key={index}
                checked={current_filter === key}
                onCheckedChange={() => column.setFilterValue(key)}
              >
                {key}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    cell: ({ column, row }) => {
      const value = row.getValue(column.id) as string;

      const colors: Record<string, string> = {
        "In Progress": "bg-inp",
        Approved: "bg-apr",
        Denied: "bg-den",
        Applied: "bg-apl",
      };

      return (
        <Badge
          variant="outline"
          className={`outline-2 text-center bg-opacity-40 ${colors[value]}`}
        >
          {value}
        </Badge>
      );
    },
  },

  {
    accessorKey: "dietary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dietary" />
    ),
  },
  {
    accessorKey: "university",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="University" />
    ),
  },
  {
    accessorKey: "major",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Major" />
    ),
  },
  {
    accessorKey: "year",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Year" />
    ),
  },
  {
    accessorKey: "hackathons",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hackathons" />
    ),
  },
  {
    accessorKey: "github",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GitHub" />
    ),
  },
  {
    accessorKey: "linkedin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="LinkedIn" />
    ),
  },
  {
    accessorKey: "personalSite",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Personal Site" />
    ),
  },
  {
    accessorKey: "sponsorConsent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sponsor Consent" />
    ),
  },
  {
    accessorKey: "timeSubmitted",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time Submitted" />
    ),
  },
];
