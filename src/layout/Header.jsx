import Hamburger from "../components/ui/Hamburger";
import Search from "../components/ui/Search";

export default function Header({ hamburgerClick }) {
  return (
    <>
      <header className="h-18 w-full bg-zinc-800 fixed top-0 left-0 md:h-24">
        <section className="flex gap-8 items-center mx-auto max-w-7xl h-full py-4 px-6">
          {/* hamburger */}
          <Hamburger
            hamburgerClick={hamburgerClick}
            displayClass="hidden md:flex"
            sizeClass="h-9 w-9"
          />
          {/* logo + name */}
          <span className="h-full w-36 bg-zinc-400 rounded-lg md:w-40"></span>
          {/* search bar */}
          <Search />
          {/* other links */}
          <span className="h-full w-32 bg-zinc-600 rounded-md ml-auto md:w-48"></span>
        </section>
      </header>
    </>
  );
}
