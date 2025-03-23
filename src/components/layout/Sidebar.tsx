
import { NavLink } from "react-router-dom";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BarChart3, Calendar, Contact, FileText, 
  Home, LineChart, PieChart, User, Users, HelpCircle, ChevronRight
} from "lucide-react";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarItem = ({ to, icon, label }: SidebarItemProps) => {
  const { close, isCollapsed } = useSidebar();
  
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
          "flex items-center gap-3 px-3 py-2.5 my-1 rounded-md transition-colors", 
          "text-gray-300 hover:bg-[#1d2942] hover:text-white",
          isActive && "bg-[#1d2942] text-white"
        )
      }
    >
      <span className="text-[#8a92a6]">{icon}</span>
      {!isCollapsed && <span className="font-medium whitespace-nowrap">{label}</span>}
    </NavLink>
  );
};

const SidebarSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className="mb-6">
      {!isCollapsed && (
        <p className="text-xs uppercase px-3 mb-2 font-semibold tracking-wider text-[#8a92a6]">
          {title}
        </p>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const { isOpen, toggle, isCollapsed, toggleCollapse } = useSidebar();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Mobile overlay to close sidebar when clicking outside */}
      {isOpen && window.innerWidth < 1024 && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggle}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 transform transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-64",
          isOpen ? "translate-x-0" : "-translate-x-full",
          // Important: Make sure lg:translate-x-0 is applied only on large screens
          "lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar bg-[#1a2233]">
          {/* User profile section - only shown when not collapsed */}
          {!isCollapsed ? (
            <div className="px-4 py-6 text-center border-b border-[#283046]">
              <div className="mb-3 mx-auto">
                <Avatar className="h-20 w-20 mx-auto">
                  <AvatarImage src="/lovable-uploads/7ac82091-05ed-4107-9d1b-b215ff4ed940.png" alt="Montaser Hai Omar" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="text-white text-lg font-semibold">Montaser Hai Omar</h2>
              <p className="text-[#42DDCD] text-sm">Website Admin</p>
            </div>
          ) : (
            <div className="p-3 flex justify-center border-b border-[#283046]">
              <button 
                onClick={toggleCollapse}
                className="p-2 rounded-md text-gray-300 hover:bg-[#283046]"
              >
                <ChevronRight className={cn("transition-transform", !isCollapsed && "rotate-180")} size={20} />
              </button>
            </div>
          )}
          
          {/* Navigation */}
          <nav className={cn("flex-1 px-2 py-4", isCollapsed && "px-1")}>
            {!isCollapsed && (
              <SidebarItem to="/" icon={<Home size={20} />} label="Dashboard" />
            )}
            
            <SidebarSection title="Data">
              <SidebarItem to="/team" icon={<Users size={20} />} label="Manage Team" />
              <SidebarItem to="/contacts" icon={<Contact size={20} />} label="Contacts Information" />
              <SidebarItem to="/invoices" icon={<FileText size={20} />} label="Invoices Balances" />
            </SidebarSection>
            
            <SidebarSection title="Pages">
              <SidebarItem to="/profile" icon={<User size={20} />} label="Profile Form" />
              <SidebarItem to="/calendar" icon={<Calendar size={20} />} label="Calendar" />
              <SidebarItem to="/faq" icon={<HelpCircle size={20} />} label="FAQ Page" />
            </SidebarSection>
            
            <SidebarSection title="Charts">
              <SidebarItem to="/bar-chart" icon={<BarChart3 size={20} />} label="Bar Chart" />
              <SidebarItem to="/pie-chart" icon={<PieChart size={20} />} label="Pie Chart" />
              <SidebarItem to="/line-chart" icon={<LineChart size={20} />} label="Line Chart" />
            </SidebarSection>
          </nav>
          
          {/* Collapse button */}
          {!isCollapsed && (
            <div className="p-4 border-t border-[#283046]">
              <button 
                onClick={toggleCollapse}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-gray-300 hover:bg-[#1d2942] hover:text-white transition-colors"
              >
                <ChevronRight className="rotate-180" size={20} />
                <span>Collapse Sidebar</span>
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
