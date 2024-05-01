import { useState } from "react";

const ACCORDIONS = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export default function Prueba() {
  const [selected, setSelected] = useState(props.children[0].props.label);

  const handleClick = (label) => {
    setSelected((prev) => (prev === label ? null : label));
  };

  return (
    <div className={`w-full ${props.className}`}>
      {props.children.map((item) => (
        <article
          key={item.props.label}
          className="group bg-gray-100 transition-[border-radius,margin] duration-300 first:rounded-t-xl last:rounded-b-xl has-[+[data-selected]]:mb-4 has-[+[data-selected]]:rounded-b-xl data-[selected]:rounded-xl dark:bg-gray-900 [&[data-selected]+article]:mt-4 [&[data-selected]+article]:rounded-t-xl"
          data-selected={item.props.label === selected ? "" : null}
        >
          <button
            type="button"
            className="flex w-full items-center justify-between gap-x-2 p-4 text-xl font-bold"
            onClick={() => handleClick(item.props.label)}
          >
            <span className="text-left">{item.props.label}</span>
            <span className="size-6 shrink-0 group-data-[selected]:hidden">
              +
            </span>
            <span className="hidden size-6 shrink-0 group-data-[selected]:block">
              -
            </span>
          </button>

          <div className="max-h-0 overflow-hidden px-4 transition-[max-height] duration-700 ease-[cubic-bezier(0,1,0,1)] group-data-[selected]:h-auto group-data-[selected]:max-h-[9999px] group-data-[selected]:ease-[cubic-bezier(1,0,1,0)]">
            <div className={item.props.className}>{item.props.children}</div>
          </div>
        </article>
      ))}
    </div>
  );
}
