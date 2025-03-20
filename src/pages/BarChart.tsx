
import { useState } from "react";
import { barChartData } from "@/data/mockData";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formatCurrency } from "@/lib/utils";

const BarChartPage = () => {
  const [isStacked, setIsStacked] = useState(false);

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
              {entry.name}: {formatCurrency(entry.value)}
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
        <h1 className="text-3xl font-bold">Bar Chart</h1>
        <p className="text-muted-foreground mt-1">Visualize quarterly revenue and expenses</p>
      </div>

      <div className="bg-card rounded-xl border p-5 animate-scaleIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Quarterly Performance</h2>
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={isStacked}
                onChange={() => setIsStacked(!isStacked)}
                className="rounded"
              />
              Stacked View
            </label>
          </div>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={barChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {isStacked ? (
                <>
                  <Bar
                    dataKey="revenue"
                    name="Revenue"
                    stackId="a"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="expenses"
                    name="Expenses"
                    stackId="a"
                    fill="hsl(var(--destructive))"
                    radius={[0, 0, 4, 4]}
                  />
                </>
              ) : (
                <>
                  <Bar
                    dataKey="revenue"
                    name="Revenue"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 4, 4]}
                  />
                  <Bar
                    dataKey="expenses"
                    name="Expenses"
                    fill="hsl(var(--destructive))"
                    radius={[4, 4, 4, 4]}
                  />
                </>
              )}
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarChartPage;
