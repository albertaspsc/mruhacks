"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
} from "recharts";

export function GenderDemoGraphics({
  gender_demographics,
}: {
  gender_demographics: Record<string, unknown>[];
}) {
  return (
    <>
      <h1 className="text-center">User Demographics</h1>
      <BarChart width={400} height={400} data={gender_demographics!}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="gender" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </>
  );
}

export function DietaryRequirements({
  data,
}: {
  data: Record<string, unknown>[];
}) {
  return (
    <>
      <h1 className="text-center">Dietary Needs</h1>
      <BarChart width={400} height={400} data={data!}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dietary" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </>
  );
}

export function PieChartGraph({ data }: { data: Record<string, unknown>[] }) {
  return (
    <>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="count"
          isAnimationActive={false}
          data={data!}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </>
  );
}
