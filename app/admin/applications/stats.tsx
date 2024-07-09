import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { DemographicChart, DonutGraph } from "./charts";
import { get_perms } from "@/lib/auth/getPerms";

async function MapToChart({
  supabase,
  name,
  displayName,
}: {
  supabase: ReturnType<typeof createClient>;
  name: string;
  displayName: string;
}) {
  let data = await supabase
    .from(name)
    .select()
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data!;
    });

  return (
    <Card>
      <CardContent>
        <DemographicChart data={data} />
      </CardContent>
    </Card>
  );
}

export const Demographics = async () => {
  const supabase = createClient();

  const { data, error } = await get_perms();

  if (!data || error) {
    console.error(error);
    return;
  }

  const { super_admin, can_view_demographics } = data[0];

  const demographic_views =
    super_admin || can_view_demographics
      ? [
          { name: "gender_demographics", displayName: "Gender Demographics" },
          { name: "race_demographics", displayName: "Race Demographics" },
          { name: "ethnicity_count", displayName: "Ethnicity" },
        ]
      : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Applications at a glance</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row flex-wrap overflow-auto">
        {await Promise.all(
          demographic_views.map((props) => MapToChart({ ...props, supabase })),
        )}
      </CardContent>
    </Card>
  );
};

export async function AggView() {
  const supabase = createClient();

  const { data, error } = await get_perms();

  if (!data || error) {
    console.error(error);
    return;
  }

  const { super_admin, can_view_user_details, can_view_agg_stats } = data[0];

  const agg_views =
    super_admin || can_view_agg_stats || can_view_user_details
      ? [
          { name: "applications_by_status", displayName: "Applcaition Status" },
          { name: "university_count", displayName: "University" },
          { name: "study_year", displayName: "Study Year" },
          { name: "dietary_needs", displayName: "Dietary Needs" },
        ]
      : [];

  // Executat all of the queries in parelell
  return (
    <Card>
      <CardHeader>
        <CardTitle>At A Glance</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-evenly ">
        {await Promise.all(
          agg_views.map((props) => MapToChart({ ...props, supabase })),
        )}
      </CardContent>
    </Card>
  );
}
