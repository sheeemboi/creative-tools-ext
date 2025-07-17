import SearchIcon from "../assets/search.svg";

export default function Search() {
  return (
    <div className="relative h-full w-80 hidden md:block">
      <div className="absolute top-0 left-0 flex justify-center items-center h-full aspect-square">
        <img src={SearchIcon} alt="Search" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="h-full w-full bg-zinc-700 p-4 pl-12 rounded-full text-xl text-zinc-100 placeholder-zinc-400 outline-0"
        disabled
      />
    </div>
  );
}
