import { ReactNode, Suspense } from "react";
import React from "react";
import Path from "./path";
import { Skeleton } from "@/components/ui/skeleton";

export default function Layout(props: {
  children: ReactNode;
  sidebar: ReactNode;
  navbar: ReactNode;
}) {
  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden bg-muted">
      {/* {props.navbar} */}
      <div className="flex flex-row flex-1 max-h-screen overflow-y-hidden">
        {props.sidebar}
        <div className="flex-1 h-auto flex flex-col px-4 pb-4 overflow-y-auto">
          <Path />
          {props.children}
        </div>
      </div>
    </div>
  );
}
