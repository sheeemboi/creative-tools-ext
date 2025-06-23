import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
export default function App() {
  return (
    <>
      <Header />
      <div className="flex mx-auto max-w-7xl pt-24">
        <Nav />
        <Main />
      </div>
    </>
  );
}
