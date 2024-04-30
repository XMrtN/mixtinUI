export const BUTTON14 = [
  {
    title: "HTML + TailwindCSS",
    code: `<button
  class="group inline-flex h-12 items-center justify-center rounded-md border border-neutral-100 bg-white px-6 font-medium text-neutral-600 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]"
>
  <span class="group-active:translate-y-px">
    Click me
  </span>
</button>
`,
  },
  {
    title: "HTML + CSS",
    code: `<button class="button14">
  <span class="button14__span">Click me</span>
</button>

<style>
  .button14 {
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    border-width: 1px;
    border-color: #f5f5f5;
    background-color: #fff;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 500;
    color: #525252;
    box-shadow:
      0 -1px 0 0 #d4d4d8 inset,
      0 0 0 1px #f4f4f5 inset,
      0 0.5px 0 1.5px #fff inset;
  }

  .button14:active {
    box-shadow:
      -1px 0 1px 0 #e4e4e7 inset,
      1px 0 1px 0 #e4e4e7 inset,
      0 0.125rem 1px 0 #d4d4d8 inset;
  }

  .button14:active .button14__span {
    transform: translateY(1px);
  }
</style>
`,
  },
];
