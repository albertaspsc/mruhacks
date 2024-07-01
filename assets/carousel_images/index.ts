import type { StaticImageData } from "next/image";

// Yay vim macros I hate writing code, there is not really a good way of doing
// this without codegen sorry
import img3 from "./carousel_image_3.jpg";
import img5 from "./carousel_image_5.jpg";
import img6 from "./carousel_image_6.jpg";
import img7 from "./carousel_image_7.jpg";
import img8 from "./carousel_image_8.jpg";
import img9 from "./carousel_image_9.jpg";
import img11 from "./carousel_image_11.jpg";
import img12 from "./carousel_image_12.jpg";

export interface CarouselItem {
  src: StaticImageData;
  alt: string;
  legend?: string; // Only if needed
}

const carouselItems: CarouselItem[] = [
  {
    src: img3,
    alt: "The Showpass CEO presenting the opening keynote to participants.",
  },
  {
    src: img5,
    alt: "A hackathon team pitching their project to the judges.",
  },
  {
    src: img6,
    alt: "A proud team of hackathon participants posing with their project.",
  },
  {
    src: img7,
    alt: "The MRUHacks 2023 winning team posing with their project.",
  },
  {
    src: img8,
    alt: "A group of hackathon participants posing with their project.",
  },
  {
    src: img9,
    alt: "The MRUHacks 2023 final presentations taking place.",
  },
  {
    src: img11,
    alt: "MRUHacks 2023 participants waiting for the final results.",
  },
  {
    src: img12,
    alt: "Some happy hackathon participants posing with their prizes.",
  },
].map((x) => ({ ...x, legend: x.alt }));

export default carouselItems;
