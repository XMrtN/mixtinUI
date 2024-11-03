import {
  Accordions,
  Breadcrumbs,
  Buttons,
  Carousels,
  db,
  Dropdowns,
  Tabs,
} from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Accordions).values([
    {
      id: 1,
      tailwindCode: `<section id="accordion1" class="w-full max-w-lg">
  <details name="accordion1" class="group border-b border-current" open>
    <summary
      role="button"
      class="flex items-center justify-between p-4 font-medium"
    >
      Accordion Item 1
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-6 group-[[open]]:rotate-180"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 9l6 6l6 -6"></path>
      </svg>
    </summary>
    <p class="p-4 pt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>

  <details name="accordion1" class="group border-b border-current">
    <summary
      role="button"
      class="flex items-center justify-between p-4 font-medium"
    >
      Accordion Item 2
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-6 group-[[open]]:rotate-180"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 9l6 6l6 -6"></path>
      </svg>
    </summary>
    <p class="p-4 pt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>

  <details name="accordion1" class="group border-b border-current">
    <summary
      role="button"
      class="flex items-center justify-between p-4 font-medium"
    >
      Accordion Item 3
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-6 group-[[open]]:rotate-180"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 9l6 6l6 -6"></path>
      </svg>
    </summary>
    <p class="p-4 pt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>
</section>
`,
      cssCode: `<section id="accordion1">
  <details name="accordion1" open>
    <summary role="button">
      Accordion Item 1
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 9l6 6l6 -6"></path>
      </svg>
    </summary>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>

  <details name="accordion1">
    <summary role="button">
      Accordion Item 2
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 9l6 6l6 -6"></path>
      </svg>
    </summary>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>

  <details name="accordion1">
    <summary role="button">
      Accordion Item 3
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 9l6 6l6 -6"></path>
      </svg>
    </summary>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>
</section>

<style>
  #accordion1 {
    width: 100%;
    max-width: 32rem;
  }

  #accordion1 details {
    border-bottom-width: 1px;
    border-color: currentColor;
  }

  #accordion1 details summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-weight: 500;
  }

  #accordion1 details summary svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  #accordion1 details[open] summary svg {
    transform: rotate(180deg);
  }

  #accordion1 details p {
    padding: 1rem;
    padding-top: 0.5rem;
  }
</style>
`,
      reactCode: `import { createContext, useContext, useEffect, useRef, useState } from "react";

const AccordionContext = createContext();

export default function App() {
  return (
    <Accordion className="max-w-lg">
      <AccordionItem value="1" trigger="Accordion Item 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        accusantium deleniti tempore libero sed nobis sit eos ratione maxime
        minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati,
        culpa nihil.
      </AccordionItem>
      <AccordionItem value="2" trigger="Accordion Item 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        accusantium deleniti tempore libero sed nobis sit eos ratione maxime
        minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati,
        culpa nihil.
      </AccordionItem>
      <AccordionItem value="3" trigger="Accordion Item 3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        accusantium deleniti tempore libero sed nobis sit eos ratione maxime
        minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati,
        culpa nihil.
      </AccordionItem>
    </Accordion>
  );
}

function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext);
  const ref = useRef(null);
  const open = selected === value;

  return (
    <li className="border-b border-current" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex items-center justify-between p-4 font-medium"
      >
        {trigger}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`size-6 transition-transform \${open ? "rotate-180" : ""}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-4 pt-2" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
`,
    },
    {
      id: 2,
      tailwindCode: `<section id="accordion2" class="w-full max-w-lg">
  <details
    name="accordion2"
    class="group bg-neutral-800 text-white first:rounded-t-xl last:rounded-b-xl has-[+[open]]:mb-4 has-[+[open]]:rounded-b-xl [&[open]+&]:mt-4 [&[open]+&]:rounded-t-xl [&[open]]:rounded-xl"
    open
  >
    <summary
      role="button"
      class="flex items-center justify-between p-4 font-medium"
    >
      Accordion Item 1
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-6 group-[[open]]:hidden"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path><path d="M5 12l14 0"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="hidden size-6 group-[[open]]:block"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </summary>
    <p class="p-4 pt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>

  <details
    name="accordion2"
    class="group bg-neutral-800 text-white first:rounded-t-xl last:rounded-b-xl has-[+[open]]:mb-4 has-[+[open]]:rounded-b-xl [&[open]+&]:mt-4 [&[open]+&]:rounded-t-xl [&[open]]:rounded-xl"
  >
    <summary
      role="button"
      class="flex items-center justify-between p-4 font-medium"
    >
      Accordion Item 2
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-6 group-[[open]]:hidden"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path><path d="M5 12l14 0"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="hidden size-6 group-[[open]]:block"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </summary>
    <p class="p-4 pt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>

  <details
    name="accordion2"
    class="group bg-neutral-800 text-white first:rounded-t-xl last:rounded-b-xl has-[+[open]]:mb-4 has-[+[open]]:rounded-b-xl [&[open]+&]:mt-4 [&[open]+&]:rounded-t-xl [&[open]]:rounded-xl"
  >
    <summary
      role="button"
      class="flex items-center justify-between p-4 font-medium"
    >
      Accordion Item 3
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-6 group-[[open]]:hidden"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path><path d="M5 12l14 0"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="hidden size-6 group-[[open]]:block"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </summary>
    <p class="p-4 pt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>
</section>
`,
      cssCode: `<section id="accordion2">
  <details name="accordion2" open>
    <summary role="button">
      Accordion Item 1
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path><path d="M5 12l14 0"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </summary>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>

  <details name="accordion2">
    <summary role="button">
      Accordion Item 2
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path><path d="M5 12l14 0"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </summary>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>

  <details name="accordion2">
    <summary role="button">
      Accordion Item 3
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path><path d="M5 12l14 0"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </summary>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      accusantium deleniti tempore libero sed nobis sit eos ratione maxime
      minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati, culpa
      nihil.
    </p>
  </details>
</section>

<style>
  #accordion2 {
    width: 100%;
    max-width: 32rem;
  }

  #accordion2 details {
    background: rgb(38 38 38);
    color: #fff;
  }

  #accordion2 details:first-child {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }

  #accordion2 details:last-child {
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }

  #accordion2 details:has(+ [open]) {
    margin-bottom: 1rem;
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }

  #accordion2 details[open] + details {
    margin-top: 1rem;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }

  #accordion2 details[open] {
    border-radius: 0.75rem;
  }

  #accordion2 details summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-weight: 500;
  }

  #accordion2 details summary svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  #accordion2 details[open] summary svg:first-child {
    display: none;
  }

  #accordion2 details summary svg:last-child {
    display: none;
  }

  #accordion2 details[open] summary svg:last-child {
    display: block;
  }

  #accordion2 details p {
    padding: 1rem;
    padding-top: 0.5rem;
  }
</style>
`,
      reactCode: `import { createContext, useContext, useEffect, useRef, useState } from "react";

const AccordionContext = createContext();

export default function App() {
  return (
    <Accordion className="max-w-lg">
      <AccordionItem value="1" trigger="Accordion Item 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        accusantium deleniti tempore libero sed nobis sit eos ratione maxime
        minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati,
        culpa nihil.
      </AccordionItem>
      <AccordionItem value="2" trigger="Accordion Item 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        accusantium deleniti tempore libero sed nobis sit eos ratione maxime
        minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati,
        culpa nihil.
      </AccordionItem>
      <AccordionItem value="3" trigger="Accordion Item 3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        accusantium deleniti tempore libero sed nobis sit eos ratione maxime
        minima earum, adipisci at incidunt eligendi, unde neque! Obcaecati,
        culpa nihil.
      </AccordionItem>
    </Accordion>
  );
}

function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext);
  const ref = useRef(null);
  const open = selected === value;

  return (
    <li
      className="bg-neutral-800 text-white transition-[border-radius,margin] first:rounded-t-xl last:rounded-b-xl has-[+[data-open]]:mb-4 has-[+[data-open]]:rounded-b-xl data-[open]:rounded-xl [&[data-open]+&]:mt-4 [&[data-open]+&]:rounded-t-xl"
      data-open={open ? "" : null}
      {...props}
    >
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex items-center justify-between p-4 font-medium"
      >
        {trigger}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`size-6 \${open ? "hidden" : ""}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 5l0 14"></path>
          <path d="M5 12l14 0"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`size-6 \${open ? "" : "hidden"}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l14 0"></path>
        </svg>
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-4 pt-2" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
`,
    },
    {
      id: 3,
      tailwindCode: `<section
  id="accordion3"
  class="flex aspect-[5/4] size-full items-center justify-center gap-2 max-md:flex-col md:aspect-video"
>
  <article
    role="button"
    class="group flex size-full flex-1 items-end overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-300 data-[open]:flex-[10]"
    style="background-image: url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
    data-open
  >
    <div
      class="w-full flex-col bg-gradient-to-b from-transparent to-black/80 px-6 py-8 text-white opacity-0 transition-opacity duration-300 group-[[data-open]]:opacity-100"
    >
      <h3
        class="-translate-x-4 translate-y-4 text-7xl font-bold opacity-0 transition-all duration-300 group-[[data-open]]:translate-x-0 group-[[data-open]]:translate-y-0 group-[[data-open]]:opacity-100 group-[[data-open]]:delay-300"
      >
        01
      </h3>
      <p
        class="-translate-x-4 translate-y-4 text-2xl opacity-0 transition-all duration-300 group-[[data-open]]:translate-x-0 group-[[data-open]]:translate-y-0 group-[[data-open]]:opacity-100 group-[[data-open]]:delay-500"
      >
        Lorem ipsum dolor.
      </p>
    </div>
  </article>

  <article
    role="button"
    class="group flex size-full flex-1 items-end overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-300 data-[open]:flex-[10]"
    style="background-image: url('https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
  >
    <div
      class="w-full flex-col bg-gradient-to-b from-transparent to-black/80 px-6 py-8 text-white opacity-0 transition-opacity duration-300 group-[[data-open]]:opacity-100"
    >
      <h3
        class="-translate-x-4 translate-y-4 text-7xl font-bold opacity-0 transition-all duration-300 group-[[data-open]]:translate-x-0 group-[[data-open]]:translate-y-0 group-[[data-open]]:opacity-100 group-[[data-open]]:delay-300"
      >
        02
      </h3>
      <p
        class="-translate-x-4 translate-y-4 text-2xl opacity-0 transition-all duration-300 group-[[data-open]]:translate-x-0 group-[[data-open]]:translate-y-0 group-[[data-open]]:opacity-100 group-[[data-open]]:delay-500"
      >
        Lorem ipsum dolor.
      </p>
    </div>
  </article>

  <article
    role="button"
    class="group flex size-full flex-1 items-end overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-300 data-[open]:flex-[10]"
    style="background-image: url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
  >
    <div
      class="w-full flex-col bg-gradient-to-b from-transparent to-black/80 px-6 py-8 text-white opacity-0 transition-opacity duration-300 group-[[data-open]]:opacity-100"
    >
      <h3
        class="-translate-x-4 translate-y-4 text-7xl font-bold opacity-0 transition-all duration-300 group-[[data-open]]:translate-x-0 group-[[data-open]]:translate-y-0 group-[[data-open]]:opacity-100 group-[[data-open]]:delay-300"
      >
        03
      </h3>
      <p
        class="-translate-x-4 translate-y-4 text-2xl opacity-0 transition-all duration-300 group-[[data-open]]:translate-x-0 group-[[data-open]]:translate-y-0 group-[[data-open]]:opacity-100 group-[[data-open]]:delay-500"
      >
        Lorem ipsum dolor.
      </p>
    </div>
  </article>

  <article
    role="button"
    class="group flex size-full flex-1 items-end overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-300 data-[open]:flex-[10]"
    style="background-image: url('https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg');"
  >
    <div
      class="w-full flex-col bg-gradient-to-b from-transparent to-black/80 px-6 py-8 text-white opacity-0 transition-opacity duration-300 group-[[data-open]]:opacity-100"
    >
      <h3
        class="-translate-x-4 translate-y-4 text-7xl font-bold opacity-0 transition-all duration-300 group-[[data-open]]:translate-x-0 group-[[data-open]]:translate-y-0 group-[[data-open]]:opacity-100 group-[[data-open]]:delay-300"
      >
        04
      </h3>
      <p
        class="-translate-x-4 translate-y-4 text-2xl opacity-0 transition-all duration-300 group-[[data-open]]:translate-x-0 group-[[data-open]]:translate-y-0 group-[[data-open]]:opacity-100 group-[[data-open]]:delay-500"
      >
        Lorem ipsum dolor.
      </p>
    </div>
  </article>

  <article
    role="button"
    class="group flex size-full flex-1 items-end overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-300 data-[open]:flex-[10]"
    style="background-image: url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
  >
    <div
      class="w-full bg-gradient-to-b from-transparent to-black/80 px-6 py-8 text-white opacity-0 transition-opacity duration-300 group-[[data-open]]:opacity-100"
    >
      <h3
        class="-translate-x-4 translate-y-4 text-7xl font-bold opacity-0 transition-all duration-300 group-[[data-open]]:translate-x-0 group-[[data-open]]:translate-y-0 group-[[data-open]]:opacity-100 group-[[data-open]]:delay-300"
      >
        05
      </h3>
      <p
        class="-translate-x-4 translate-y-4 text-2xl opacity-0 transition-all duration-300 group-[[data-open]]:translate-x-0 group-[[data-open]]:translate-y-0 group-[[data-open]]:opacity-100 group-[[data-open]]:delay-500"
      >
        Lorem ipsum dolor.
      </p>
    </div>
  </article>
</section>

<script>
  const slides = document.querySelectorAll("#accordion3 article");

  slides.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();

      const activeElement = document.querySelector(
        "#accordion3 article[data-open]"
      );

      activeElement?.removeAttribute("data-open");

      const target = event.currentTarget;

      target.setAttribute("data-open", "");
    });
  });
</script>
`,
      cssCode: `<section id="accordion3">
  <article
    role="button"
    style="background-image: url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
    data-open
  >
    <div>
      <h3>01</h3>
      <p>Lorem ipsum dolor.</p>
    </div>
  </article>

  <article
    role="button"
    style="background-image: url('https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
  >
    <div>
      <h3>02</h3>
      <p>Lorem ipsum dolor.</p>
    </div>
  </article>

  <article
    role="button"
    style="background-image: url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
  >
    <div>
      <h3>03</h3>
      <p>Lorem ipsum dolor.</p>
    </div>
  </article>

  <article
    role="button"
    style="background-image: url('https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg');"
  >
    <div>
      <h3>04</h3>
      <p>Lorem ipsum dolor.</p>
    </div>
  </article>

  <article
    role="button"
    style="background-image: url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
  >
    <div>
      <h3>05</h3>
      <p>Lorem ipsum dolor.</p>
    </div>
  </article>
</section>

<style>
  #accordion3 {
    display: flex;
    aspect-ratio: 5 / 4;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  #accordion3 article {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1 1 0%;
    align-items: flex-end;
    overflow: hidden;
    border-radius: 0.75rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  #accordion3 article[data-open] {
    flex: 10;
  }

  #accordion3 article div {
    width: 100%;
    background: linear-gradient(to bottom, transparent, rgb(0 0 0 / 0.8));
    padding: 2rem 1.5rem;
    color: #fff;
    opacity: 0;
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  #accordion3 article[data-open] div {
    opacity: 1;
  }

  #accordion3 article div h3,
  #accordion3 article div p {
    transform: translate(-1rem, 1rem);
    opacity: 0;
    transition: all 300ms ease-in-out;
  }

  #accordion3 article div h3 {
    font-size: 4.5rem;
    line-height: 1;
    font-weight: 700;
  }

  #accordion3 article div p {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  #accordion3 article[data-open] div h3,
  #accordion3 article[data-open] div p {
    transform: translate(0);
    opacity: 1;
  }

  #accordion3 article[data-open] div h3 {
    transition-delay: 300ms;
  }

  #accordion3 article[data-open] div p {
    transition-delay: 500ms;
  }

  @media (min-width: 768px) {
    #accordion3 {
      flex-direction: row;
      aspect-ratio: 16 / 9;
    }
  }
</style>

<script>
  const slides = document.querySelectorAll("#accordion3 article");

  slides.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();

      const activeElement = document.querySelector(
        "#accordion3 article[data-open]"
      );

      activeElement?.removeAttribute("data-open");

      const target = event.currentTarget;

      target.setAttribute("data-open", "");
    });
  });
</script>
`,
    },
  ]);

  await db.insert(Breadcrumbs).values([
    {
      id: 1,
      tailwindCode: `<ol
  class="flex items-center rounded-full border border-black/40 bg-neutral-800 px-5 py-3 text-white backdrop-blur-sm"
>
  <li
    class="flex list-none [&+&]:pl-2 before:[&+&]:pr-2 before:[&_+_&]:content-['/']"
  >
    <a href="#" class="hover:text-neutral-300 hover:underline">Home</a>
  </li>
  <li
    class="flex list-none [&+&]:pl-2 before:[&+&]:pr-2 before:[&_+_&]:content-['/']"
  >
    <a href="#" class="hover:text-neutral-300 hover:underline">Library</a>
  </li>
  <li
    class="flex list-none [&+&]:pl-2 before:[&+&]:pr-2 before:[&_+_&]:content-['/']"
  >
    <a href="#" class="hover:text-neutral-300 hover:underline">Data</a>
  </li>
</ol>
`,
      cssCode: `<ol id="breadcrumb1">
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">Library</a>
  </li>
  <li>
    <a href="#">Data</a>
  </li>
</ol>

<style>
  #breadcrumb1 {
    display: flex;
    align-items: center;
    border-radius: 9999px;
    border: 1px solid rgb(0 0 0 / 0.4);
    background: rgb(38 38 38);
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #fff;
    backdrop-filter: blur(4px);
  }

  #breadcrumb1 li {
    display: flex;
    list-style: none;
  }

  #breadcrumb1 li + li {
    padding-left: 0.5rem;
  }

  #breadcrumb1 li + li:before {
    content: "/";
    padding-right: 0.5rem;
  }

  #breadcrumb1 li a:hover {
    color: rgb(212 212 212);
    text-decoration: underline;
  }
</style>
`,
    },
    {
      id: 2,
      tailwindCode: `<ol
  class="flex items-center rounded-full border border-black/40 bg-neutral-800 px-5 py-3 text-white backdrop-blur-sm"
>
  <li
    class="flex list-none [&+&]:pl-2 before:[&+&]:pr-2 before:[&_+_&]:content-['>']"
  >
    <a href="#" class="hover:text-neutral-300 hover:underline">Home</a>
  </li>
  <li
    class="flex list-none [&+&]:pl-2 before:[&+&]:pr-2 before:[&_+_&]:content-['>']"
  >
    <a href="#" class="hover:text-neutral-300 hover:underline">Library</a>
  </li>
  <li
    class="flex list-none [&+&]:pl-2 before:[&+&]:pr-2 before:[&_+_&]:content-['>']"
  >
    <a href="#" class="hover:text-neutral-300 hover:underline">Data</a>
  </li>
</ol>
`,
      cssCode: `<ol id="breadcrumb1">
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">Library</a>
  </li>
  <li>
    <a href="#">Data</a>
  </li>
</ol>

<style>
  #breadcrumb1 {
    display: flex;
    align-items: center;
    border-radius: 9999px;
    border: 1px solid rgb(0 0 0 / 0.4);
    background: rgb(38 38 38);
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #fff;
    backdrop-filter: blur(4px);
  }

  #breadcrumb1 li {
    display: flex;
    list-style: none;
  }

  #breadcrumb1 li + li {
    padding-left: 0.5rem;
  }

  #breadcrumb1 li + li:before {
    content: ">";
    padding-right: 0.5rem;
  }

  #breadcrumb1 li a:hover {
    color: rgb(212 212 212);
    text-decoration: underline;
  }
</style>
`,
    },
    {
      id: 3,
      tailwindCode: `<ol
  class="flex items-center rounded-full border border-black/40 bg-neutral-800 px-5 py-3 text-white backdrop-blur-sm"
>
  <li
    class="flex list-none [&+&]:pl-2 before:[&+&]:pr-2 before:[&_+_&]:content-['\\\\']"
  >
    <a href="#" class="hover:text-neutral-300 hover:underline">Home</a>
  </li>
  <li
    class="flex list-none [&+&]:pl-2 before:[&+&]:pr-2 before:[&_+_&]:content-['\\\\']"
  >
    <a href="#" class="hover:text-neutral-300 hover:underline">Library</a>
  </li>
  <li
    class="flex list-none [&+&]:pl-2 before:[&+&]:pr-2 before:[&_+_&]:content-['\\\\']"
  >
    <a href="#" class="hover:text-neutral-300 hover:underline">Data</a>
  </li>
</ol>
`,
      cssCode: `<ol id="breadcrumb1">
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">Library</a>
  </li>
  <li>
    <a href="#">Data</a>
  </li>
</ol>

<style>
  #breadcrumb1 {
    display: flex;
    align-items: center;
    border-radius: 9999px;
    border: 1px solid rgb(0 0 0 / 0.4);
    background: rgb(38 38 38);
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #fff;
    backdrop-filter: blur(4px);
  }

  #breadcrumb1 li {
    display: flex;
    list-style: none;
  }

  #breadcrumb1 li + li {
    padding-left: 0.5rem;
  }

  #breadcrumb1 li + li:before {
    content: "\\\\";
    padding-right: 0.5rem;
  }

  #breadcrumb1 li a:hover {
    color: rgb(212 212 212);
    text-decoration: underline;
  }
</style>
`,
    },
  ]);

  await db.insert(Buttons).values([
    {
      id: 1,
      tailwindCode: `<button
  class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-50"
>
  <div class="transition-transform group-hover:-translate-x-[150%]">
    Hover me
  </div>
  <div class="absolute translate-x-[150%] transition-transform group-hover:translate-x-0">
    Hover me
  </div>
</button>
`,
      cssCode: `<button id="button1">
  <div>Hover me</div>
  <div>Hover me</div>
</button>

<style>
  #button1 {
    position: relative;
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

  #button1 div {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  #button1:hover div:first-child {
    transform: translateX(-150%);
  }

  #button1 div:last-child {
    position: absolute;
    transform: translateX(150%);
  }

  #button1:hover div:last-child {
    transform: translateX(0);
  }
</style>
`,
    },
    {
      id: 2,
      tailwindCode: `<button
  class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-50"
>
  <div class="transition-transform group-hover:-translate-y-[150%]">
    Hover me
  </div>
  <div class="absolute translate-y-[150%] transition-transform group-hover:translate-y-0">
    Hover me
  </div>
</button>
`,
      cssCode: `<button id="button2">
  <div>Hover me</div>
  <div>Hover me</div>
</button>

<style>
  #button2 {
    position: relative;
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

  #button2 div {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  #button2:hover div:first-child {
    transform: translateY(-150%);
  }

  #button2 div:last-child {
    position: absolute;
    transform: translateY(150%);
  }

  #button2:hover div:last-child {
    transform: translateY(0);
  }
</style>
`,
    },
    {
      id: 3,
      tailwindCode: `<button
  class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform active:scale-110"
>
  Click me
</button>
`,
      cssCode: `<button id="button3">Click me</button>

<style>
  #button3 {
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

  #button3:active {
    transform: scale(1.1);
  }
</style>
`,
    },
    {
      id: 4,
      tailwindCode: `<button
  class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform active:scale-95"
>
  Click me
</button>
`,
      cssCode: `<button id="button4">Click me</button>

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
    {
      id: 5,
      tailwindCode: `<button
  class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
>
  Click me
</button>
`,
      cssCode: `<button id="button5">Click me</button>

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
    {
      id: 6,
      tailwindCode: `<button
  class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90"
>
  Click me
</button>
`,
      cssCode: `<button id="button6">Click me</button>

<style>
   #button6 {
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

   #button6:active {
    transform: translateY(0.25rem) scaleX(1.1) scaleY(0.9);
  }
</style>
`,
    },
    {
      id: 7,
      tailwindCode: `<button
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
      cssCode: `<button id="button7">
  Hover me
  <div>
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
  #button7 {
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

  #button7 div {
    width: 0;
    transform: translateX(100%);
    opacity: 0;
    transition-property: width, transform, opacity, padding;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }

  #button7:hover div {
    width: 1.25rem;
    transform: translateX(0);
    padding-left: 0.25rem;
    opacity: 1;
  }

  #button7 svg {
    width: 1.25rem;
    height: 1.25rem;
  }
</style>
`,
    },
    {
      id: 8,
      tailwindCode: `<button
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
      cssCode: `<button id="button8">
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
    {
      id: 9,
      tailwindCode: `<button
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
      cssCode: `<button id="button9">
  <div>Hover me</div>
  <div>Hover me</div>
</button>

<style>
  #button9 {
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

  #button9 div {
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

  #button9:hover div:first-child {
    transform: translateX(-150%);
  }

  #button9 div:last-child {
    position: absolute;
    transform: translateX(100%);
    background-color: #3b82f6;
    color: #fafafa;
    transition-duration: 300ms;
  }

  #button9:hover div:last-child {
    transform: translateX(0);
  }
</style>
`,
    },
    {
      id: 10,
      tailwindCode: `<button
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
      cssCode: `<button id="button10">
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
    {
      id: 11,
      tailwindCode: `<button
  class="relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white px-6 font-medium text-neutral-600 shadow-[5px_5px] shadow-neutral-600 transition-[transform,box-shadow] duration-100 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0_0] active:shadow-neutral-600"
>
  Click me
</button>
`,
      cssCode: `<button id="button11">
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
    {
      id: 12,
      tailwindCode: `<button class="group relative">
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
      cssCode: `<button id="button12">
  <div>Hover me</div>
  <div></div>
</button>

<style>
  #button12 {
    position: relative;
  }

  #button12 div {
    border-radius: 0.375rem;
    transition-property: transform, box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  #button12:hover div {
    transform: translate(-0.75rem, -0.75rem);
  }
  
  #button12:active div {
    transform: translate(0, 0);
  }

  #button12 div:first-child {
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
  
  #button12 div:last-child {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  #button12:hover div:last-child {
    box-shadow: 5px 5px #a3a3a3, 10px 10px #a3a3a342, 15px 15px #a3a3a348;
  }

  #button12:active div:last-child {
    box-shadow: none;
  }
</style>
`,
    },
    {
      id: 13,
      tailwindCode: `<button
  class="inline-flex h-12 items-center justify-center rounded-md border border-neutral-200 bg-white px-6 font-medium text-neutral-600 shadow-[0_4px_1px] shadow-neutral-400 transition-[transform,box-shadow] active:translate-y-0.5 active:shadow-[0_0] active:shadow-neutral-400"
>
  Click me
</button>
`,
      cssCode: `<button id="button13">
  Click me
</button>

<style>
  #button13 {
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

  #button13:active {
    transform: translateY(2px);
    box-shadow: 0 0 #a3a3a3;
  }
</style>
`,
    },
    {
      id: 14,
      tailwindCode: `<button
  class="group inline-flex h-12 items-center justify-center rounded-md border border-neutral-100 bg-white px-6 font-medium text-neutral-600 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]"
>
  <span class="group-active:translate-y-px">
    Click me
  </span>
</button>
`,
      cssCode: `<button id="button14">
  <span>Click me</span>
</button>

<style>
  #button14 {
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

  #button14:active {
    box-shadow:
      -1px 0 1px 0 #e4e4e7 inset,
      1px 0 1px 0 #e4e4e7 inset,
      0 0.125rem 1px 0 #d4d4d8 inset;
  }

  #button14:active span {
    transform: translateY(1px);
  }
</style>
`,
    },
  ]);

  await db.insert(Carousels).values([
    {
      id: 1,
      tailwindCode: `<section id="slider1" class="w-full">
  <div class="relative">
    <button
      type="button"
      class="absolute -left-4 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white hover:bg-neutral-700 max-lg:[display:none!important]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-8"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 6l-6 6l6 6"></path>
      </svg>
    </button>
    <ul
      class="mb-4 grid grid-cols-[repeat(10,1fr)] gap-2 overflow-x-auto [scrollbar-width:none] lg:mb-8 lg:gap-4 [&::-webkit-scrollbar]:hidden"
    >
      <li
        class="h-80 w-64 rounded-xl bg-cover bg-center bg-no-repeat lg:h-96 lg:w-80"
        style="background-image: url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="h-80 w-64 rounded-xl bg-cover bg-center bg-no-repeat lg:h-96 lg:w-80"
        style="background-image: url('https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="h-80 w-64 rounded-xl bg-cover bg-center bg-no-repeat lg:h-96 lg:w-80"
        style="background-image: url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="h-80 w-64 rounded-xl bg-cover bg-center bg-no-repeat lg:h-96 lg:w-80"
        style="background-image: url('https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg');"
      >
      </li>
      <li
        class="h-80 w-64 rounded-xl bg-cover bg-center bg-no-repeat lg:h-96 lg:w-80"
        style="background-image: url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
    </ul>
    <button
      type="button"
      class="absolute -right-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white hover:bg-neutral-700 max-lg:[display:none!important]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-8"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 6l6 6l-6 6"></path>
      </svg>
    </button>
  </div>

  <footer class="group flex h-6 w-full items-center">
    <div class="relative h-0.5 w-full rounded bg-neutral-300 group-hover:h-1">
      <span
        class="absolute h-full w-1/2 cursor-grab rounded bg-black after:absolute after:-inset-y-2.5 after:inset-x-0 after:content-[''] active:-top-0.5 active:h-2 active:cursor-grabbing max-lg:w-1/5"
      >
      </span>
    </div>
  </footer>
</section>

<script>
  const imageList1 = document.querySelector("#slider1 ul");
  const slideButtons1 = document.querySelectorAll("#slider1 button");
  const sliderScrollbar1 = document.querySelector("#slider1 footer");
  const scrollbarThumb1 = sliderScrollbar1.querySelector("span");
  const maxScrollLeft1 = imageList1.scrollWidth - imageList1.clientWidth;

  scrollbarThumb1.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb1.offsetLeft;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition =
        sliderScrollbar1.getBoundingClientRect().width -
        scrollbarThumb1.offsetWidth;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft1;

      scrollbarThumb1.style.left = \`\${boundedPosition}px\`;
      imageList1.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons1.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = slideButtons1[0] === button ? -1 : 1;
      const scrollAmount = imageList1.clientWidth * direction;
      imageList1.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons1[0].style.display =
      imageList1.scrollLeft <= 0 ? "none" : "flex";
    slideButtons1[1].style.display =
      imageList1.scrollLeft >= maxScrollLeft1 ? "none" : "flex";
  };

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList1.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft1) *
      (sliderScrollbar1.clientWidth - scrollbarThumb1.offsetWidth);
    scrollbarThumb1.style.left = \`\${thumbPosition}px\`;
  };

  imageList1.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });
</script>
`,
      cssCode: `<section id="slider1">
  <div class="slider-wrapper">
    <button type="button" class="slide-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 6l-6 6l6 6"></path>
      </svg>
    </button>
    <ul class="image-list">
      <li
        class="image-item"
        style="background-image: url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="image-item"
        style="background-image: url('https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="image-item"
        style="background-image: url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="image-item"
        style="background-image: url('https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg');"
      >
      </li>
      <li
        class="image-item"
        style="background-image: url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
    </ul>
    <button type="button" class="slide-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 6l6 6l-6 6"></path>
      </svg>
    </button>
  </div>

  <footer class="slider-scrollbar">
    <div class="scrollbar-track">
      <span class="scrollbar-thumb"></span>
    </div>
  </footer>
</section>

<style>
  #slider1 {
    width: 100%;
  }

  #slider1 .slider-wrapper {
    position: relative;
  }

  #slider1 .slide-button {
    position: absolute;
    top: 50%;
    display: flex;
    width: 48px;
    height: 48px;
    transform: translateY(-50%);
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background-color: #000;
    color: #fff;
  }

  #slider1 .slide-button:hover {
    background-color: #404040;
  }

  #slider1 .slide-button svg {
    width: 32px;
    height: 32px;
  }

  #slider1 .slide-button:first-of-type {
    left: -1rem;
    display: none;
  }

  #slider1 .slide-button:last-of-type {
    right: -1rem;
  }

  #slider1 .image-list {
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1rem;
    overflow-x: auto;
    scrollbar-width: none;
  }
  #slider1 .image-list::-webkit-scrollbar {
    display: none;
  }

  #slider1 .image-item {
    width: 20rem;
    height: 24rem;
    border-radius: 0.75rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #fff;
  }

  #slider1 .slider-scrollbar {
    display: flex;
    height: 1.5rem;
    width: 100%;
    align-items: center;
  }

  #slider1 .scrollbar-track {
    position: relative;
    height: 2px;
    width: 100%;
    border-radius: 4px;
    background-color: #d4d4d4;
  }

  #slider1 .slider-scrollbar:hover .scrollbar-track {
    height: 4px;
  }

  #slider1 .scrollbar-thumb {
    position: absolute;
    height: 100%;
    width: 50%;
    cursor: grab;
    border-radius: 4px;
    background-color: #000;
  }

  #slider1 .scrollbar-thumb::after {
    content: "";
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: 0;
    right: 0;
  }

  #slider1 .scrollbar-thumb:active {
    top: -2px;
    height: 8px;
    cursor: grabbing;
  }

  @media not all and (min-width: 1024px) {
    #slider1 .slide-button {
      display: none !important;
    }

    #slider1 .image-list {
      margin-bottom: 1rem;
      gap: 8px;
    }

    #slider1 .image-item {
      width: 16rem;
      height: 20rem;
    }

    #slider1 .scrollbar-thumb {
      width: 20%;
    }
  }
</style>

<script>
  const imageList1 = document.querySelector("#slider1 .image-list");
  const slideButtons1 = document.querySelectorAll("#slider1 .slide-button");
  const sliderScrollbar1 = document.querySelector("#slider1 .slider-scrollbar");
  const scrollbarThumb1 = sliderScrollbar1.querySelector(".scrollbar-thumb");
  const maxScrollLeft1 = imageList1.scrollWidth - imageList1.clientWidth;

  scrollbarThumb1.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb1.offsetLeft;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition =
        sliderScrollbar1.getBoundingClientRect().width -
        scrollbarThumb1.offsetWidth;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft1;

      scrollbarThumb1.style.left = \`\${boundedPosition}px\`;
      imageList1.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons1.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = slideButtons1[0] === button ? -1 : 1;
      const scrollAmount = imageList1.clientWidth * direction;
      imageList1.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons1[0].style.display =
      imageList1.scrollLeft <= 0 ? "none" : "flex";
    slideButtons1[1].style.display =
      imageList1.scrollLeft >= maxScrollLeft1 ? "none" : "flex";
  };

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList1.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft1) *
      (sliderScrollbar1.clientWidth - scrollbarThumb1.offsetWidth);
    scrollbarThumb1.style.left = \`\${thumbPosition}px\`;
  };

  imageList1.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });
</script>
`,
    },
    {
      id: 2,
      tailwindCode: `<section id="slider2" class="w-full">
  <div
    class="slider-wrapper group/wrapper relative flex h-[60dvh] items-end justify-center overflow-hidden"
  >
    <ul class="list">
      <li
        class="item group absolute bottom-16 left-1/2 flex h-36 w-24 items-end overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat transition-[bottom,left,width,height,border-radius,background-color] duration-500 first:bottom-0 first:left-0 first:z-[1] first:size-full first:rounded-none last:bottom-0 last:left-0 last:size-full last:rounded-none lg:h-56 lg:w-40 group-[.prev]/wrapper:[&:nth-child(2)]:z-[2]"
        style="background-image: url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
        <div
          class="content mb-3 w-1/2 translate-y-4 px-8 py-4 text-white opacity-0 transition-[transform,opacity] duration-200 group-first:translate-y-0 group-first:opacity-100 group-first:delay-500 group-last:translate-y-0 group-last:opacity-100 group-last:delay-500"
        >
          <h3 class="text-7xl font-bold">01</h3>
          <p class="text-2xl">Lorem ipsum dolor.</p>
        </div>
      </li>
      <li
        class="item group absolute bottom-16 left-1/2 flex h-36 w-24 items-end overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat transition-[bottom,left,width,height,border-radius,background-color] duration-500 first:bottom-0 first:left-0 first:z-[1] first:size-full first:rounded-none last:bottom-0 last:left-0 last:size-full last:rounded-none lg:h-56 lg:w-40 group-[.prev]/wrapper:[&:nth-child(2)]:z-[2]"
        style="background-image: url('https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
        <div
          class="content mb-3 w-1/2 translate-y-4 px-8 py-4 text-white opacity-0 transition-[transform,opacity] duration-200 group-first:translate-y-0 group-first:opacity-100 group-first:delay-500 group-last:translate-y-0 group-last:opacity-100 group-last:delay-500"
        >
          <h3 class="text-7xl font-bold">02</h3>
          <p class="text-2xl">Lorem ipsum dolor.</p>
        </div>
      </li>
      <li
        class="item group absolute bottom-16 left-1/2 flex h-36 w-24 items-end overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat transition-[bottom,left,width,height,border-radius,background-color] duration-500 first:bottom-0 first:left-0 first:z-[1] first:size-full first:rounded-none last:bottom-0 last:left-0 last:size-full last:rounded-none lg:h-56 lg:w-40 group-[.prev]/wrapper:[&:nth-child(2)]:z-[2]"
        style="background-image: url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
        <div
          class="content mb-3 w-1/2 translate-y-4 px-8 py-4 text-white opacity-0 transition-[transform,opacity] duration-200 group-first:translate-y-0 group-first:opacity-100 group-first:delay-500 group-last:translate-y-0 group-last:opacity-100 group-last:delay-500"
        >
          <h3 class="text-7xl font-bold">03</h3>
          <p class="text-2xl">Lorem ipsum dolor.</p>
        </div>
      </li>
      <li
        class="item group absolute bottom-16 left-1/2 flex h-36 w-24 items-end overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat transition-[bottom,left,width,height,border-radius,background-color] duration-500 first:bottom-0 first:left-0 first:z-[1] first:size-full first:rounded-none last:bottom-0 last:left-0 last:size-full last:rounded-none lg:h-56 lg:w-40 group-[.prev]/wrapper:[&:nth-child(2)]:z-[2]"
        style="background-image: url('https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg');"
      >
        <div
          class="content mb-3 w-1/2 translate-y-4 px-8 py-4 text-white opacity-0 transition-[transform,opacity] duration-200 group-first:translate-y-0 group-first:opacity-100 group-first:delay-500 group-last:translate-y-0 group-last:opacity-100 group-last:delay-500"
        >
          <h3 class="text-7xl font-bold">04</h3>
          <p class="text-2xl">Lorem ipsum dolor.</p>
        </div>
      </li>
      <li
        class="item group absolute bottom-16 left-1/2 flex h-36 w-24 items-end overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat transition-[bottom,left,width,height,border-radius,background-color] duration-500 first:bottom-0 first:left-0 first:z-[1] first:size-full first:rounded-none last:bottom-0 last:left-0 last:size-full last:rounded-none lg:h-56 lg:w-40 group-[.prev]/wrapper:[&:nth-child(2)]:z-[2]"
        style="background-image: url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
        <div
          class="content mb-3 w-1/2 translate-y-4 px-8 py-4 text-white opacity-0 transition-[transform,opacity] duration-200 group-first:translate-y-0 group-first:opacity-100 group-first:delay-500 group-last:translate-y-0 group-last:opacity-100 group-last:delay-500"
        >
          <h3 class="text-7xl font-bold">05</h3>
          <p class="text-2xl">Lorem ipsum dolor.</p>
        </div>
      </li>
    </ul>
    <ul class="thumbnail absolute bottom-16 left-1/2 z-[3] flex gap-4">
      <li
        class="item h-36 w-24 rounded-2xl bg-cover bg-center bg-no-repeat lg:h-56 lg:w-40"
        style="background-image: url('https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="item h-36 w-24 rounded-2xl bg-cover bg-center bg-no-repeat lg:h-56 lg:w-40"
        style="background-image: url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="item h-36 w-24 rounded-2xl bg-cover bg-center bg-no-repeat lg:h-56 lg:w-40"
        style="background-image: url('https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg');"
      >
      </li>
      <li
        class="item h-36 w-24 rounded-2xl bg-cover bg-center bg-no-repeat lg:h-56 lg:w-40"
        style="background-image: url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="item h-36 w-24 rounded-2xl bg-cover bg-center bg-no-repeat lg:h-56 lg:w-40"
        style="background-image: url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
    </ul>
    <div class="z-[3] mb-4 flex gap-3">
      <button
        type="button"
        class="flex size-8 items-center justify-center rounded-lg bg-black text-white hover:bg-neutral-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 6l-6 6l6 6"></path>
        </svg>
      </button>
      <button
        type="button"
        class="flex size-8 items-center justify-center rounded-lg bg-black text-white hover:bg-neutral-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </button>
    </div>
  </div>
</section>

<style>
  #slider2 .slider-wrapper.prev .thumbnail .item:last-child {
    animation: showThumbnail 500ms cubic-bezier(0.4, 0, 0.2, 1) reverse;
  }

  #slider2 .slider-wrapper.next .thumbnail .item:last-child {
    opacity: 0;
    animation: showThumbnail 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes showThumbnail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #slider2 .slider-wrapper.prev .thumbnail {
    transform: translateX(0);
    animation: transformThumbnail 500ms cubic-bezier(0.4, 0, 0.2, 1) reverse;
  }

  #slider2 .slider-wrapper.next .thumbnail {
    transform: translateX(166px);
    animation: transformThumbnail 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes transformThumbnail {
    from {
      transform: translateX(166px);
    }
    to {
      transform: translateX(0);
    }
  }
</style>

<script>
  const slider2 = document.querySelector("#slider2 .slider-wrapper");
  const slideButtons2 = slider2.querySelectorAll("button");
  const list = slider2.querySelector(".list");
  const thumbnail = slider2.querySelector(".thumbnail");
  let runTimeout;

  const showSlider = (type) => {
    const listItems = slider2.querySelectorAll(".list .item");
    const thumbnailItems = slider2.querySelectorAll(".thumbnail .item");

    slideButtons2.forEach((button) =>
      button.classList.add("pointer-events-none")
    );

    if (type === "next") {
      slider2?.classList.add("next");
      list?.appendChild(listItems[0]);
      thumbnail?.appendChild(thumbnailItems[0]);

      clearTimeout(runTimeout);
      runTimeout = setTimeout(() => {
        slider2?.classList.remove("prev");
        slider2?.classList.remove("next");
        slideButtons2.forEach((button) =>
          button.classList.remove("pointer-events-none")
        );
      }, 500);
    } else {
      slider2?.classList.add("prev");
      list?.prepend(listItems[listItems.length - 1]);

      clearTimeout(runTimeout);
      runTimeout = setTimeout(() => {
        thumbnail?.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider2?.classList.remove("prev");
        slider2?.classList.remove("next");
        slideButtons2.forEach((button) =>
          button.classList.remove("pointer-events-none")
        );
      }, 500);
    }
  };

  slideButtons2.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("pointer-events-none");
      showSlider(slideButtons2[0] === button ? "prev" : "next");
    });
  });
</script>
`,
      cssCode: `<section id="slider2">
  <div class="slider-wrapper">
    <ul class="list">
      <li
        class="item"
        style="background-image: url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
        <div class="content">
          <h3>01</h3>
          <p>Lorem ipsum dolor.</p>
        </div>
      </li>
      <li
        class="item"
        style="background-image: url('https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
        <div class="content">
          <h3>02</h3>
          <p>Lorem ipsum dolor.</p>
        </div>
      </li>
      <li
        class="item"
        style="background-image: url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
        <div class="content">
          <h3>03</h3>
          <p>Lorem ipsum dolor.</p>
        </div>
      </li>
      <li
        class="item"
        style="background-image: url('https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg');"
      >
        <div class="content">
          <h3>04</h3>
          <p>Lorem ipsum dolor.</p>
        </div>
      </li>
      <li
        class="item"
        style="background-image: url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
        <div class="content">
          <h3>05</h3>
          <p>Lorem ipsum dolor.</p>
        </div>
      </li>
    </ul>
    <ul class="thumbnail">
      <li
        class="item"
        style="background-image: url('https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="item"
        style="background-image: url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="item"
        style="background-image: url('https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg');"
      >
      </li>
      <li
        class="item"
        style="background-image: url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
      <li
        class="item"
        style="background-image: url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      >
      </li>
    </ul>
    <div class="slide-buttons">
      <button type="button" class="slide-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 6l-6 6l6 6"></path>
        </svg>
      </button>
      <button type="button" class="slide-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </button>
    </div>
  </div>
</section>

<style>
  #slider2 {
    width: 100%;
  }

  #slider2 .slider-wrapper {
    position: relative;
    display: flex;
    height: 60dvh;
    align-items: end;
    justify-content: center;
    overflow: hidden;
  }

  #slider2 .list .item {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    display: flex;
    height: 9rem;
    width: 6rem;
    align-items: end;
    overflow: hidden;
    border-radius: 1rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition-property: bottom, left, width, height, border-radius,
      background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }

  #slider2 .list .item:first-child,
  #slider2 .list .item:last-child {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  #slider2 .list .item:first-child {
    z-index: 1;
  }

  #slider2 .slider-wrapper.prev .list .item:nth-child(2) {
    z-index: 2;
  }

  #slider2 .list .item .content {
    margin-bottom: 3rem;
    width: 50%;
    transform: translateY(20px);
    padding: 1rem 2rem;
    color: #fff;
    opacity: 0;
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }

  #slider2 .list .item:first-child .content,
  #slider2 .list .item:last-child .content {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 500ms;
  }

  #slider2 .list .item .content h3 {
    font-size: 4.5rem;
    line-height: 1;
    font-weight: 700;
  }

  #slider2 .list .item .content p {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  #slider2 .thumbnail {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    z-index: 3;
    display: flex;
    gap: 1rem;
  }

  #slider2 .thumbnail .item {
    height: 9rem;
    width: 6rem;
    border-radius: 1rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #slider2 .slider-wrapper.prev .thumbnail .item:last-child {
    animation: showThumbnail 500ms cubic-bezier(0.4, 0, 0.2, 1) reverse;
  }

  #slider2 .slider-wrapper.next .thumbnail .item:last-child {
    opacity: 0;
    animation: showThumbnail 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes showThumbnail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #slider2 .slider-wrapper.prev .thumbnail {
    transform: translateX(0);
    animation: transformThumbnail 500ms cubic-bezier(0.4, 0, 0.2, 1) reverse;
  }

  #slider2 .slider-wrapper.next .thumbnail {
    transform: translateX(166px);
    animation: transformThumbnail 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes transformThumbnail {
    from {
      transform: translateX(166px);
    }
    to {
      transform: translateX(0);
    }
  }

  #slider2 .slide-buttons {
    z-index: 3;
    margin-bottom: 1rem;
    display: flex;
    gap: 12px;
  }

  #slider2 .slide-button {
    display: flex;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #000;
    color: #fff;
  }

  #slider2 .slide-button:hover {
    background-color: #404040;
  }

  @media (min-width: 1024px) {
    #slider2 .list .item,
    #slider2 .thumbnail .item {
      height: 14rem;
      width: 10rem;
    }
  }
</style>

<script>
  const slider2 = document.querySelector("#slider2 .slider-wrapper");
  const slideButtons2 = slider2.querySelectorAll(".slide-button");
  const list = slider2.querySelector(".list");
  const thumbnail = slider2.querySelector(".thumbnail");
  let runTimeout;

  const showSlider = (type) => {
    const listItems = slider2.querySelectorAll(".list .item");
    const thumbnailItems = slider2.querySelectorAll(".thumbnail .item");

    slideButtons2.forEach((button) =>
      button.classList.add("pointer-events-none")
    );

    if (type === "next") {
      slider2?.classList.add("next");
      list?.appendChild(listItems[0]);
      thumbnail?.appendChild(thumbnailItems[0]);

      clearTimeout(runTimeout);
      runTimeout = setTimeout(() => {
        slider2?.classList.remove("prev");
        slider2?.classList.remove("next");
        slideButtons2.forEach((button) =>
          button.classList.remove("pointer-events-none")
        );
      }, 500);
    } else {
      slider2?.classList.add("prev");
      list?.prepend(listItems[listItems.length - 1]);

      clearTimeout(runTimeout);
      runTimeout = setTimeout(() => {
        thumbnail?.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider2?.classList.remove("prev");
        slider2?.classList.remove("next");
        slideButtons2.forEach((button) =>
          button.classList.remove("pointer-events-none")
        );
      }, 500);
    }
  };

  slideButtons2.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("pointer-events-none");
      showSlider(slideButtons2[0] === button ? "prev" : "next");
    });
  });
</script>
`,
    },
  ]);

  await db.insert(Dropdowns).values([
    {
      id: 1,
      tailwindCode: `<div class="relative z-[999]">
  <button
    id="toggler1"
    class="relative z-10 inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform active:scale-95"
  >
    Click me
  </button>

  <section
    id="menu1"
    class="pointer-events-none absolute left-0 top-14 z-10 origin-top-left scale-50 select-none rounded-md bg-neutral-950 px-4 py-3 text-neutral-50 opacity-0 transition-[transform,opacity] duration-300"
  >
    Hello world!
  </section>

  <section
    id="overlay1"
    class="pointer-events-none fixed left-0 top-0 h-[1000vh] w-[200%]"
  >
  </section>
</div>

<script>
  const toggler1 = document.querySelector("#toggler1");
  const menu1 = document.querySelector("#menu1");
  const overlay1 = document.querySelector("#overlay1");

  toggler1.onclick = function () {
    menu1.classList.toggle("pointer-events-none");
    menu1.classList.toggle("scale-50");
    menu1.classList.toggle("select-none");
    menu1.classList.toggle("opacity-0");
    overlay1.classList.toggle("pointer-events-none");
  };

  overlay1.onclick = function () {
    menu1.classList.add("pointer-events-none");
    menu1.classList.add("scale-50");
    menu1.classList.add("select-none");
    menu1.classList.add("opacity-0");
    overlay1.classList.add("pointer-events-none");
  };
</script>
`,
      cssCode: `<div id="dropdown1">
  <button id="toggler1">Click me</button>
  <section id="menu1">Hello world!</section>
  <section id="overlay1"></section>
</div>

<style>
  #dropdown1 {
    position: relative;
    z-index: 999;
  }
  #toggler1 {
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

  #toggler1:active {
    transform: scale(0.95);
  }

  #menu1 {
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 3.5rem;
    z-index: 10;
    transform-origin: top left;
    transform: scale(0.5);
    user-select: none;
    border-radius: 6px;
    background-color: #0a0a0a;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #fafafa;
    opacity: 0;
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  #overlay1 {
    pointer-events: none;
    position: fixed;
    left: 0;
    top: 0;
    height: 1000vh;
    width: 200%;
  }
</style>

<script>
  const toggler1 = document.querySelector("#toggler1");
  const menu1 = document.querySelector("#menu1");
  const overlay1 = document.querySelector("#overlay1");

  toggler1.onclick = function () {
    menu1.setAttribute(
      "style",
      "pointer-events: auto; transform: scale(1); user-select: auto; opacity: 1;"
    );
    overlay1.setAttribute("style", "pointer-events: auto;");
  };

  overlay1.onclick = function () {
    menu1.removeAttribute("style");
    overlay1.removeAttribute("style");
  };
</script>
`,
      reactCode: `import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-[999]">
      <button
        className="relative z-10 inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform active:scale-95"
        onClick={() => setOpen(!open)}
      >
        Click me
      </button>

      <section
        className={\`absolute left-0 top-14 z-10 origin-top-left rounded-md bg-neutral-950 px-4 py-3 text-neutral-50 transition-[transform,opacity] duration-300 \${!open ? "pointer-events-none scale-50 select-none opacity-0" : ""}\`}
      >
        Hello world!
      </section>

      <section
        className={\`fixed left-0 top-0 h-[1000vh] w-[200%] \${!open ? "pointer-events-none" : ""}\`}
        onClick={() => setOpen(false)}
      />
    </div>
  );
}
`,
    },
    {
      id: 2,
      tailwindCode: `<div class="relative z-[999]">
  <button
    id="toggler2"
    class="relative z-10 inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform active:scale-95"
  >
    Click me
  </button>

  <section
    id="menu2"
    class="pointer-events-none absolute right-0 top-14 z-10 origin-top-right scale-50 select-none rounded-md bg-neutral-950 px-4 py-3 text-neutral-50 opacity-0 transition-[transform,opacity] duration-300"
  >
    Hello world!
  </section>

  <section
    id="overlay2"
    class="pointer-events-none fixed left-0 top-0 h-[1000vh] w-[200%]"
  >
  </section>
</div>

<script>
  const toggler2 = document.querySelector("#toggler2");
  const menu2 = document.querySelector("#menu2");
  const overlay2 = document.querySelector("#overlay2");

  toggler2.onclick = function () {
    menu2.classList.toggle("pointer-events-none");
    menu2.classList.toggle("scale-50");
    menu2.classList.toggle("select-none");
    menu2.classList.toggle("opacity-0");
    overlay2.classList.toggle("pointer-events-none");
  };

  overlay2.onclick = function () {
    menu2.classList.add("pointer-events-none");
    menu2.classList.add("scale-50");
    menu2.classList.add("select-none");
    menu2.classList.add("opacity-0");
    overlay2.classList.add("pointer-events-none");
  };
</script>
`,
      cssCode: `<div id="dropdown2">
  <button id="toggler2">Click me</button>
  <section id="menu2">Hello world!</section>
  <section id="overlay2"></section>
</div>

<style>
  #dropdown2 {
    position: relative;
    z-index: 999;
  }
  #toggler2 {
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

  #toggler2:active {
    transform: scale(0.95);
  }

  #menu2 {
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 3.5rem;
    z-index: 10;
    transform-origin: top right;
    transform: scale(0.5);
    user-select: none;
    border-radius: 6px;
    background-color: #0a0a0a;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #fafafa;
    opacity: 0;
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  #overlay2 {
    pointer-events: none;
    position: fixed;
    left: 0;
    top: 0;
    height: 1000vh;
    width: 200%;
  }
</style>

<script>
  const toggler2 = document.querySelector("#toggler2");
  const menu2 = document.querySelector("#menu2");
  const overlay2 = document.querySelector("#overlay2");

  toggler2.onclick = function () {
    menu2.setAttribute(
      "style",
      "pointer-events: auto; transform: scale(1); user-select: auto; opacity: 1;"
    );
    overlay2.setAttribute("style", "pointer-events: auto;");
  };

  overlay2.onclick = function () {
    menu2.removeAttribute("style");
    overlay2.removeAttribute("style");
  };
</script>
`,
      reactCode: `import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-[999]">
      <button
        className="relative z-10 inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition-transform active:scale-95"
        onClick={() => setOpen(!open)}
      >
        Click me
      </button>

      <section
        className={\`absolute left-0 top-14 z-10 origin-top-left rounded-md bg-neutral-950 px-4 py-3 text-neutral-50 transition-[transform,opacity] duration-300 \${!open ? "pointer-events-none scale-50 select-none opacity-0" : ""}\`}
      >
        Hello world!
      </section>

      <section
        className={\`fixed left-0 top-0 h-[1000vh] w-[200%] \${!open ? "pointer-events-none" : ""}\`}
        onClick={() => setOpen(false)}
      />
    </div>
  );
}
`,
    },
  ]);

  await db.insert(Tabs).values([
    {
      id: 1,
      tailwindCode: `<div
  id="tabs1"
  class="relative flex h-12 overflow-hidden rounded-full border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm"
>
  <span
    id="activeTab1"
    class="absolute bottom-0 left-0 top-0 -z-10 flex w-0 py-2 transition-[left,width] duration-300"
  >
    <span class="size-full rounded-full bg-gray-200/30"></span>
  </span>
  <button
    class="my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white hover:text-neutral-300"
  >
    Home
  </button>
  <button
    class="my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white hover:text-neutral-300"
  >
    About
  </button>
  <button
    class="my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white hover:text-neutral-300"
  >
    Projects
  </button>
  <button
    class="my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white hover:text-neutral-300"
  >
    Contact
  </button>
</div>

<script>
  const tabs1 = document.querySelectorAll("#tabs1 button");
  const activeTab1 = document.querySelector("#activeTab1");

  const setTabPosition1 = (e) => {
    let el = e?.target ?? tabs1[0];
    activeTab1?.setAttribute(
      "style",
      \`left: \${el.offsetLeft}px; width: \${el.offsetWidth}px\`
    );

    tabs1.forEach((tab) => {
      tab.classList.toggle("hover:text-neutral-300", tab !== el);
    });
  };

  setTabPosition1();

  tabs1.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      setTabPosition1(e);
    });
  });
</script>
`,
      cssCode: `<div id="tabs1">
  <span id="activeTab1">
    <span></span>
  </span>
  <button>Home</button>
  <button>About</button>
  <button>Projects</button>
  <button>Contact</button>
</div>

<style>
  #tabs1 {
    position: relative;
    display: flex;
    height: 3rem;
    overflow: hidden;
    border-radius: 9999px;
    border: 1px solid rgb(0 0 0 / 0.4);
    background-color: #262626;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    backdrop-filter: blur(4px);
  }

  #tabs1 button {
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    user-select: none;
    border-radius: 9999px;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    font-weight: 300;
    color: #fff;
  }

  #tabs1 button:not(.active):hover {
    color: #d4d4d4;
  }

  #activeTab1 {
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    z-index: -10;
    display: flex;
    width: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    transition-property: left, width;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  #activeTab1 span {
    height: 100%;
    width: 100%;
    border-radius: 9999px;
    background-color: rgb(229 231 235 / 0.3);
  }
</style>

<script>
  const tabs1 = document.querySelectorAll("#tabs1 button");
  const activeTab1 = document.querySelector("#activeTab1");

  const setTabPosition1 = (e) => {
    let el = e?.target ?? tabs1[0];
    activeTab1?.setAttribute(
      "style",
      \`left: \${el.offsetLeft}px; width: \${el.offsetWidth}px\`
    );

    tabs1.forEach((tab) => {
      tab.classList.toggle("active", tab === el);
    });
  };

  setTabPosition1();

  tabs1.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      setTabPosition1(e);
    });
  });
</script>
`,
      reactCode: `import { useEffect, useRef, useState } from "react";

let tabs1 = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export default function Tab1() {
  const tabsRef = useRef([]);
  const [activeTab1, setActiveTab] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTab1 === null) {
      return;
    }

    const setTabPosition1 = () => {
      const currentTab = tabsRef.current[activeTab1];
      setTabUnderlineLeft(currentTab.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab.clientWidth ?? 0);
    };

    setTabPosition1();
  }, [activeTab1]);

  return (
    <div className="relative flex h-12 overflow-hidden rounded-full border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 left-0 top-0 -z-10 flex w-0 py-2 transition-[left,width] duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="size-full rounded-full bg-gray-200/30" />
      </span>
      {tabs1.map((tab, index) => (
        <button
          key={index}
          ref={(el) => (tabsRef.current[index] = el)}
          className={\`my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white \${activeTab1 === index ? "" : "hover:text-neutral-300"}\`}
          onClick={() => setActiveTab(index)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
`,
    },
    {
      id: 2,
      tailwindCode: `<div
  id="tabs2"
  class="relative flex h-12 overflow-hidden rounded-full border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm"
>
  <span
    id="activeTab2"
    class="absolute bottom-1 left-0 -z-10 flex w-0 transition-[left,width] duration-300"
  >
    <span class="mx-auto mt-auto h-1 w-6 rounded-full bg-gray-200/30"></span>
  </span>
  <button
    class="my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white hover:text-neutral-300"
  >
    Home
  </button>
  <button
    class="my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white hover:text-neutral-300"
  >
    About
  </button>
  <button
    class="my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white hover:text-neutral-300"
  >
    Projects
  </button>
  <button
    class="my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white hover:text-neutral-300"
  >
    Contact
  </button>
</div>

<script>
  const tabs2 = document.querySelectorAll("#tabs2 button");
  const activeTab2 = document.querySelector("#activeTab2");

  const setTabPosition2 = (e) => {
    let el = e?.target ?? tabs2[0];
    activeTab2?.setAttribute(
      "style",
      \`left: \${el.offsetLeft}px; width: \${el.offsetWidth}px\`
    );

    tabs2.forEach((tab) => {
      tab.classList.toggle("hover:text-neutral-300", tab !== el);
    });
  };

  setTabPosition2();

  tabs2.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      setTabPosition2(e);
    });
  });
</script>
`,
      cssCode: `<div id="tabs2">
  <span id="activeTab2">
    <span></span>
  </span>
  <button>Home</button>
  <button>About</button>
  <button>Projects</button>
  <button>Contact</button>
</div>

<style>
  #tabs2 {
    position: relative;
    display: flex;
    height: 3rem;
    overflow: hidden;
    border-radius: 9999px;
    border: 1px solid rgb(0 0 0 / 0.4);
    background-color: #262626;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    backdrop-filter: blur(4px);
  }

  #tabs2 button {
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    user-select: none;
    border-radius: 9999px;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    font-weight: 300;
    color: #fff;
  }

  #tabs2 button:not(.active):hover {
    color: #d4d4d4;
  }

  #activeTab2 {
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    z-index: -10;
    display: flex;
    width: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    transition-property: left, width;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  #activeTab2 span {
    height: 100%;
    width: 100%;
    border-radius: 9999px;
    background-color: rgb(229 231 235 / 0.3);
  }
</style>

<script>
  const tabs2 = document.querySelectorAll("#tabs2 button");
  const activeTab2 = document.querySelector("#activeTab2");

  const setTabPosition2 = (e) => {
    let el = e?.target ?? tabs2[0];
    activeTab2?.setAttribute(
      "style",
      \`left: \${el.offsetLeft}px; width: \${el.offsetWidth}px\`
    );

    tabs2.forEach((tab) => {
      tab.classList.toggle("active", tab === el);
    });
  };

  setTabPosition2();

  tabs2.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      setTabPosition2(e);
    });
  });
</script>
`,
      reactCode: `import { useEffect, useRef, useState } from "react";

let tabs2 = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export default function Tab1() {
  const tabsRef = useRef([]);
  const [activeTab2, setActiveTab] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTab2 === null) {
      return;
    }

    const setTabPosition2 = () => {
      const currentTab = tabsRef.current[activeTab2];
      setTabUnderlineLeft(currentTab.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab.clientWidth ?? 0);
    };

    setTabPosition2();
  }, [activeTab2]);

  return (
    <div className="relative flex h-12 overflow-hidden rounded-full border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-1 left-0 -z-10 flex w-0 transition-[left,width] duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="mx-auto mt-auto h-1 w-6 rounded-full bg-gray-200/30" />
      </span>
      {tabs2.map((tab, index) => (
        <button
          key={index}
          ref={(el) => (tabsRef.current[index] = el)}
          className={\`my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white \${activeTab2 === index ? "" : "hover:text-neutral-300"}\`}
          onClick={() => setActiveTab(index)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
`,
    },
  ]);
}
