
import { NavLink } from "react-router-dom";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";
import { 
  BarChart3, Calendar, Contact, FileText, 
  Home, LineChart, PieChart, User, Users, HelpCircle, X, Menu
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
        <div className="flex flex-col h-full overflow-y-auto bg-sidebar-background no-scrollbar">
          {/* Logo */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-lg">
                A
              </div>
              <div>
                <h2 className="font-bold text-sidebar-foreground">ADMINIS</h2>
              </div>
            </div>
          </div>

          {/* User profile */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="/lovable-uploads/59eabdad-6cea-43e2-ab93-e2f5a501952f.png"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sidebar-foreground">Montaser Haj Omar</h3>
                <p className="text-xs text-sidebar-muted-foreground">Website Admin</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <div className="mb-4">
              <p className="text-xs text-sidebar-muted-foreground mb-2 px-3">DATA</p>
              <div className="space-y-1">
                <SidebarItem to="/" icon={<Home size={18} />} label="Dashboard" />
                <SidebarItem to="/team" icon={<Users size={18} />} label="Manage Team" />
                <SidebarItem to="/contacts" icon={<Contact size={18} />} label="Contacts Information" />
                <SidebarItem to="/invoices" icon={<FileText size={18} />} label="Invoices Balances" />
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs text-sidebar-muted-foreground mb-2 px-3">PAGES</p>
              <div className="space-y-1">
                <SidebarItem to="/profile" icon={<User size={18} />} label="Profile Form" />
                <SidebarItem to="/calendar" icon={<Calendar size={18} />} label="Calendar" />
                <SidebarItem to="/faq" icon={<HelpCircle size={18} />} label="FAQ Page" />
              </div>
            </div>
            
            <div>
              <p className="text-xs text-sidebar-muted-foreground mb-2 px-3">CHARTS</p>
              <div className="space-y-1">
                <SidebarItem to="/bar-chart" icon={<BarChart3 size={18} />} label="Bar Chart" />
                <SidebarItem to="/pie-chart" icon={<PieChart size={18} />} label="Pie Chart" />
                <SidebarItem to="/line-chart" icon={<LineChart size={18} />} label="Line Chart" />
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
