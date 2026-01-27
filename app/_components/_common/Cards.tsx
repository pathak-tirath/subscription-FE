"use client";

import { ICards } from "@/app/_utils/types";
import Image, { StaticImageData } from "next/image";

const Cards = ({ image, title, description }: ICards) => {
  return (
    <div className="rounded-3xl  flex flex-col items-center p-4 w-full shadow-2xl shadow-gray-300 mt-8 bg-white hover:shadow-gray-600 hover:shadow-md ">
      <div className="w-full h-56 relative">
        <Image
          src={image as StaticImageData}
          fill
          objectFit="cover"
          alt="Image"
        />
      </div>

      <div className="text-xl pt-4 text-landing font-bold">{title}</div>
      <div className="text-2xs text-center w-xs pt-2 font-extralight  ">
        {description}
      </div>
    </div>
  );
};

export default Cards;
