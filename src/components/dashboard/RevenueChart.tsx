
import { formatCurrency } from "@/lib/utils";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, TooltipProps 
} from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

interface RevenueData {
  month: string;
  revenue: number;
}

interface RevenueChartProps {
  data: RevenueData[];
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border p-3 rounded-md shadow-sm">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-primary font-semibold">
          {formatCurrency(payload[0].value as number)}
        </p>
      </div>
    );
  }

  return null;
};

const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <div className="h-[300px] w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            dot={{ r: 4, fill: "hsl(var(--primary))", strokeWidth: 2 }}
            activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
