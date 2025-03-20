
import { NavLink } from "react-router-dom";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";
import { 
  BarChart3, Calendar, Contact, FileText, 
  Home, LineChart, PieChart, User, Users, HelpCircle, X, Menu,
  Search
} from "lucide-react";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarItem = ({ to, icon, label }: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2 rounded-md transition-colors", 
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-sidebar-foreground"
        )
      }
    >
      {icon}
      <span className="font-medium">{label}</span>
    </NavLink>
  );
};

const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <>
      {/* Mobile sidebar toggle */}
      <button 
        onClick={toggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-sidebar-background text-sidebar-foreground"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-sidebar-background transform transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-hidden flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto bg-[#1a2233] no-scrollbar">
          {/* Search box at the top */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#283046] text-white py-2 pl-9 pr-4 rounded-md border-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Dashboard heading */}
          <div className="px-4 py-2">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-sm text-[#8a92a6] mt-1">Overview of your business</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-6">
            <div className="mb-2">
              <p className="text-xs uppercase text-[#8a92a6] mb-3 px-3 font-semibold tracking-wider">Data</p>
              <div className="space-y-1">
                <SidebarItem to="/" icon={<Home size={18} className="text-[#8a92a6]" />} label="Dashboard" />
                <SidebarItem to="/team" icon={<Users size={18} className="text-[#8a92a6]" />} label="Manage Team" />
                <SidebarItem to="/contacts" icon={<Contact size={18} className="text-[#8a92a6]" />} label="Contacts Information" />
                <SidebarItem to="/invoices" icon={<FileText size={18} className="text-[#8a92a6]" />} label="Invoices Balances" />
              </div>
            </div>
            
            <div className="mb-2">
              <p className="text-xs uppercase text-[#8a92a6] mb-3 px-3 font-semibold tracking-wider">Pages</p>
              <div className="space-y-1">
                <SidebarItem to="/profile" icon={<User size={18} className="text-[#8a92a6]" />} label="Profile Form" />
                <SidebarItem to="/calendar" icon={<Calendar size={18} className="text-[#8a92a6]" />} label="Calendar" />
                <SidebarItem to="/faq" icon={<HelpCircle size={18} className="text-[#8a92a6]" />} label="FAQ Page" />
              </div>
            </div>
            
            <div>
              <p className="text-xs uppercase text-[#8a92a6] mb-3 px-3 font-semibold tracking-wider">Charts</p>
              <div className="space-y-1">
                <SidebarItem to="/bar-chart" icon={<BarChart3 size={18} className="text-[#8a92a6]" />} label="Bar Chart" />
                <SidebarItem to="/pie-chart" icon={<PieChart size={18} className="text-[#8a92a6]" />} label="Pie Chart" />
                <SidebarItem to="/line-chart" icon={<LineChart size={18} className="text-[#8a92a6]" />} label="Line Chart" />
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
