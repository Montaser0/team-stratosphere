
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { SidebarProvider } from "@/context/SidebarContext";
import Layout from "@/components/layout/Layout";

// Pages
import Dashboard from "@/pages/Dashboard";
import Team from "@/pages/Team";
import Contacts from "@/pages/Contacts";
import Invoices from "@/pages/Invoices";
import Profile from "@/pages/Profile";
import Calendar from "@/pages/Calendar";
import FAQ from "@/pages/FAQ";
import BarChart from "@/pages/BarChart";
import PieChart from "@/pages/PieChart";
import LineChart from "@/pages/LineChart";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <SidebarProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar-chart" element={<BarChart />} />
                <Route path="/pie-chart" element={<PieChart />} />
                <Route path="/line-chart" element={<LineChart />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SidebarProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
