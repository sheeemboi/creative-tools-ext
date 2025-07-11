import List from "../components/List.jsx";

export default function DesktopSidebar({ isOpen, tools }) {
  return (
    <nav
      className={`bg-zinc-800 h-[calc(100vh-6rem)] w-0 rounded-lg transition-all duration-100 overflow-y-scroll scrollbar-none md:my-6 ${
        isOpen ? "md:w-64" : "md:w-9"
      }`}
    >
      <ul
        className={`h-full min-w-60 overflow-hidden p-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <List tools={tools} />
      </ul>
    </nav>
  );
}
