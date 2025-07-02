import SearchIcon from "../assets/search_30dp.svg";

function Hamburger({hamburgerClick}) {
  return (
    <button className="flex-col justify-between h-9 w-9 hidden md:flex" onClick={hamburgerClick}>
      <span className="bg-zinc-400 w-full h-[20%]"></span>
      <span className="bg-zinc-400 w-full h-[20%]"></span>
      <span className="bg-zinc-400 w-full h-[20%]"></span>
    </button>
  );
}

function Search() {
  return (
    <div className="relative h-14 w-80 hidden md:block">
      <div className="absolute top-0 left-0 flex justify-center items-center h-full aspect-square">
        <img src={SearchIcon} alt="Search" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="h-full w-full bg-zinc-700 p-4 pl-14 rounded-full text-2xl text-zinc-100 placeholder-zinc-400 outline-0"
      />
    </div>
  );
}

export default function Header({hamburgerClick}) {
  return (
    <>
      <header className="h-18 w-full bg-zinc-800 fixed top-0 left-0 md:h-24">
        <section className="flex gap-8 items-center mx-auto max-w-7xl h-full py-4 px-6">
          {/* hamburger */}
          <Hamburger hamburgerClick={hamburgerClick}/>
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
