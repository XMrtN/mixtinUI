export const BUTTON11 = [
  {
    title: "HTML + TailwindCSS",
    code: `<button
  class="relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white px-6 font-medium text-neutral-600 shadow-[5px_5px] shadow-neutral-600 transition-[transform,box-shadow] duration-100 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0_0] active:shadow-neutral-600"
>
  Click me
</button>
`,
  },
  {
    title: "HTML + CSS",
    code: `<button id="button11">
  Click me
</button>

<style>
  #button11 {
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
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 500;
    color: #525252;
    box-shadow: 5px 5px #525252;
    transition-property: transform, box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 100ms;
  }

  #button11:active {
    transform: translate(3px, 3px);
    box-shadow: 0 0 #525252;
  }
</style>
`,
  },
];
