import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import DesktopSidebar from "./layout/DesktopSidebar";
import BottomNav from "./layout/BottomNav";
import { useEffect, useState } from "react";
import MobileSidebar from "./layout/MobileSidebar";

// hook
import { useMobileView } from "./hooks/useMobileView";

// custom hook to fetch, load, and return tools data
function useTools() {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch("data/tools.json");
        const data = await response.json();
        setTools(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTools();
  }, []);

  return tools;
}

export default function App() {
  const tools = useTools();
  const isMobile = useMobileView();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile]);

  return (
    <>
      <Header hamburgerClick={toggleSidebar} />
      <MobileSidebar
        hamburgerClick={toggleSidebar}
        isOpen={isOpen}
        tools={tools}
      />
      <div className="flex mx-auto max-w-7xl h-screen pt-18 md:pt-24 md:pl-6">
        <DesktopSidebar isOpen={isOpen} tools={tools} />
        <MainContent tools={tools} />
      </div>
      <BottomNav />
      
    </>
  );
}
