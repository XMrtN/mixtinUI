export const BUTTON5 = [
  {
    title: "HTML + TailwindCSS",
    code: `<button
  class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
>
  Click me
</button>
`,
  },
  {
    title: "HTML + CSS",
    code: `<button id="button5">Click me</button>

<style>
  #button5 {
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
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 300ms;
  }

  #button5:active {
    transform: translateY(-0.25rem) scaleX(0.9) scaleY(1.1);
  }
</style>
`,
  },
];
