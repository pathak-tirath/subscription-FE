"use client";

import { ICards } from "@/app/_utils/types";
import Image from "next/image";

const Cards = ({ image, title, subTitle }: ICards) => {
  return (
    <div className="rounded-md border">
      <Image src={image as string} alt="Image" />
      <div>{title}</div>
      <div>{subTitle}</div>
    </div>
  );
};

export default Cards;
