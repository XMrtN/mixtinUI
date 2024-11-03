import { createContext, useContext, useEffect, useRef, useState } from "react";

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
          className={`size-6 ${open ? "hidden" : ""}`}
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
          className={`size-6 ${open ? "" : "hidden"}`}
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
