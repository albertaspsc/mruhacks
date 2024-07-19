"use client";

import { createClient } from "@/lib/supabase/client";
import { DateTime } from "luxon";
import _ from "lodash";
import { useEffect, useMemo, useState } from "react";

export function Countdown() {
  const [hackthon_date, setHackthonDate] = useState<DateTime>(
    DateTime.fromSeconds(2 ** 31),
  );
  const [now, setNow] = useState<DateTime>(DateTime.now());

  useMemo(() => {
    createClient()
      .from("events")
      .select("start")
      .eq("id", "0a69bb7a-b24e-4e8a-a60a-3fc5cb91f062")
      .single()
      .then(({ data, error }) => {
        setHackthonDate(DateTime.fromISO(data?.start ?? "")!);

        if (!data || error)
          console.error(
            "Failed to get hackthon start date | " + error ? error : "",
          );
      });
  }, []);

  useEffect(() => {
    const func = setInterval(function () {
      setNow(DateTime.now());
    }, 500);

    // Prevent duplicates
    return () => clearTimeout(func);
  }, []);

  const difference = hackthon_date
    ?.diff(now, ["months", "weeks", "days", "hours", "minute"])
    .toObject();

  return (
    <div className="flex flex-row space-x-5 flex-wrap">
      {_.map(difference, (value, key) => {
        if (value ?? 0 > 0)
          return (
            <div className="flex flex-col items-center" key={key}>
              <div
                className="text-2xl font-semibold text-primary-content font-mono"
                suppressHydrationWarning
              >
                {String(Math.floor(value ?? 0)).padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground">{key}</div>
            </div>
          );
      })}
    </div>
  );
}
