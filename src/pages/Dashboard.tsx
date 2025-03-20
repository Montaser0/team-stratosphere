
import { metricsData, revenueData, transactionsData } from "@/data/mockData";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import TransactionList from "@/components/dashboard/TransactionList";
import { formatCurrency } from "@/lib/utils";
import { Download } from "lucide-react";

const Dashboard = () => {
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);

  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of your business</p>
      </div>

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
    </div>
  );
};

export default Dashboard;
