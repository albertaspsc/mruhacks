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
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      {props.navbar}
      <div className="flex flex-row flex-1 max-h-screen overflow-y-hidden">
        {props.sidebar}
        <div className="flex-1 h-auto px-4 overflow-y-auto">
          <Path />
          {props.children}
          <div className="last first-of-type:visible invisible flex items-center justify-center pt-20">
            No content Selected
          </div>
        </div>
      </div>
    </div>
  );
}
