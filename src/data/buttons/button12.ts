export const BUTTON12 = [
  {
    title: "HTML + TailwindCSS",
    code: `<button class="group relative">
  <div
    class="inline-flex h-12 items-center justify-center rounded-md border border-neutral-200 bg-white px-6 font-medium text-neutral-600 transition-[transform,box-shadow] duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0"
  >
    Hover me
  </div>
  <div
    class="absolute inset-0 size-full rounded-md transition-[transform,box-shadow] duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:shadow-[5px_5px_#a3a3a3,10px_10px_#a3a3a342,15px_15px_#a3a3a348] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"
  ></div>
</button>
`,
  },
  {
    title: "HTML + CSS",
    code: `<button class="button">
  <div class="button__div button__div--first">Hover me</div>
  <div class="button__div button__div--second"></div>
</button>

<style>
  .button {
    position: relative;
  }

  .button__div {
    border-radius: 0.375rem;
    transition-property: transform, box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  .button:hover .button__div {
    transform: translate(-0.75rem, -0.75rem);
  }
  
  .button:active .button__div {
    transform: translate(0, 0);
  }

  .button__div--first {
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #e5e5e5;
    background-color: #fff;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 500;
    color: #525252;
  }
  
  .button__div--second {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .button:hover .button__div--second {
    box-shadow: 5px 5px #a3a3a3, 10px 10px #a3a3a342, 15px 15px #a3a3a348;
  }

  .button:active .button__div--second {
    box-shadow: none;
  }
</style>
`,
  },
];
