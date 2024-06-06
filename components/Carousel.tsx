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
    <CarouselItem
      className="flex justify-center items-center flex-col 
                            basis-[50vh] max-w-[100vw]
                            "
    >
      {/*This is actually passed eslint is just stupid here*/}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} className=" rounded-2xl " />
      <p>{props.legend}</p>
    </CarouselItem>
  );
};

export default function Home() {
  return (
    <Carousel opts={{ loop: true }} className="text-base-100">
      <CarouselContent>
        {carousel_items.map((item, key) => (
          <CarouselImage {...item} key={key} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 bg-secondary " />
      <CarouselNext className="right-0 bg-secondary" />
    </Carousel>
  );
}
