export const TAB2 = [
  {
    title: "HTML + TailwindCSS + JS",
    code: `<div
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
  },
  {
    title: "HTML + CSS + JS",
    code: `<div id="tabs2">
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
  },
  {
    title: "React + TailwindCSS",
    code: `import { useEffect, useRef, useState } from "react";

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
];
