import SearchIcon from "../assets/search_30dp.svg";

export default function Search() {
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
