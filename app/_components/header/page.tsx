"use client";
import Image from "next/image";
import Logo from "@/assets/subscribly.png";
import { MoveRight } from "lucide-react";
const Header = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <Image src={Logo} alt="Logo" width={180}  priority />
      <div className="flex items-center gap-15 text-xl">
        <div className="text-link"> Home</div>
        <div className="text-link"> Features</div>
        <div className="text-link"> Pricing</div>
      </div>
      <div className="flex items-center gap-10 text-xl">
        <div className="text-xl">Login</div>
        <button className="rounded-4xl border py-2 px-4 items-center flex gap-2 bg-buttons text-white">
          
          Getting Started <MoveRight className="animate-arrow" size={20} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
