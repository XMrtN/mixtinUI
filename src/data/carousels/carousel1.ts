export const CAROUSEL1 = [
  {
    title: "HTML + TailwindCSS + JS",
    code: `<section id="slider1" class="w-full">
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
      <li class="grid h-80 w-64 place-items-center bg-neutral-500 text-white lg:h-96 lg:w-80">
        ITEM 1
      </li>
      <li class="grid h-80 w-64 place-items-center bg-neutral-500 text-white lg:h-96 lg:w-80">
        ITEM 2
      </li>
      <li class="grid h-80 w-64 place-items-center bg-neutral-500 text-white lg:h-96 lg:w-80">
        ITEM 3
      </li>
      <li class="grid h-80 w-64 place-items-center bg-neutral-500 text-white lg:h-96 lg:w-80">
        ITEM 4
      </li>
      <li class="grid h-80 w-64 place-items-center bg-neutral-500 text-white lg:h-96 lg:w-80">
        ITEM 5
      </li>
      <li class="grid h-80 w-64 place-items-center bg-neutral-500 text-white lg:h-96 lg:w-80">
        ITEM 6
      </li>
      <li class="grid h-80 w-64 place-items-center bg-neutral-500 text-white lg:h-96 lg:w-80">
        ITEM 7
      </li>
      <li class="grid h-80 w-64 place-items-center bg-neutral-500 text-white lg:h-96 lg:w-80">
        ITEM 8
      </li>
      <li class="grid h-80 w-64 place-items-center bg-neutral-500 text-white lg:h-96 lg:w-80">
        ITEM 9
      </li>
      <li class="grid h-80 w-64 place-items-center bg-neutral-500 text-white lg:h-96 lg:w-80">
        ITEM 10
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
  },
  {
    title: "HTML + CSS + JS",
    code: `<section id="slider1">
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
      <li class="image-item">ITEM 1</li>
      <li class="image-item">ITEM 2</li>
      <li class="image-item">ITEM 3</li>
      <li class="image-item">ITEM 4</li>
      <li class="image-item">ITEM 5</li>
      <li class="image-item">ITEM 6</li>
      <li class="image-item">ITEM 7</li>
      <li class="image-item">ITEM 8</li>
      <li class="image-item">ITEM 9</li>
      <li class="image-item">ITEM 10</li>
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
    display: grid;
    width: 20rem;
    height: 24rem;
    place-items: center;
    background-color: #737373;
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
];
