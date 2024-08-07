import Image from "next/image";
import carousel_items from "@/assets/carousel_images";
import { ArrayElement } from "@/components/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CarouselImageTakes = ArrayElement<typeof carousel_items>;
const CarouselImage = ({ ...props }: CarouselImageTakes) => {
  return (
    <CarouselItem className="basis-[50vh]">
      {/*This is actually passed eslint is just stupid here*/}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...props}
        className="rounded-2xl"
        loading="lazy"
        placeholder="blur"
      />
      <p className="text-center px-10 pt-5 text-foreground">{props.legend}</p>
    </CarouselItem>
  );
};

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold text-center text-primary-content">
        Image Gallery
      </h1>
      <p className="text-center text-foreground/70 mt-2">
        Take a look at some of the images from our previous events!
      </p>
      <Carousel
        opts={{ loop: true }}
        className="p-10  rounded-2xl fade-out-left fade-out-right"
      >
        <CarouselContent>
          {carousel_items.map((item, key) => (
            <CarouselImage {...item} key={key} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-secondary text-base-100 " />
        <CarouselNext className="right-0 bg-secondary text-base-100" />
      </Carousel>
    </div>
  );
}
