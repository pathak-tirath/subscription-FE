import { StaticImageData } from "next/image";

export interface ICards {
  image?: StaticImageData;
  title: string;
  description?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
}

export interface ICurrentUser {
  authenticated: boolean;
  user: ISignUp
}
