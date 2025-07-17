export default function Cards({ tools }) {
  console.log(tools);
  return (
    <>
      {tools.map((tool, index) => (
        <li
          key={index}
          className="flex flex-col h-40 w-full bg-zinc-800 rounded-lg p-4 mb-4 overflow-hidden text-zinc-400 sm:w-[48%] lg:w-[24%]"
        >
          <div className="flex-1"></div>
          <div className="flex-1 min-h-[50%]">
            <h3>{tool.name}</h3>
            <p className="overflow-hidden">{tool.desc}</p>
          </div>
        </li>
      ))}
    </>
  );
}
