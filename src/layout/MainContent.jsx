import Home from "../pages/Home.jsx";
import Search from "../pages/Search.jsx";
import { Routes, Route } from "react-router-dom";

export default function MainContent({ tools }) {
  return (
    <main className="flex flex-col gap-13 p-6 flex-1">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </main>
  );
}
  