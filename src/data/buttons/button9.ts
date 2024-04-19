export const BUTTON9 = [
  {
    title: "HTML + TailwindCSS",
    code: `<button
  class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium text-neutral-950"
>
  <div
    class="inline-flex h-12 items-center justify-center px-6 transition-transform group-hover:-translate-x-[150%]"
  >
    Hover me
  </div>
  <div
    class="absolute inline-flex h-12 translate-x-full items-center justify-center bg-blue-500 px-6 text-neutral-50 transition-transform duration-300 group-hover:translate-x-0"
  >
    Hover me
  </div>
</button>
`,
  },
  {
    title: "HTML + CSS",
    code: `<button class="button">
  <div class="button__div button__div--first">Hover me</div>
  <div class="button__div button__div--second">Hover me</div>
</button>

<style>
  .button {
    position: relative;
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0.375rem;
    border-width: 1px;
    border-color: #e5e5e5;
    background-color: #fff;
    font-weight: 500;
    color: #0a0a0a;
  }

  .button__div {
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .button:hover .button__div--first {
    transform: translateX(-150%);
  }

  .button__div--second {
    position: absolute;
    transform: translateX(100%);
    background-color: #3b82f6;
    color: #fafafa;
    transition-duration: 300ms;
  }

  .button:hover .button__div--second {
    transform: translateX(0);
  }
</style>
`,
  },
];
