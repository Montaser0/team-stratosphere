
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

const Layout = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-[#131c32]">
      <Sidebar />
      <main
        className={cn(
          "transition-all duration-300 ease-in-out",
          isOpen ? "lg:ml-64" : "ml-0"
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
