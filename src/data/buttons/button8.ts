export const BUTTON8 = [
  {
    title: "HTML + TailwindCSS",
    code: `<button
  class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium text-neutral-950"
>
  <div
    class="inline-flex h-12 items-center justify-center px-6 transition-transform group-hover:-translate-y-[150%]"
  >
    Hover me
  </div>
  <div
    class="absolute inline-flex h-12 translate-y-full items-center justify-center bg-blue-500 px-6 text-neutral-50 transition-transform duration-300 group-hover:translate-y-0"
  >
    Hover me
  </div>
</button>
`,
  },
  {
    title: "HTML + CSS",
    code: `<button id="button8">
  <div>Hover me</div>
  <div>Hover me</div>
</button>

<style>
  #button8 {
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

  #button8 div {
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

  #button8:hover div:first-child {
    transform: translateY(-150%);
  }

  #button8 div:last-child {
    position: absolute;
    transform: translateY(100%);
    background-color: #3b82f6;
    color: #fafafa;
    transition-duration: 300ms;
  }

  #button8:hover div:last-child {
    transform: translateY(0);
  }
</style>
`,
  },
];
