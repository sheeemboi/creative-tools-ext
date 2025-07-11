export default function Navbar({ isOpen }) {
  return (
    <nav
      className={`p-0 h-[calc(100vh-6rem)] w-0 transition-all duration-300 overflow-y-scroll scrollbar-none md:p-4 ${
        isOpen ? "md:w-72" : "md:w-18"
      }`}
    >
      <div className="bg-zinc-800 w-full h-full rounded-lg">
        <ol></ol>
      </div>
    </nav>
  );
}
