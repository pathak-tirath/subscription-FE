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

export interface ISubscription {
  serviceName: string;
  price: number;
  billingCycle: string;
  category: string;
  nextBillingDate: string;
  status: string;
}


export interface IUpcomingPayments {
  icon?:string;
  title:string;
  category:string;
  duration:string,
  price:number;
  nextBillingDate:Date;
}