import type { StaticImageData } from "next/image";

// Yay vim macros I hate writing code, there is not really a good way of doing
// this without codegen sorry
import img1 from "./carousel_image_1.jpg";
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
    src: img1,
    alt: "Four young men standing together indoors, three of them smiling and one giving thumbs up. A laptop and water bottle on the table in front of them.",
  },
  {
    src: img3,
    alt: "Speaker presenting a keynote at MRU Hacks event, with a large screen displaying 'MRU HACKS' and an image of a cashier.",
  },
  {
    src: img5,
    alt: "Group discussion with five people, one woman speaking, and four others listening attentively. Background shows digital displays.",
  },
  {
    src: img6,
    alt: "Four young men posing for a photo together indoors. Three of them are smiling and one is holding a laptop displaying their project.",
  },
  {
    src: img7,
    alt: "Three young men posing with a laptop displaying a project, all smiling indoors at the event.",
  },
  {
    src: img8,
    alt: "Three young men standing together, one in a yellow shirt, another in a hoodie, and the third in a cap and glasses. They are smiling and posing indoors at the event.",
  },
  {
    src: img9,
    alt: "Wide view of the hackathon event space with several groups of participants interacting and discussing projects.",
  },
  {
    src: img11,
    alt: "Participants sitting and attentively listening during a presentation, one of them asking a question.",
  },
  {
    src: img12,
    alt: "Group of hackathon participants posing with goodie bags, wearing sunglasses and smiling indoors.",
  },
].map((x) => ({ ...x, legend: x.alt }));

export default carouselItems;
