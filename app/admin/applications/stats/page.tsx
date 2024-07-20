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
  const { data, error } = await supabase
    .from("applications_by_status")
    .select();

  if (error) console.error(error);

  if (!data) {
    return "Failed to get user counts";
  }

  console.log(data?.[0] ?? []);

  return (
    <Card>
      <CardContent>
        <CardHeader>
          <CardTitle>Applications By Status</CardTitle>
        </CardHeader>
        <div className="grid grid-cols-4 gap-5">
          {data.map((x, key) => (
            <StatsCard key={key} title={x.application_status} value={x.count} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
