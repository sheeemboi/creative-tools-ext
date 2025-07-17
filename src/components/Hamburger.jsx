export default function Hamburger({ hamburgerClick, className }) {
  return (
    <button
      className={`flex flex-col justify-between ${className}`}
      onClick={hamburgerClick}
    >
      <span className="bg-zinc-400 w-full h-[20%]"></span>
      <span className="bg-zinc-400 w-full h-[20%]"></span>
      <span className="bg-zinc-400 w-full h-[20%]"></span>
    </button>
  );
}
