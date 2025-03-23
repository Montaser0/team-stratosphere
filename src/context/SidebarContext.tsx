
import { createContext, useContext, useState, useEffect } from "react";

interface SidebarContextProps {
  isOpen: boolean;
  isCollapsed: boolean;
  toggle: () => void;
  toggleCollapse: () => void;
  close: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Set initial state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsOpen(false);
        setIsCollapsed(false);
      } else {
        setIsOpen(true);
        setIsCollapsed(false);
      }
    };

    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  
  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };
  
  const close = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, isCollapsed, toggle, toggleCollapse, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
