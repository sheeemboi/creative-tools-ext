import Home from "../pages/Home.jsx";
import Tools from "../pages/Tools.jsx";
import Search from "../pages/Search.jsx";
import { Routes, Route } from "react-router-dom";

export default function MainContent({ tools }) {
  return (
    <main className="flex flex-col gap-13 p-6 flex-1">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/tools" element={<Tools tools={tools} />}></Route>
      </Routes>
    </main>
  );
}
