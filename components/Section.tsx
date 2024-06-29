import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface SectionParams {
  image: StaticImageData;
  title: string;
  body?: string;
  image_side?: "left" | "right";
  children?: ReactNode;
}

export default function Section({
  image,
  title,
  body,
  image_side,
  children,
}: SectionParams) {
  // Allow for placing the image on the right side of the text, we default to
  // left if none is provided
  const image_side_style = image_side === "right" ? "md:order-last" : "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center ">
      <Image
        src={image}
        alt=""
        className={`rounded-2xl shadow-2xl h-auto ${image_side_style}`}
      />
      <div className="p-5 rounded-xl h-min text-neutral">
        <h1 className="font-bold text-2xl sm:text-2xl lg:text-3xl text-primary-content">
          {title}
        </h1>
        <p className="py-6 leading-8 text-black text-lg">{body}</p>
        {children}
      </div>
    </div>
  );
}
