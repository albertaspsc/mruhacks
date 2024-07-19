"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { EXCLUDE_COLS, ValidColumn } from "./lib";
import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "@/lib/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { UserPermissions } from "./lib";
import _ from "lodash";
import { Button } from "@/components/ui/button";
import { FaTrash } from "react-icons/fa";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function PermissionsRow({ row }: { row: UserPermissions }) {
  const supabase = createClient();
  const [deleted, setDeleted] = useState(false);
  const router = useRouter();

  if (deleted) return;

  return (
    <TableRow>
      {_.map(row, (value: string | boolean, key: ValidColumn) => {
        if (EXCLUDE_COLS.includes(key)) return;

        if (typeof value === "boolean" || !value)
          return (
            <TableCell key={key}>
              <Checkbox
                defaultChecked={!!value}
                disabled={!!(row.self && key === "super_admin")}
                onCheckedChange={(checked) => {
                  supabase
                    .from("permissions")
                    .upsert({
                      user_id: row.user_id!,
                      [key]: checked,
                    })
                    .then((res) => {
                      if (res.error?.message) {
                        toast({
                          title: "Error Occurred",
                          description: res.error.message,
                        });
                      } else {
                        toast({
                          title: `Updated ${row.name}`,
                          description: `Set '${key}' to '${checked}'`,
                        });
                      }
                    });
                }}
              />
            </TableCell>
          );
        return <TableCell key={key}>{value}</TableCell>;
      })}
      <TableCell>
        <Button
          variant="outline"
          onClick={() => {
            if (!row.user_id) return;
            supabase
              .from("permissions")
              .delete()
              .eq("user_id", row.user_id)
              .then((res) => {
                if (res.error?.message) {
                  toast({
                    title: "Error Occurred",
                    description: res.error.message,
                  });
                } else {
                  toast({
                    title: `Removed ${row.name}`,
                  });
                }

                setDeleted(true);

                router.refresh();
              });
          }}
        >
          <VisuallyHidden>Delete</VisuallyHidden>
          <FaTrash />
        </Button>
      </TableCell>
    </TableRow>
  );
}
