"use client";

import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

import dark_logo from "../public/mru_title_dark.png";
import light_logo from "../public/mru_title_light.png";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type LogoProps = Omit<Omit<ImageProps, "src">, "alt">;

export default function Logo({ ...props }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState(dark_logo);

  useEffect(() => {
    switch (resolvedTheme) {
      case "light":
        setSrc(dark_logo);
        break;
      case "dark":
        setSrc(light_logo);
        break;
      default:
        setSrc(light_logo);
    }
  }, [resolvedTheme]);

  return (
    <Image
      {...props}
      className={cn("h-20 w-auto", props.className)}
      src={src}
      alt="MRUHacks Logo"
    />
  );
}
