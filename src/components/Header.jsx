function Hamburger() {
  return (
    <span className="h-9 w-9 bg-zinc-400 rounded-lg hidden md:block"></span>
  );
}

function Search() {
  return (
    <span className="h-14 w-80 bg-zinc-600 rounded-full hidden md:block"></span>
  );
}

export default function Header() {
  return (
    <>
      <header className="h-18 w-full bg-zinc-800 fixed top-0 left-0 md:h-24">
        <section className="flex gap-8 items-center mx-auto max-w-7xl h-full py-4 px-6">
          {/* hamburger */}
          <Hamburger />
          {/* logo + name */}
          <span className="h-full w-36 bg-zinc-400 rounded-lg md:w-40"></span>
          {/* search bar */}
          <Search />
          {/* other links */}
          <span className="h-full w-32 bg-zinc-600 rounded-md ml-auto md:w-48"></span>
        </section>
      </header>
      <section className="flex justify-between items-center h-18 w-full px-6 bg-zinc-800 fixed bottom-0 left-0 md:hidden">
        <div className="flex justify-center items-center h-full w-18 rounded-lg">
          <span className="bg-zinc-400 h-8 w-8"></span>
        </div>
        <div className="flex justify-center items-center h-full w-18 rounded-lg">
          <span className="bg-zinc-400 h-8 w-8"></span>
        </div>
        <div className="flex justify-center items-center h-full w-18 rounded-lg">
          <span className="bg-zinc-400 h-8 w-8"></span>
        </div>
      </section>
    </>
  );
}
