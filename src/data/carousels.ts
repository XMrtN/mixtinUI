import Carousel from "@/components/icons/carousel.astro";
import { CAROUSEL1 } from "./carousels/carousel1";
import { CAROUSEL2 } from "./carousels/carousel2";

export const carousels = {
  Icon: Carousel,
  component: [
    {
      codes: CAROUSEL1,
    },
    {
      codes: CAROUSEL2,
    },
  ],
};
