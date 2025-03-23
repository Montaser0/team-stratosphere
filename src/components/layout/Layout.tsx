
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const Layout = () => {
  const { isOpen, isCollapsed } = useSidebar();
  const { theme } = useTheme();

  // Force re-render on resize to ensure correct layout
  useEffect(() => {
    const handleResize = () => {
      // This is just to trigger a re-render
      window.dispatchEvent(new CustomEvent('layout-update'));
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={cn(
      "min-h-screen",
      theme === "dark" ? "bg-[#131c32]" : "bg-white"
    )}>
      <Sidebar />
      <main
        className={cn(
          "transition-all duration-300 ease-in-out min-h-screen",
          // Apply different margins based on sidebar state
          isCollapsed ? "lg:ml-16" : "lg:ml-64",
          // Only move content when sidebar is open on mobile
          isOpen && window.innerWidth < 1024 ? (isCollapsed ? "ml-16" : "ml-64") : "ml-0"
        )}
      >
        <TopBar />
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
