"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Default() {
  const params = useSearchParams();
  const router = useRouter();

  const modal = params.get("modal");

  if (modal === "login") {
    router.replace("/login");
  }
  if (modal === "unauthorized") {
    router.replace("/unauthorized");
  }

  return null;
}
