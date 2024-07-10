"use client";

import { Legend, Tooltip, PieChart, Pie, ResponsiveContainer } from "recharts";

export function DemographicChart({
  data,
}: {
  data: Record<string, unknown>[];
}) {
  // Get the first none count key to be used for the label
  const nameKey =
    Object.keys(data[0]).filter((key) => key !== "count")[0] ?? "<None>";
  const color_data = data.map((x, key) => ({ ...x, fill: COLORS[key] }));

  return (
    <ResponsiveContainer width={250} minHeight={300}>
      <PieChart>
        <Pie dataKey="count" nameKey={nameKey} data={color_data} />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

const COLORS = [
  "#b33dc6",
  "#27aeef",
  "#87bc45",
  "#bdcf32",
  "#ede15b",
  "#edbf33",
  "#ef9b20",
  "#f46a9b",
  "#ea5545",
];
