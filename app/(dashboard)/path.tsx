"use client";

import Image from "next/image";
import small_logo from "@/public/mru_title_dark.png";

function getURLSegments(url: string) {
  const segments = url.split("/");
  const hrefs: string[] = [];
  let currentPath = url.startsWith("/") ? "" : "/";

  segments.forEach((segment) => {
    currentPath += `${segment}/`;
    hrefs.push(currentPath);
  });

  return zip(segments, hrefs);
}

import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { zip } from "lodash";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";

export default function Path({ children }: { children?: ReactNode }) {
  const path = usePathname();

  const segments = getURLSegments(path);

  const b = segments
    .map((value, key) => {
      var sep: ReactNode | undefined = <BreadcrumbSeparator key={2 * key} />;

      if (key === 0) return;

      if (key <= 1) sep = undefined;

      return [
        sep,
        <BreadcrumbLink
          className="text-lg capitalize"
          href={value[1]}
          key={key * 2 + 1}
        >
          {value[0]}
        </BreadcrumbLink>,
      ];
    })
    .flat()
    .filter((x) => !!x);
  return (
    <Breadcrumb className="text-lg p-4 my-4 bg-background z-10 rounded-md border flex flex-row items-center space-x-5">
      {children}
      <BreadcrumbList>{b}</BreadcrumbList>
    </Breadcrumb>
  );
}
