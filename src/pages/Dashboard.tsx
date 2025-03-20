
import { metricsData, revenueData, transactionsData, barChartData, pieChartData, lineChartData } from "@/data/mockData";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import TransactionList from "@/components/dashboard/TransactionList";
import { formatCurrency } from "@/lib/utils";
import { Download } from "lucide-react";
import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

// For pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const Dashboard = () => {
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);

  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight={600}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomBarTooltip = ({ active, payload, label }: any) => {
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

  const CustomLineTooltip = ({ active, payload, label }: any) => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <StatCard
          title="Emails Sent"
          value={metricsData.emailsSent.value}
          percentageChange={metricsData.emailsSent.change}
          icon="mail"
          ringColor="bg-blue-100 dark:bg-blue-900/30"
        />
        <StatCard
          title="Total Sales"
          value={metricsData.totalSales.value}
          percentageChange={metricsData.totalSales.change}
          icon="dollar-sign"
          ringColor="bg-green-100 dark:bg-green-900/30"
        />
        <StatCard
          title="New Customers"
          value={metricsData.newCustomers.value}
          percentageChange={metricsData.newCustomers.change}
          icon="user-plus"
          ringColor="bg-purple-100 dark:bg-purple-900/30"
        />
        <StatCard
          title="Traffic Inbound"
          value={metricsData.trafficInbound.value}
          percentageChange={metricsData.trafficInbound.change}
          icon="network"
          ringColor="bg-orange-100 dark:bg-orange-900/30"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-card rounded-xl border p-5 animate-scaleIn">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-xl font-semibold">Revenue Generated</h2>
              <p className="text-2xl font-bold text-primary mt-1">
                {formatCurrency(totalRevenue)}
              </p>
            </div>
            <button className="p-2 rounded-full hover:bg-accent">
              <Download size={20} />
            </button>
          </div>
          <RevenueChart data={revenueData} />
        </div>

        <div className="bg-card rounded-xl border p-5 animate-scaleIn">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
          </div>
          <TransactionList transactions={transactionsData} />
        </div>
      </div>

      {/* Additional charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-card rounded-xl border p-5 animate-scaleIn">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Quarterly Performance</h2>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(value) => `$${value / 1000}k`} tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomBarTooltip />} />
                <Bar 
                  dataKey="revenue" 
                  name="Revenue" 
                  fill="#3B82F6" 
                  radius={[4, 4, 4, 4]} 
                />
                <Bar 
                  dataKey="expenses" 
                  name="Expenses" 
                  fill="#EF4444" 
                  radius={[4, 4, 4, 4]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-card rounded-xl border p-5 animate-scaleIn">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Product Distribution</h2>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      stroke="transparent"
                    />
                  ))}
                </Pie>
                <Legend layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-card rounded-xl border p-5 animate-scaleIn">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Marketing Channels</h2>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineChartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomLineTooltip />} />
                <Line
                  type="monotone"
                  dataKey="website"
                  name="Website"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ r: 3, strokeWidth: 1 }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="social"
                  name="Social Media"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ r: 3, strokeWidth: 1 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
