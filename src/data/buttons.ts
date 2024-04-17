import Button1 from "@/components/buttons/Button1.astro";
import Button2 from "@/components/buttons/Button2.astro";

export const BUTTONS = [
  {
    id: "button1",
    Component: Button1,
    reactCss: [],
    reactT: [],
    htmlCss: [],
    htmlT: {
      title: "HTML + TailwindCSS",
      code: `<button
  class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 font-medium text-neutral-200 duration-500"
>
  <div class="translate-x-0 transition px-6 group-hover:-translate-x-[150%]">
    Hover me
  </div>
  <div class="absolute translate-x-[150%] px-6 transition group-hover:translate-x-0">
    Hover me
  </div>
</button>`,
    },
  },
  {
    id: "button2",
    Component: Button2,
    reactCss: [],
    reactT: [],
    htmlCss: [],
    htmlT: {
      title: "HTML + TailwindCSS",
      code: `<button
  class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500"
>
  <div class="translate-y-0 transition group-hover:-translate-y-[150%]">
    Hover me
  </div>
  <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">
    Hover me
  </div>
</button>
`,
    },
  },
];
