import { BarChart } from "@mantine/charts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, Suspense } from "react";
import { createClient } from "@/lib/supabase/server";

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
  const reg_count = supabase
    .from("registrations")
    .select("count")
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data?.[0]?.count ?? undefined;
    });

  const user_count = supabase
    .from("users")
    .select("count")
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data?.[0]?.count ?? undefined;
    });

  const gender_demographics = supabase
    .from("gender_demographics")
    .select()
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data;
    });

  return (
    <div className="grid grid-cols-2 gap-5">
      <Suspense>
        <StatsCard title="Total Users" value={user_count ?? "<Unknown>"} />
        <StatsCard
          title="Total Registrations"
          value={reg_count ?? "<Unknown>"}
        />
      </Suspense>

      <Suspense>
        <BarChart
          data={(await gender_demographics) ?? []}
          dataKey="gender"
          series={[{ name: "count" }]}
        />
      </Suspense>
    </div>
  );
}
