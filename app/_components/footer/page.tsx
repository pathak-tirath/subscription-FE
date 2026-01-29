"use client";

import logo from "@/assets/subscribly.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="py-4 mt-16 escape bg-black text-white ">
      <div className="flex justify-between container">
        <div className="flex flex-col">
          <Image src={logo} width={200} alt="Logo" className="bg-white" />
          <div className="text-lg pl-2 pt-2">Manage your subscriptions</div>
          <div className="flex gap-5 items-center mt-4">
            <Link href={"/"}>
              <Twitter size={28} />
            </Link>
            <Link href={"/"}>
              <Instagram size={28} />
            </Link>
            <Link href={"/"}>
              <Facebook size={28} />
            </Link>
            <Link href={"/"}>
              <Youtube size={28} />
            </Link>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <div className="text-2xl">Features</div>
          <div className="text-md">Manage subscriptions</div>
          <div className="text-md">Spending Insights</div>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <div className="text-2xl">About</div>
          <div className="text-md">About Us</div>
          <div className="text-md">FAQS</div>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <div className="text-2xl">Support</div>
          <div className="text-md">Privacy Policy</div>
          <div className="text-md">Terms & Condition</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
