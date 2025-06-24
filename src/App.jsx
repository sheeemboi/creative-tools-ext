import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
export default function App() {
  return (
    <>
      <Header />
      <div className="flex mx-auto max-w-7xl h-screen pt-18 md:pt-24">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
