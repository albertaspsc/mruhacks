"use client";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
export const MenuItem = ({
  children,
  ...props
}: { children: ReactNode } & LinkProps) => {
  const selected = usePathname() === props.href;

  return (
    <li>
      <Link
        {...props}
        className={`hover:text-accent text-base-100 font-medium px-3 my-2 flex flex-row items-center gap-2 ${selected ? "underline" : ""}`}
      >
        {children}
      </Link>
    </li>
  );
};
