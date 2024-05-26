export const BUTTON4 = [
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
    code: `<button id="button4">Click me</button>

<style>
  #button4 {
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

  #button4:active {
    transform: scale(0.95);
  }
</style>
`,
  },
];
