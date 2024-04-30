export const TAB1 = [
  {
    title: "HTML + TailwindCSS + JS",
    code: `<div
  id="tabs1"
  class="flew-row relative mx-auto flex h-12 overflow-hidden rounded-3xl border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm"
>
  <span
    id="activeTab1"
    class="absolute bottom-0 left-0 top-0 -z-10 flex w-0 overflow-hidden rounded-3xl py-2 transition-[left,width] duration-300"
  >
    <span class="h-full w-full rounded-3xl bg-gray-200/30"></span>
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
  const tabs = document.querySelectorAll("#tabs1 button");
  const activeTab = document.querySelector("#activeTab1");

  const setTabPosition = (e) => {
    let el = e ? e.target : tabs[0];
    activeTab?.setAttribute(
      "style",
      \`left: \${el.offsetLeft}px; width: \${el.offsetWidth}px\`
    );

    tabs.forEach((tab) => {
      tab.classList.toggle("hover:text-neutral-300", tab !== el);
    });
  };

  setTabPosition();

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      setTabPosition(e);
    });
  });
</script>
`,
  },
  {
    title: "React + TailwindCSS",
    code: `import { useEffect, useRef, useState } from "react";

let tabs = [
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
  const [activeTab, setActiveTab] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTab === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTab];
      setTabUnderlineLeft(currentTab.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTab]);

  return (
    <div className="flew-row relative mx-auto flex h-12 overflow-hidden rounded-3xl border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 left-0 top-0 -z-10 flex w-0 overflow-hidden rounded-3xl py-2 transition-[left,width] duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-gray-200/30" />
      </span>
      {tabs.map((tab, index) => (
        <button
          key={index}
          ref={(el) => (tabsRef.current[index] = el)}
          className={\`my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white \${activeTab === index ? "" : "hover:text-neutral-300"}\`}
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
];
