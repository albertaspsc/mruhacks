"use client";

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/lib/supabase/client";
import { Flag } from "../../profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { PlusIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export function AddRow() {
  const supasebase = createClient();
  const router = useRouter();
  const [data, setData] = useState<
    {
      user_id: string | null;
      email: string | null;
      name: string | null;
      is_organizer: boolean | null;
      testing_account: boolean | null;
    }[]
  >();
  const [user_id, setUserId] = useState<string>();
  const [message, setMessage] = useState("");

  useEffect(() => {
    supasebase
      .from("named_users")
      .select("user_id, email, name, is_organizer, testing_account")
      .then(({ data, error }) => {
        if (data) setData(data);
      });
  }, [supasebase]);

  return (
    <div>
      <div className="flex flex-row ">
        <Select onValueChange={setUserId}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="User..." />
          </SelectTrigger>
          <SelectContent>
            {data?.map((row) => (
              <SelectItem value={row.user_id!} key={row.user_id}>
                {`${row.name ?? "<Unknown Name>"} <${row.email}>`}
                {row.is_organizer && (
                  <Badge className="bg-purple-500/50">Organizer</Badge>
                )}
                {row.testing_account && (
                  <Badge className="bg-red-500/50">Testing Account</Badge>
                )}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          onClick={() => {
            if (!user_id) {
              setMessage("Please Select User");
              return;
            }
            supasebase
              .from("permissions")
              .upsert({ user_id })
              .then(({ error }) => {
                if (error) console.error(error);

                toast({ title: "Added User", description: user_id });
              });

            router.refresh();
          }}
        >
          Add Row
          <PlusIcon />
        </Button>
      </div>
      <p className="pl-2 text-xs">{message}</p>
    </div>
  );
}
