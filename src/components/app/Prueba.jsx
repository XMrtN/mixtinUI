import { useEffect, useRef, useState } from "react";

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

export default function Prueba() {
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
          className={`my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white ${activeTab === index ? "" : "hover:text-neutral-300"}`}
          onClick={() => setActiveTab(index)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
