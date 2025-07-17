import * as FaIcons from "react-icons/fa6";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";

const iconLib = {
  fa: FaIcons,
  md: MdIcons,
  pi: PiIcons,
};

export default function Cards({ tools }) {
  return (
    <>
      {tools.map((tool, index) => {
        const iconSet = iconLib[tool.library] || FaIcons;
        const IconComponent = iconSet[tool.icon] || FaIcons.FaRegQuestionCircle;
        return (
          <li
            key={index}
            className="flex flex-col h-40 w-full bg-zinc-800 rounded-lg p-4 mb-4 overflow-hidden text-zinc-400 sm:w-[48%] lg:w-[24%]"
          >
            <IconComponent className="flex-1 w-6" />

            <div className="flex-1 min-h-[50%]">
              <h3>{tool.name}</h3>
              <p className="overflow-hidden">{tool.desc}</p>
            </div>
          </li>
        );
      })}
    </>
  );
}
