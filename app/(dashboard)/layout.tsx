import { ReactNode } from "react";
import React from "react";
import Path from "./path";

export default function Layout(props: {
  children: ReactNode;
  sidebar: ReactNode;
  navbar: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      {props.navbar}
      <div className="flex flex-row flex-1 max-h-screen overflow-y-hidden">
        {props.sidebar}
        <div className="flex-1 h-auto  overflow-y-auto">
          <Path />
          <div className="px-5">{props.children}</div>
          <div className="last first-of-type:visible invisible flex items-center justify-center pt-20">
            No content Selected
          </div>
        </div>
      </div>
      {props.modal}
    </div>
  );
}
