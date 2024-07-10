import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { ReactNode, Suspense } from "react";
import ApplicantsSkeleton from "./@table/loading";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AggView } from "./stats";

export default async function Applications({
  children,
  table,
}: {
  children: ReactNode;
  table: React.ReactNode;
}) {
  return (
    <div className="space-y-10">
      <Card>
        <CardHeader>
          <CardTitle>Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<ApplicantsSkeleton />}>{table}</Suspense>
        </CardContent>
      </Card>
    </div>
  );
}