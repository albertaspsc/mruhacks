"use client";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export const MenuItem = ({
  children,
  className,
  ...props
}: { children: ReactNode; className?: string } & LinkProps) => {
  const selected = usePathname() === props.href;

  return (
    <li>
      <Link
        {...props}
        className={cn(
          `hover:text-accent text-base-100 font-medium px-3 my-2 flex flex-row items-center gap-2 ${selected ? "underline" : ""}`,
          className,
        )}
      >
        {children}
      </Link>
    </li>
  );
};
