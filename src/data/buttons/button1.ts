export const BUTTON1 = [
  {
    title: "HTML + TailwindCSS",
    code: `<button
  class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-50"
>
  <div class="transition-transform group-hover:-translate-x-[150%]">
    Hover me
  </div>
  <div class="absolute translate-x-[150%] transition-transform group-hover:translate-x-0">
    Hover me
  </div>
</button>
`,
  },
  {
    title: "HTML + CSS",
    code: `<button class="button1">
  <div class="button1__div button1__div--first">Hover me</div>
  <div class="button1__div button1__div--second">Hover me</div>
</button>

<style>
  .button1 {
    position: relative;
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0.375rem;
    background-color: #0a0a0a;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 500;
    color: #fafafa;
  }

  .button1__div {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .button1:hover .button1__div--first {
    transform: translateX(-150%);
  }

  .button1__div--second {
    position: absolute;
    transform: translateX(150%);
  }

  .button1:hover .button1__div--second {
    transform: translateX(0);
  }
</style>
`,
  },
];
