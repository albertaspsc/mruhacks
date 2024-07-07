"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export function GenderDemoGraphics({
  gender_demographics,
}: {
  gender_demographics: Record<string, unknown>[];
}) {
  return (
    <ResponsiveContainer>
      <BarChart width={400} height={400} data={gender_demographics!}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="gender" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
