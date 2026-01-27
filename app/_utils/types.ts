import { StaticImageData } from "next/image";

export interface ICards {
  image?: StaticImageData;
  title: string;
  description?: string;
}
