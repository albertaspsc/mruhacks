import type { StaticImageData } from "next/image";

// Yay vim macros I hate writing code, there is not really a good way of doing
// this without codegen sorry
import img0 from "./carousel_image_0.jpg";
import img1 from "./carousel_image_1.jpg";
import img2 from "./carousel_image_2.jpg";
import img3 from "./carousel_image_3.jpg";
import img4 from "./carousel_image_4.jpg";
import img5 from "./carousel_image_5.jpg";
import img6 from "./carousel_image_6.jpg";

export interface CarouselItem {
  src: StaticImageData;
  alt: string;
  legend?: string; // Only if needed
}

const carouselItems: CarouselItem[] = [
  {
    src: img0,
    alt: "<Image 0 Alt Text>",
  },
  {
    src: img1,
    alt: "<Image 1 Alt Text>",
  },
  {
    src: img2,
    alt: "<Image 2 Alt Text>",
  },
  {
    src: img3,
    alt: "<Image 3 Alt Text>",
  },
  {
    src: img4,
    alt: "<Image 4 Alt Text>",
  },
  {
    src: img5,
    alt: "<Image 5 Alt Text>",
  },
  {
    src: img6,
    alt: "<Image 6 Alt Text>",
  },
].map((x) => ({ ...x, legend: x.alt }));

export default carouselItems;
