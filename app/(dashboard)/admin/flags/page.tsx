"use client";

import _, { find, random, range } from "lodash";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCallback, useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import type { PostgrestSingleResponse } from "@supabase/postgrest-js";
import { Loading } from "./lib";
import { get_color } from "@/lib/colors";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DeleteIcon } from "lucide-react";
import { TrashIcon } from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { toast } from "@/components/ui/use-toast";

export default function Page() {
  const supasebase = createClient();
  const [response, setResponse] = useState<DBResponse>();
  const [flagTypes, setFlagTypes] = useState<FlagTypesResponse>();

  const update_table = useCallback(() => {
    supasebase
      .from("user_flag_types")
      .select("id, name")
      .then((resp) => setFlagTypes(resp));
    supasebase
      .from("account_flags")
      .select()
      .then((resp) => setResponse(resp));
  }, [supasebase]);

  useEffect(() => {
    update_table();
  }, [update_table]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Flags</CardTitle>
      </CardHeader>
      <CardContent>
        {response ? (
          <FlagsTable
            update_table={update_table}
            flagTypes={flagTypes}
            {...response}
          />
        ) : (
          <Loading />
        )}
      </CardContent>
    </Card>
  );
}

const FlagsTable = ({
  data,
  error,
  update_table,
  flagTypes,
}: DBResponse & {
  update_table: () => void;
  flagTypes?: FlagTypesResponse;
}) => {
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

  const headers = Object.keys(data?.[0] ?? [])
    .filter((name) => !EXCLUDE_COLS.includes(name as keyof AccountFlags))
    .map((x) => (
      <TableCell key={x} className="capitalize">
        {_.lowerCase(x)}
      </TableCell>
    ));

  return (
    <Table>
      <TableHeader>
        <TableRow>{headers}</TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((row) => {
          const cols = _.omit(row, EXCLUDE_COLS);
          return (
            <TableRow key={row.user_id}>
              {_.map(cols, (value, key) => (
                <TableCell key={key}>{value ?? "<unknown>"}</TableCell>
              ))}

              <Flags row={row} flag_types={flagTypes?.data ?? []} />
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

const Flags = ({
  row,
  flag_types,
}: {
  row: AccountFlags;
  flag_types: FlagType[];
}) => {
  const supabase = createClient();

  return (
    <TableCell className="space-x-4">
      {row.flags
        ?.filter((x) => x)
        .map((b, key) => {
          const name = find(flag_types, { id: b })?.name ?? "<unknown>";
          return (
            <Badge
              key={key}
              className="bg-blend-exclusion"
              style={{
                backgroundColor: get_color(name)!,
              }}
            >
              {name}
              <Button
                className="h-3 p-0 pl-2"
                variant="ghost"
                onClick={() => {
                  toast({
                    title:
                      "Hey There, this page is not finished. Please check back later",
                    description: "womp womp",
                  });
                }}
              >
                <VisuallyHidden>Delete</VisuallyHidden>
                <DeleteIcon className="w-3 h-3" />
              </Button>
            </Badge>
          );
        })}
    </TableCell>
  );
};

const EXCLUDE_COLS: (keyof AccountFlags)[] = ["user_id", "flags", "flag_ids"];
type AccountFlags = Database["public"]["Views"]["account_flags"]["Row"];
type DBResponse = PostgrestSingleResponse<AccountFlags[]>;
type FlagType = { id: number; name: string };
type FlagTypesResponse = PostgrestSingleResponse<FlagType[]>;
