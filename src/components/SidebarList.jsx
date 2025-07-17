import * as FaIcons from "react-icons/fa6";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";

const iconLib = {
  fa: FaIcons,
  md: MdIcons,
  pi: PiIcons,
};

export default function List({ tools }) {
  return (
    <ul>
      {tools.map((tool, index) => {
        const iconSet = iconLib[tool.library] || FaIcons;
        const IconComponent = iconSet[tool.icon] || FaIcons.FaRegQuestionCircle;
        return (
          <li
            className="h-8 my-1 rounded-lg flex justify-start items-center text-zinc-200 transition-all duration-200 hover:bg-zinc-600 cursor-pointer overflow-hidden"
            key={index}
          >
            <IconComponent className="mr-4" />

            <span>{tool.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
