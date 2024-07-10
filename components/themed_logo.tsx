"use client";

import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

import dark_logo from "../public/mru_title_dark.png";
import light_logo from "../public/mru_title_light.png";
import { cn } from "@/lib/utils";

type LogoProps = Omit<Omit<ImageProps, "src">, "alt">;

export default function Logo({ ...props }: LogoProps) {
  const { resolvedTheme } = useTheme();

  switch (resolvedTheme) {
    case "light":
      var src = dark_logo;
      break;
    case "dark":
      var src = light_logo;
      break;
    default:
      var src = dark_logo;
  }

  return (
    <Image
      {...props}
      className={cn("h-20 w-auto", props.className)}
      src={src}
      alt="MRUHacks Logo"
    />
  );
}
