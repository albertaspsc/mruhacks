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
          `hover:border-primary hover:bg-muted/10 border border-background font-medium px-4 py-2 rounded-md my-2 flex flex-row items-center gap-2 ${selected ? "bg-primary text-white font-bold hover:bg-blue-900" : ""} transition`,
          className,
        )}
      >
        {children}
      </Link>
    </li>
  );
};
