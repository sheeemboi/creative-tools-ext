import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Sidebar from "./layout/Sidebar";
import BottomNav from "./layout/BottomNav";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <Header hamburgerClick={toggleSidebar} />
      <div className="flex mx-auto max-w-7xl h-screen pt-18 md:pt-24">
        <Sidebar isOpen={isOpen} />
        <MainContent />
      </div>
      <BottomNav />
    </>
  );
}
