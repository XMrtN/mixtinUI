import Accordion from "@/components/icons/accordion.astro";
import Button from "@/components/icons/button.astro";
import Carousel from "@/components/icons/carousel.astro";
import Down from "@/components/icons/down.astro";
import Slash from "@/components/icons/slash.astro";
import Square from "@/components/icons/square.astro";
import Tab from "@/components/icons/tab.astro";
import {
  Accordions,
  Breadcrumbs,
  Buttons,
  Carousels,
  Dropdowns,
  Modals,
  Tabs,
} from "astro:db";

export const Schemas = {
  accordions: {
    Icon: Accordion,
    schema: Accordions,
  },
  breadcrumbs: {
    Icon: Slash,
    schema: Breadcrumbs,
  },
  buttons: {
    Icon: Button,
    schema: Buttons,
  },
  carousels: {
    Icon: Carousel,
    schema: Carousels,
  },
  dropdowns: {
    Icon: Down,
    schema: Dropdowns,
  },
  modals: {
    Icon: Square,
    schema: Modals,
  },
  tabs: {
    Icon: Tab,
    schema: Tabs,
  },
};
