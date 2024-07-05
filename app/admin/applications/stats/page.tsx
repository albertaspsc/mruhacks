import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { GenderDemoGraphics } from "./charts";

function StatsCard({
  title,
  value,
  children,
}: {
  title: string;
  value: unknown;
  children?: ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value as string}</div>
        {children}
      </CardContent>
    </Card>
  );
}

export default async function Page() {
  const supabase = createClient();
  const reg_count = await supabase
    .from("registrations")
    .select("count")
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data?.[0]?.count ?? undefined;
    });

  const user_count = await supabase
    .from("users")
    .select("count")
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data?.[0]?.count ?? undefined;
    });

  const gender_demographics = await supabase
    .from("gender_demographics")
    .select()
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data;
    });

  return (
    <div className="grid grid-cols-2 gap-5">
      <StatsCard title="Total Users" value={user_count ?? "<Unknown>"} />
      <StatsCard title="Total Registrations" value={reg_count ?? "<Unknown>"} />
      <GenderDemoGraphics gender_demographics={gender_demographics!} />
    </div>
  );
}
