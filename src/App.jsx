import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
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
        <Main />
      </div>
      <BottomNav />
    </>
  );
}
