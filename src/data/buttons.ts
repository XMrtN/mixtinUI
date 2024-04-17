import Button1 from "@/components/buttons/Button1.astro";
import Button2 from "@/components/buttons/Button2.astro";
import Button3 from "@/components/buttons/Button3.astro";
import Button4 from "@/components/buttons/Button4.astro";

export const BUTTONS = [
  {
    Component: Button1,
    codes: [
      {
        title: "HTML + TailwindCSS",
        code: `<button
  class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 font-medium text-neutral-200"
>
  <div class="px-6 transition-transform group-hover:-translate-x-[150%]">
    Hover me
  </div>
  <div
    class="absolute translate-x-[150%] px-6 transition-transform group-hover:translate-x-0"
  >
    Hover me
  </div>
</button>
`,
      },
      {
        title: "HTML + CSS",
        code: `<button class="button__container">
  <div class="button__span button__span--first">Hover me</div>
  <div class="button__span button__span--second">Hover me</div>
</button>

<style>
  .button__container {
    position: relative;
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0.375rem;
    background-color: #0a0a0a;
    font-weight: 500;
    color: #e5e5e5;
  }

  .button__span {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .button__container:hover .button__span--first {
    transform: translateX(-150%);
  }

  .button__span--second {
    position: absolute;
    transform: translateX(150%);
  }
  .button__container:hover .button__span--second {
    transform: translateX(0);
  }
</style>
`,
      },
    ],
  },
  {
    Component: Button2,
    codes: [
      {
        title: "HTML + TailwindCSS",
        code: `<button
  class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200"
>
  <div class="transition-transform group-hover:-translate-y-[150%]">
    Hover me
  </div>
  <div class="absolute translate-y-[150%] transition-transform group-hover:translate-y-0">
    Hover me
  </div>
</button>
`,
      },
      {
        title: "HTML + CSS",
        code: `<button class="button__container">
  <div class="button__span button__span--first">Hover me</div>
  <div class="button__span button__span--second">Hover me</div>
</button>

<style>
  .button__container {
    position: relative;
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0.375rem;
    background-color: #0a0a0a;
    font-weight: 500;
    color: #e5e5e5;
  }

  .button__span {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .button__container:hover .button__span--first {
    transform: translateY(-150%);
  }

  .button__span--second {
    position: absolute;
    transform: translateY(150%);
  }
  .button__container:hover .button__span--second {
    transform: translateY(0);
  }
</style>
`,
      },
    ],
  },
  {
    Component: Button3,
    codes: [
      {
        title: "HTML + TailwindCSS",
        code: `<button
  class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform active:scale-110"
>
  Click me
</button>
`,
      },
      {
        title: "HTML + CSS",
        code: `<button class="button__container">Click me</button>

<style>
  .button__container {
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background-color: #0a0a0a;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 500;
    color: #e5e5e5;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .button__container:active {
    transform: scale(1.1);
  }
</style>
`,
      },
    ],
  },
  {
    Component: Button4,
    codes: [
      {
        title: "HTML + TailwindCSS",
        code: `<button
  class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform active:scale-95"
>
  Click me
</button>
`,
      },
      {
        title: "HTML + CSS",
        code: `<button class="button__container">Click me</button>

<style>
  .button__container {
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background-color: #0a0a0a;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 500;
    color: #e5e5e5;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .button__container:active {
    transform: scale(0.95);
  }
</style>
`,
      },
    ],
  },
];
