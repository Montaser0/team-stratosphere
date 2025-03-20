
import { useState } from "react";
import { lineChartData } from "@/data/mockData";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartPage = () => {
  const [visibleLines, setVisibleLines] = useState({
    website: true,
    social: true,
    email: true,
  });

  const toggleLine = (line: keyof typeof visibleLines) => {
    setVisibleLines((prev) => ({
      ...prev,
      [line]: !prev[line],
    }));
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border p-3 rounded-md shadow-sm">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              style={{ color: entry.color }}
              className="font-semibold"
            >
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Line Chart</h1>
        <p className="text-muted-foreground mt-1">Track marketing channel performance</p>
      </div>

      <div className="bg-card rounded-xl border p-5 animate-scaleIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Marketing Channels Comparison</h2>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={visibleLines.website}
                onChange={() => toggleLine("website")}
                className="rounded"
              />
              Website
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={visibleLines.social}
                onChange={() => toggleLine("social")}
                className="rounded"
              />
              Social Media
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={visibleLines.email}
                onChange={() => toggleLine("email")}
                className="rounded"
              />
              Email
            </label>
          </div>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart
              data={lineChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {visibleLines.website && (
                <Line
                  type="monotone"
                  dataKey="website"
                  name="Website"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              )}
              {visibleLines.social && (
                <Line
                  type="monotone"
                  dataKey="social"
                  name="Social Media"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              )}
              {visibleLines.email && (
                <Line
                  type="monotone"
                  dataKey="email"
                  name="Email"
                  stroke="#F59E0B"
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              )}
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LineChartPage;
