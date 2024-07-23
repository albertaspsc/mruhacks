import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-48 h-10" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row justify-evenly">
        <Skeleton className="w-[10%] h-[50vh]" />
        <Skeleton className="w-[10%] h-[50vh]" />
      </CardContent>
    </Card>
  );
}
