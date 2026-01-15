"use client";
import Image from "next/image";
import Logo from "@/assets/subscribly.png";
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Image src={Logo} alt="Logo" />
      <div>
        <div> Features</div>
        <div> Pricing</div>
      </div>
      <div>
        <div>Login</div>
        <button>Getting Started</button>
      </div>
    </div>
  );
};

export default Header;
