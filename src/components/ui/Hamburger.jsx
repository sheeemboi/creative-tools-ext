export default function Hamburger({ hamburgerClick, displayClass, sizeClass }) {
  return (
    <button
      className={`flex-col justify-between ${sizeClass} ${displayClass}`}
      onClick={hamburgerClick}
    >
      <span className="bg-zinc-400 w-full h-[20%]"></span>
      <span className="bg-zinc-400 w-full h-[20%]"></span>
      <span className="bg-zinc-400 w-full h-[20%]"></span>
    </button>
  );
}
