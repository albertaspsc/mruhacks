"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Database } from "@/types/supabase";
import { throttle } from "lodash";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { toast } from "@/components/ui/use-toast";

export function AddRow() {
  const supasebase = createClient();
  const router = useRouter();
  const [data, setData] = useState<SearchResults>([]);
  const [search, _setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const setSearch = useMemo(() => {
    return throttle(_setSearch, 1000);
  }, [_setSearch]);

  useEffect(() => {
    supasebase.rpc("search_user", { search }).then(({ data: rows, error }) => {
      if (error) console.error(error);
      if (!rows) return;
      setData(rows);
      setOpen(rows.length > 0);
    });
  }, [search, supasebase]);

  return (
    <div className="flex-flex-row">
      <Popover
        open={open}
        onOpenChange={(state) => {
          setOpen(
            (current_state) =>
              (current_state && state) || (data.length > 0 && state),
          );
        }}
      >
        <PopoverTrigger>
          <div className="text-left">
            <h4 className="font-semibold cursor-default">Add New User</h4>
            <Input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          align="start"
          className="w-max"
        >
          <ul>
            {data.map((row) => (
              <li
                key={row.user_id}
                className="flex flex-row flex-nowrap text-nowrap items-center"
              >
                {row.name} {row.email}
                <span className="w-5" />
                <Button
                  className="ml-auto"
                  variant="outline"
                  onClick={() => {
                    supasebase
                      .from("permissions")
                      .upsert({ user_id: row.user_id })
                      .then((res) => {
                        toast({
                          title: res.error
                            ? "An Error Occurred"
                            : `Added ${row.name}`,
                          description: res.error?.message || res.statusText,
                        });
                      });

                    router.refresh();
                  }}
                >
                  <PlusIcon />
                </Button>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}

type SearchResults = Database["public"]["Functions"]["search_user"]["Returns"];
