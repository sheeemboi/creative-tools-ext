export default function List({ tools }) {
  return (
    <ul>
      {tools.map((tool, index) => (
        <li
          className="h-8 my-1 rounded-lg flex justify-start items-center text-zinc-200 transition-all duration-200 hover:bg-zinc-600 cursor-pointer overflow-hidden"
          key={index}
        >
          <i className="h-full aspect-square bg-zinc-600 mr-1"></i>
          <span>{tool.name}</span>
        </li>
      ))}
    </ul>
  );
}
