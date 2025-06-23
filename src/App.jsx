import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <>
      <Header />
      <div className="flex mx-auto max-w-7xl mt-24">
        <Navbar />
        <MainContent />
      </div>
    </>
  );
}
