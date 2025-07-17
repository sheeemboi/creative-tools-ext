import { NavLink } from "react-router-dom";

import Hamburger from "../components/Hamburger";
import SearchBar from "../components/SearchBar";
import DarkMode from "../assets/theme/dark.svg";
import ToolTip from "../assets/tooltip.svg";
import GithubDark from "../assets/github/github-mark.svg";

export default function Header({ hamburgerClick }) {
  const UtilIcon = ({ href = "/", src, alt }) => {
    return (
      <a
        href={href}
        target="_blank"
        className="border-2 border-zinc-400 h-8 aspect-square flex rounded-full justify-center items-center md:h-10"
      >
        <img src={src} alt={alt} className="h-4 md:h-5" />
      </a>
    );
  };
  return (
    <>
      <header className="h-18 w-full bg-zinc-800 fixed top-0 left-0">
        <div className="flex gap-8 items-center mx-auto max-w-7xl h-full py-3 px-6">
          {/* hamburger */}
          <Hamburger
            hamburgerClick={hamburgerClick}
            className="h-9 aspect-square"
          />
          {/* logo + name */}
          <NavLink to="/">
            <span className="group flex items-center justify-center p-2 max-w-28 h-full border-2 border-zinc-400 rounded-2xl md:w-40 cursor-pointer hover:bg-zinc-400 hover:border-0">
              <span className="text-lg font-semibold text-zinc-400 select-none group-hover:text-zinc-800">
                gwd-tools
              </span>
            </span>
          </NavLink>
          <SearchBar />
          {/* utility section */}
          <span className="h-full flex items-center justify-between min-w-30 ml-auto md:min-w-43">
            <UtilIcon src={DarkMode} alt="Toggle dark" />
            <UtilIcon href="/" src={ToolTip} alt="Info" />
            <UtilIcon
              href="https://github.com/sheeemboi/graphic-design-tools"
              src={GithubDark}
              alt="Github"
            />
          </span>
        </div>
      </header>
    </>
  );
}
