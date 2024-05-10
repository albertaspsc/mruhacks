import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

export default function Section({
  image,
  title,
  body,
  image_side,
  children,
}: {
  image: StaticImageData;
  title: string;
  body?: string;
  image_side?: "left" | "right";
  children?: ReactNode;
}) {
  // Allow for placing the image on the right side of the text, we default to
  // left if none is provided
  const image_side_style =
    image_side === "right"
      ? "lg:flex-row-reverse  lg:space-x-reverse"
      : "lg:flex-row";

  return (
    <div className="flex items-center justify-center">
      <div
        className={`max-w-7xl flex flex-col items-center ${image_side_style} 
        lg:space-x-5 space-y-5`}
      >
        <Image
          src={image}
          alt=""
          className="rounded-2xl shadow-2xl h-auto lg:max-w-[40%] w-[90%]"
        />

        <div className="p-5 bg-primary-700 rounded-xl ">
          <h1 className="text-xl sm:text-2xl font-bold text-secondary-200">
            {title}
          </h1>
          <p className="py-6 text-text-50">{body}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
