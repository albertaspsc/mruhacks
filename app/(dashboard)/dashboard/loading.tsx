import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card className="bg-background ">
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-30 h-8" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-full h-[50vh]" />
      </CardContent>
    </Card>
  );
}
