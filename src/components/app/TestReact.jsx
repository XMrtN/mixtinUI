import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select an item");
  const toggler3 = useRef(null);
  const menu3 = useRef(null);

  const items = [
    {
      label: "HTML",
    },
    {
      label: "CSS",
    },
    {
      label: "JavaScript",
    },
  ];

  useEffect(() => {
    const handler = (e) => {
      if (!menu3.current.contains(e.target) && e.target !== toggler3.current) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <section className="relative m-8 min-w-60">
      <header
        ref={toggler3}
        role="button"
        className={`flex items-center justify-between rounded-xl bg-neutral-900 p-4 text-white transition-shadow hover:bg-neutral-800 ${open ? "ring ring-white" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selected}</span>
        <div
          className={`size-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white ${open ? "rotate-180" : ""}`}
        />
      </header>

      <ul
        ref={menu3}
        className={`absolute left-1/2 top-16 z-10 w-full -translate-x-1/2 list-none rounded-xl bg-neutral-900 px-2 py-1 text-neutral-300 shadow-xl ${open ? "" : "hidden"}`}
      >
        {items.map(({ label }) => (
          <li
            key={label}
            role="button"
            className={`my-1 rounded-md px-2 py-3 hover:bg-neutral-800/50 ${selected === label ? "bg-neutral-800" : ""}`}
            onClick={() => {
              setSelected(label);
              setOpen(false);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
