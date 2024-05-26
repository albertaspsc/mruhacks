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
  const image_side_style =
    image_side === "right" ? "order-last" : "lg:flex-row";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center ">
      <Image
        src={image}
        alt=""
        className={`rounded-2xl shadow-2xl h-auto ${image_side_style}`}
      />
      <div className="p-5 bg-primary-700 rounded-xl h-min bg-primary-content text-neutral">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="py-6 text-text-50  ">{body}</p>
        {children}
      </div>
    </div>
  );
}
