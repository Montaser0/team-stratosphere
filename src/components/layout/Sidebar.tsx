
import { NavLink } from "react-router-dom";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";
import { 
  BarChart3, Calendar, Contact, FileText, 
  Home, LineChart, PieChart, User, Users, HelpCircle, X
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarItem = ({ to, icon, label }: SidebarItemProps) => {
  const { close } = useSidebar();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Close sidebar on mobile when clicking a link
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      close();
    }
  };
  
  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2 rounded-md transition-colors", 
          isDark 
            ? "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" 
            : "hover:bg-gray-100",
          isActive 
            ? (isDark ? "bg-sidebar-accent text-white font-medium" : "bg-gray-100 text-blue-600 font-medium")
            : (isDark ? "text-sidebar-foreground" : "text-gray-700")
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Mobile overlay to close sidebar when clicking outside */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggle}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          // Important: Make sure lg:translate-x-0 is applied only on large screens AND when not toggled off
          "lg:translate-x-0"
        )}
      >
        <div className={cn(
          "flex flex-col h-full overflow-y-auto no-scrollbar",
          isDark ? "bg-[#1a2233]" : "bg-white border-r border-gray-200"
        )}>
          {/* Close button for mobile */}
          <button 
            onClick={toggle}
            className={cn(
              "lg:hidden absolute top-4 right-4 p-2 rounded-md",
              isDark ? "bg-[#283046] text-white" : "bg-gray-100 text-gray-700"
            )}
          >
            <X size={20} />
          </button>

          {/* Dashboard heading */}
          <div className="px-4 py-2 mt-4">
            <h1 className={cn(
              "text-2xl font-bold",
              isDark ? "text-white" : "text-gray-900"
            )}>Dashboard</h1>
            <p className={cn(
              "text-sm mt-1",
              isDark ? "text-[#8a92a6]" : "text-gray-500"
            )}>Overview of your business</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-6">
            <div className="mb-2">
              <p className={cn(
                "text-xs uppercase mb-3 px-3 font-semibold tracking-wider",
                isDark ? "text-[#8a92a6]" : "text-gray-500"
              )}>Data</p>
              <div className="space-y-1">
                <SidebarItem to="/" icon={<Home size={18} className={isDark ? "text-[#8a92a6]" : "text-gray-500"} />} label="Dashboard" />
                <SidebarItem to="/team" icon={<Users size={18} className={isDark ? "text-[#8a92a6]" : "text-gray-500"} />} label="Manage Team" />
                <SidebarItem to="/contacts" icon={<Contact size={18} className={isDark ? "text-[#8a92a6]" : "text-gray-500"} />} label="Contacts Information" />
                <SidebarItem to="/invoices" icon={<FileText size={18} className={isDark ? "text-[#8a92a6]" : "text-gray-500"} />} label="Invoices Balances" />
              </div>
            </div>
            
            <div className="mb-2">
              <p className={cn(
                "text-xs uppercase mb-3 px-3 font-semibold tracking-wider",
                isDark ? "text-[#8a92a6]" : "text-gray-500"
              )}>Pages</p>
              <div className="space-y-1">
                <SidebarItem to="/profile" icon={<User size={18} className={isDark ? "text-[#8a92a6]" : "text-gray-500"} />} label="Profile Form" />
                <SidebarItem to="/calendar" icon={<Calendar size={18} className={isDark ? "text-[#8a92a6]" : "text-gray-500"} />} label="Calendar" />
                <SidebarItem to="/faq" icon={<HelpCircle size={18} className={isDark ? "text-[#8a92a6]" : "text-gray-500"} />} label="FAQ Page" />
              </div>
            </div>
            
            <div>
              <p className={cn(
                "text-xs uppercase mb-3 px-3 font-semibold tracking-wider",
                isDark ? "text-[#8a92a6]" : "text-gray-500"
              )}>Charts</p>
              <div className="space-y-1">
                <SidebarItem to="/bar-chart" icon={<BarChart3 size={18} className={isDark ? "text-[#8a92a6]" : "text-gray-500"} />} label="Bar Chart" />
                <SidebarItem to="/pie-chart" icon={<PieChart size={18} className={isDark ? "text-[#8a92a6]" : "text-gray-500"} />} label="Pie Chart" />
                <SidebarItem to="/line-chart" icon={<LineChart size={18} className={isDark ? "text-[#8a92a6]" : "text-gray-500"} />} label="Line Chart" />
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
