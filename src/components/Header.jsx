export default function Header() {
  return (
    <header className="h-24 w-full bg-zinc-800 fixed top-0 left-0">
      <div className="flex gap-8 items-center mx-auto max-w-7xl h-full py-4 px-6">
        {/* hamburger */}
        <span className="h-9 w-9"></span>
        {/* logo + name */}
        <span className="h-14 w-40"></span>
        {/* search bar */}
        <span className="h-14 w-80"></span>
        <span className="h-14 w-48 ml-auto"></span>
      </div>
    </header>
  );
}
