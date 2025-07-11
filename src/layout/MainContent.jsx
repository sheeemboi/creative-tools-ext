import Home from "../pages/Home.jsx";
import Test from "../pages/Test.jsx";
import { Routes, Route } from "react-router-dom";

export default function MainContent() {
  return (
    <main className="flex flex-col gap-13 p-6 flex-1">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </main>
  );
}
