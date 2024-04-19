export const BUTTON13 = [
  {
    title: "HTML + TailwindCSS",
    code: `<button
  class="inline-flex h-12 items-center justify-center rounded-md border border-neutral-200 bg-white px-6 font-medium text-neutral-600 shadow-[0_4px_1px] shadow-neutral-400 transition-[transform,box-shadow] active:translate-y-0.5 active:shadow-[0_0] active:shadow-neutral-400"
>
  Click me
</button>
`,
  },
  {
    title: "HTML + CSS",
    code: `<button class="button">
  Click me
</button>

<style>
  .button {
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    border-width: 1px;
    border-color: #e5e5e5;
    background-color: #fff;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 500;
    color: #525252;
    box-shadow: 0 4px 1px #a3a3a3;
    transition-property: transform, box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .button:active {
    transform: translateY(2px);
    box-shadow: 0 0 #a3a3a3;
  }
</style>
`,
  },
];
