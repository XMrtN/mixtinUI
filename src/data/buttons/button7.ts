export const BUTTON7 = [
  {
    title: "HTML + TailwindCSS",
    code: `<button
  class="group inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-50"
>
  Hover me
  <div
    class="w-0 translate-x-full opacity-0 transition-[width,transform,opacity,padding] duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"
  >
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
    >
      <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
      </path>
    </svg>
  </div>
</button>
`,
  },
  {
    title: "HTML + CSS",
    code: `<button class="button7">
  Hover me
  <div class="button7__icon">
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="button7__icon--svg"
    >
      <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
      </path>
    </svg>
  </div>
</button>

<style>
  .button7 {
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

  .button7__icon {
    width: 0;
    transform: translateX(100%);
    opacity: 0;
    transition-property: width, transform, opacity, padding;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }

  .button7:hover .button7__icon {
    width: 1.25rem;
    transform: translateX(0);
    padding-left: 0.25rem;
    opacity: 1;
  }

  .button7__icon--svg {
    width: 1.25rem;
    height: 1.25rem;
  }
</style>
`,
  },
];
