
import { useTheme } from "@/context/ThemeContext";
import { useSidebar } from "@/context/SidebarContext";
import { Bell, Download, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isOpen, toggle } = useSidebar();

  const isDark = theme === "dark";

  return (
    <div className={cn(
      "h-16 px-4 border-b flex items-center justify-between sticky top-0 z-20",
      isDark ? "bg-[#1a2233]" : "bg-white border-gray-200"
    )}>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggle}
          className={cn(
            "p-2 rounded-md transition-colors lg:flex",
            isDark ? "hover:bg-[#283046] text-white" : "hover:bg-gray-100 text-gray-700"
          )}
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={toggleTheme}
          className={cn(
            "p-2 rounded-md transition-colors",
            isDark ? "hover:bg-[#283046] text-white" : "hover:bg-gray-100 text-gray-700"
          )}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button 
          className={cn(
            "p-2 rounded-md transition-colors",
            isDark ? "hover:bg-[#283046] text-white" : "hover:bg-gray-100 text-gray-700"
          )}
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>
        
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-4 rounded-md flex items-center gap-1.5 text-sm transition-colors md:flex hidden"
        >
          <Download size={16} />
          <span>DOWNLOAD REPORTS</span>
        </Button>
        
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium p-2 rounded-md flex items-center md:hidden"
          aria-label="Download reports"
        >
          <Download size={16} />
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
