
import { useTheme } from "@/context/ThemeContext";
import { useSidebar } from "@/context/SidebarContext";
import { Bell, Download, Menu, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isOpen, toggle } = useSidebar();

  return (
    <div className="h-16 px-4 border-b bg-[#1a2233] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggle}
          className="p-2 rounded-md hover:bg-[#283046] transition-colors text-white"
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-[#283046] transition-colors text-white"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="p-2 rounded-md hover:bg-[#283046] transition-colors text-white">
          <Bell size={20} />
        </button>
        
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-4 rounded-md flex items-center gap-1.5 text-sm transition-colors"
        >
          <Download size={16} />
          <span>DOWNLOAD REPORTS</span>
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
