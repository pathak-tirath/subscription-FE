"use client";

import logo from "@/assets/subscribly.png"
import Image from "next/image";
const Footer = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col">
        <Image src={logo} width={200} alt="Logo" />
        <div className="text-2xl">Subscribly</div>

        <div></div>
      </div>

    </div>
  )
};

export default Footer;
