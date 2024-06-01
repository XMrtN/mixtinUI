import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-[999]">
      <button
        className="relative z-10 inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform active:scale-95"
        onClick={() => setOpen(!open)}
      >
        Click me
      </button>

      <section
        className={`absolute left-0 top-14 z-10 origin-top-left rounded-md bg-neutral-950 px-4 py-3 text-neutral-50 transition-[transform,opacity] duration-300 ${!open ? "pointer-events-none scale-50 select-none opacity-0" : ""}`}
      >
        Hello world!
      </section>

      <section
        className={`fixed left-0 top-0 h-[1000vh] w-[200%] ${!open ? "pointer-events-none" : ""}`}
        onClick={() => setOpen(false)}
      />
    </div>
  );
}
