"use client";
import Image from "next/image";
import Logo from "@/assets/subscribly.svg";
import { MoveRight } from "lucide-react";
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Image src={Logo} alt="Logo" width={150} height={50} priority />
      <div className="flex items-center gap-20">
        <div> Features</div>
        <div> Pricing</div>
      </div>
      <div className="flex items-center gap-14">
        <div>Login</div>
        <button className="rounded-4xl border px-2 items-center flex gap-2">
          
          Getting Started <MoveRight className="animate-arrow" size={20} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
