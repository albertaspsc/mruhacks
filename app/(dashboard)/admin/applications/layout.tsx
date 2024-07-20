import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-10">
      <Card>
        <CardContent>
          <CardHeader className="pl-0">
            <CardTitle>Applications</CardTitle>
          </CardHeader>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
