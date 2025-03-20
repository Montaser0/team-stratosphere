
import { useTheme } from "@/context/ThemeContext";
import { useSidebar } from "@/context/SidebarContext";
import { Bell, Download, Menu, Moon, Search, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isOpen, toggle } = useSidebar();

  return (
    <div className="h-16 px-4 border-b bg-card flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggle}
          className="p-2 rounded-md hover:bg-accent transition-colors"
        >
          <Menu size={20} />
        </button>
        
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-[200px] lg:w-[300px] rounded-md border border-input bg-background pl-8 pr-4 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-accent transition-colors"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="p-2 rounded-md hover:bg-accent transition-colors">
          <Bell size={20} />
        </button>
        
        <button className="bg-primary/90 hover:bg-primary text-white font-medium py-1.5 px-3 rounded-md flex items-center gap-1.5 text-sm transition-colors">
          <Download size={16} />
          <span>Download Reports</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
