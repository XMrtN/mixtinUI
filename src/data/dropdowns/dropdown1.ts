export const DROPDOWN1 = [
  {
    title: "HTML + TailwindCSS + JS",
    code: `<div class="relative z-[999]">
  <button
    id="toggler1"
    class="relative z-10 inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform active:scale-95"
  >
    Click me
  </button>

  <section
    id="menu1"
    class="pointer-events-none absolute left-0 top-14 z-10 origin-top-left scale-50 select-none rounded-md bg-neutral-950 px-4 py-3 text-neutral-50 opacity-0 transition-[transform,opacity] duration-300"
  >
    Hello world!
  </section>

  <section
    id="overlay1"
    class="pointer-events-none fixed left-0 top-0 h-[1000vh] w-[200%]"
  >
  </section>
</div>

<script>
  const toggler1 = document.querySelector("#toggler1");
  const menu1 = document.querySelector("#menu1");
  const overlay1 = document.querySelector("#overlay1");

  toggler1.onclick = function () {
    menu1.classList.toggle("pointer-events-none");
    menu1.classList.toggle("scale-50");
    menu1.classList.toggle("select-none");
    menu1.classList.toggle("opacity-0");
    overlay1.classList.toggle("pointer-events-none");
  };

  overlay1.onclick = function () {
    menu1.classList.add("pointer-events-none");
    menu1.classList.add("scale-50");
    menu1.classList.add("select-none");
    menu1.classList.add("opacity-0");
    overlay1.classList.add("pointer-events-none");
  };
</script>
`,
  },
  {
    title: "HTML + CSS + JS",
    code: `<div id="dropdown1">
  <button id="toggler1">Click me</button>
  <section id="menu1">Hello world!</section>
  <section id="overlay1"></section>
</div>

<style>
  #dropdown1 {
    position: relative;
    z-index: 999;
  }
  #toggler1 {
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background-color: #0a0a0a;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 500;
    color: #fafafa;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  #toggler1:active {
    transform: scale(0.95);
  }

  #menu1 {
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 3.5rem;
    z-index: 10;
    transform-origin: top left;
    transform: scale(0.5);
    user-select: none;
    border-radius: 6px;
    background-color: #0a0a0a;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #fafafa;
    opacity: 0;
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  #overlay1 {
    pointer-events: none;
    position: fixed;
    left: 0;
    top: 0;
    height: 1000vh;
    width: 200%;
  }
</style>

<script>
  const toggler1 = document.querySelector("#toggler1");
  const menu1 = document.querySelector("#menu1");
  const overlay1 = document.querySelector("#overlay1");

  toggler1.onclick = function () {
    menu1.setAttribute(
      "style",
      "pointer-events: auto; transform: scale(1); user-select: auto; opacity: 1;"
    );
    overlay1.setAttribute("style", "pointer-events: auto;");
  };

  overlay1.onclick = function () {
    menu1.removeAttribute("style");
    overlay1.removeAttribute("style");
  };
</script>
`,
  },
  {
    title: "React + TailwindCSS",
    code: `import { useState } from "react";

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
        className={\`absolute left-0 top-14 z-10 origin-top-left rounded-md bg-neutral-950 px-4 py-3 text-neutral-50 transition-[transform,opacity] duration-300 \${!open ? "pointer-events-none scale-50 select-none opacity-0" : ""}\`}
      >
        Hello world!
      </section>

      <section
        className={\`fixed left-0 top-0 h-[1000vh] w-[200%] \${!open ? "pointer-events-none" : ""}\`}
        onClick={() => setOpen(false)}
      />
    </div>
  );
}
`,
  },
];
