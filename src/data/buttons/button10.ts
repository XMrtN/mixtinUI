export const BUTTON10 = [
  {
    title: "HTML + TailwindCSS",
    code: `<button
  class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium text-neutral-950"
>
  <div
    class="inline-flex h-12 items-center justify-center px-6 transition-transform duration-500 group-hover:-translate-y-[150%]"
  >
    Hover me
  </div>
  <div
    class="absolute inline-flex h-12 translate-y-full items-center justify-center px-6 text-neutral-50 transition-transform duration-500 group-hover:translate-y-0"
  >
    <span
      class="absolute size-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition-transform duration-500 group-hover:translate-y-0 group-hover:scale-150"
    ></span>
    <span class="relative">Hover me</span>
  </div>
</button>
`,
  },
  {
    title: "HTML + CSS",
    code: `<button id="button10">
  <div>Hover me</div>
  <div>
    <span></span>
    <span>Hover me</span>
  </div>
</button>

<style>
  #button10 {
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

  #button10 div {
    display: inline-flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }

  #button10:hover div:first-child {
    transform: translateY(-150%);
  }

  #button10 div:last-child {
    position: absolute;
    transform: translateY(100%);
    color: #fafafa;
  }

  #button10:hover div:last-child {
    transform: translateY(0);
  }

  #button10 span:first-child {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateY(100%) skewY(12deg) scaleY(0);
    background-color: #3b82f6;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }

  #button10:hover span:first-child {
    transform: translateY(0) skewY(12deg) scale(1.5);
  }

  #button10 span:last-child {
    position: relative;
  }
</style>
`,
  },
];
