export default function Header() {
  return (
    <header className="h-24 w-full bg-zinc-800 fixed top-0 left-0">
      <div className="flex gap-8 items-center mx-auto max-w-7xl h-full py-4 px-6">
        {/* hamburger */}
        <span className="h-9 w-9 bg-zinc-400 rounded-lg"></span>
        {/* logo + name */}
        <span className="h-14 w-40 bg-zinc-400 rounded-lg"></span>
        {/* search bar */}
        <span className="h-14 w-80 bg-zinc-600 rounded-full"></span>
        {/* other links */}
        <span className="h-14 w-48 ml-auto"></span>
      </div>
    </header>
  );
}
