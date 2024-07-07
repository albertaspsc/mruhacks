import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import {
  DietaryRequirements,
  GenderDemoGraphics,
  PieChartGraph,
} from "./charts";

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
  const race_demographics = await supabase
    .from("race_demographics")
    .select()
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data;
    });
  const ethnicity_count = await supabase
    .from("ethnicity_count")
    .select()
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data;
    });
  const major_count = await supabase
    .from("major_count")
    .select()
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data;
    });
  const university_count = await supabase
    .from("university_count")
    .select()
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data;
    });

  const study_year = await supabase
    .from("year_count")
    .select()
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data;
    });

  const dietary_needs = await supabase
    .from("dietary_restrictions")
    .select()
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data;
    });

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <StatsCard title="Total Users" value={user_count ?? "<Unknown>"} />
        <StatsCard
          title="Total Registrations"
          value={reg_count ?? "<Unknown>"}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <DietaryRequirements data={dietary_needs!} />
        <GenderDemoGraphics gender_demographics={gender_demographics!} />
        <PieChartGraph data={race_demographics!} />

        <PieChartGraph data={university_count!} />
        <PieChartGraph data={ethnicity_count!} />
        <PieChartGraph data={major_count!} />
        <PieChartGraph data={study_year!} />
      </div>
    </>
  );
}
