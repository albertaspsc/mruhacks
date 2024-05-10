import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import React from "react";

export default async function Sponsors() {
  const imageDirectory = path.join(process.cwd(), "/public/sponsors/");
  const imageFilenames = await fs.readdir(imageDirectory);

  const StyledImage = ({ filename }: { filename: string }) => {
    return (
      <Image
        src={`/sponsors/${filename}`}
        alt="Department of Mathematics and Computing"
        width={500}
        height={500}
      />
    );
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-primary-700 text-center">
        Our Sponsors
      </h1>
      <div className="flex flex-col items-center">
        <p className="md:text-xl font-medium text-text text-center text-text-800">
          MRUHacks would be impossible without our fantastic sponsors!
        </p>
        <div className="btn bg-primary-300 lg:text-xl text-text-50 m-auto">
          <a href="mailto:outreach@mruhacks.ca">Become a Sponsor!</a>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 p-5 gap-5 items-center justify-center">
        {imageFilenames.map((filename, key) => (
          <StyledImage key={key} filename={filename}></StyledImage>
        ))}
      </div>
    </div>
  );
}
