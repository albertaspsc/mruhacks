import { ReactNode } from "react";
import React from "react";
import Path from "./path";

import * as ScrollArea from "@radix-ui/react-scroll-area";

export default function Layout(props: {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="h-screen max-h-screen flex flex-col  bg-muted">
      <div className="flex flex-row">
        <div className="md:block hidden">{props.sidebar}</div>
        <div className="px-4 pb-10 h-screen w-full overflow-auto">
          <Path>
            <div className="md:hidden block">{props.sidebar}</div>
          </Path>
          {props.children}
        </div>
      </div>
      {props.modal}
    </div>
  );
}
