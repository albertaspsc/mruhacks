"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!open) router.back();
  }, [open, router]);

  return (
    <Dialog open={open} onOpenChange={setOpen} defaultOpen>
      <DialogContent className="bg-white">{children}</DialogContent>
    </Dialog>
  );
}
