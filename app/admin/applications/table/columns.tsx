"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./sortable_header";

type Application = {
  id: string;
  first_name: string;
  last_name: string;
};

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" searchable />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" searchable />
    ),
  },
  {
    accessorKey: "application_status",
    header: "Application Status",
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Age" />
    ),
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gender" />
    ),
  },
  {
    accessorKey: "race",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Race" />
    ),
  },
  {
    accessorKey: "ethnicity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ethnicity" />
    ),
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
      <DataTableColumnHeader column={column} title="University" searchable />
    ),
  },
  {
    accessorKey: "major",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Major" searchable />
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
      <DataTableColumnHeader column={column} title="GitHub" searchable />
    ),
  },
  {
    accessorKey: "linkedin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="LinkedIn" searchable />
    ),
  },
  {
    accessorKey: "personalSite",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Personal Site" searchable />
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
