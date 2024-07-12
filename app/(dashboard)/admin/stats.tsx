import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { DemographicChart } from "./charts";
import { get_perms } from "@/lib/auth/getPerms";

async function MapToChart({
  supabase,
  name,
  displayName,
  key,
}: {
  supabase: ReturnType<typeof createClient>;
  name: string;
  displayName?: string;
  key?: number;
}) {
  let data = await supabase
    .from(name)
    .select()
    .then(({ data, error }) => {
      if (error) console.error(error);
      return data!;
    });

  return (
    <Card key={key}>
      <p className="p-4 w-full text-center">{displayName}</p>
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
          { name: "gender_demographics" },
          { name: "race_demographics" },
          { name: "ethnicity_count" },
        ]
      : [];

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Demographics</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-evenly h-max space-y-4 md:space-y-0">
        {await Promise.all(
          demographic_views.map((props, key) =>
            MapToChart({ ...props, supabase, key }),
          ),
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
          { name: "applications_by_status", displayName: "Application Status" },
          { name: "university_count", displayName: "University" },
          { name: "study_year", displayName: "Study Year" },
        ]
      : [];

  // Executat all of the queries in parelell
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="p-4">Application Break Down</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-evenly space-y-4 md:space-y-0">
        {await Promise.all(
          agg_views.map((props, key) =>
            MapToChart({ ...props, supabase, key }),
          ),
        )}
      </CardContent>
    </Card>
  );
}
