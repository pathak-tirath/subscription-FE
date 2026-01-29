"use client";
import Image from "next/image";
import Logo from "@/assets/subscribly.png";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { pathName } from "@/app/_utils/enum";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();

  return (
    <div className="bg-neutral-50 escape">
      <div className="flex items-center justify-between pt-4 container ">
        <Link href={pathName.HOME}>
          {" "}
          <Image src={Logo} alt="Logo" width={180} priority />{" "}
        </Link>
        {[pathName.LOGIN, pathName.SIGNUP].includes(pathname) ? (
          <></>
        ) : (
          <>
            <div className="flex items-center gap-15">
              <div className="text-link text-lg "> Home</div>
              <div className="text-link text-lg"> Features</div>
              <div className="text-link text-lg"> Pricing</div>
            </div>
            <div className="flex items-center gap-10">
              <div className="text-lg cursor-pointer">
                {" "}
                <Link href={pathName.LOGIN}>Login</Link>
              </div>
              <Link href={pathName.SIGNUP}>
                {" "}
                <button className="rounded-4xl border py-2 px-4 items-center flex gap-2 bg-buttons text-white text-md cursor-pointer">
                  Getting Started{" "}
                  <MoveRight className="animate-arrow" size={20} />{" "}
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
