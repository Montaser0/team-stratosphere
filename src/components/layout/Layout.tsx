
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const Layout = () => {
  const { isOpen } = useSidebar();

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
    <div className="min-h-screen bg-[#131c32]">
      <Sidebar />
      <main
        className={cn(
          "transition-all duration-300 ease-in-out min-h-screen",
          // Always apply the margin on desktop regardless of sidebar state
          "lg:ml-64",
          // Only move content when sidebar is open on mobile
          isOpen && window.innerWidth < 1024 ? "ml-64" : "ml-0"
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
