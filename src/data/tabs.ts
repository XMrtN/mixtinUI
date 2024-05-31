import Tab from "@/components/icons/tab.astro";
import { TAB1 } from "./tabs/tab1";
import { TAB2 } from "./tabs/tab2";

export const tabs = {
  Icon: Tab,
  component: [
    {
      codes: TAB1,
    },
    {
      codes: TAB2,
    },
  ],
};
