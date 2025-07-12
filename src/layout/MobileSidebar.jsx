import Hamburger from "../components/ui/Hamburger";
import List from "../components/List";

export default function MobileSidebar({ hamburgerClick, isOpen, tools }) {
  return (
    <aside
      className={`fixed flex h-screen md:hidden transition-all duration-300 z-10 top-0 left-0 overflow-hidden ${
        isOpen ? "w-full" : "w-0"
      }`}
    >
      <div className="flex-1 bg-zinc-900 p-4">
        <List tools={tools} />
      </div>
      <div className="w-fit p-4 bg-zinc-800/90" onClick={hamburgerClick}>
        <Hamburger className="mr-6 w-9 aspect-square" />
      </div>
    </aside>
  );
}
