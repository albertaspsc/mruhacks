import { ReactNode, Suspense } from "react";
import React from "react";
import Path from "./path";

export default function Layout(props: {
  children: ReactNode;
  sidebar: ReactNode;
  navbar: ReactNode;
}) {
  return (
    <div className="h-screen">
      {props.navbar}
      <div className="flex flex-row flex-grow">
        {props.sidebar}
        <div className="flex-grow overflow-auto px-5 overflow-y-scroll">
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
