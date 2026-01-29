"use-client";

import Image from "next/image";
import demo from "@/assets/dummy_demo.png";
import Link from "next/link";
import { pathName } from "@/app/_utils/enum";
const HeroSection = () => {
  return (
    <div className="flex items-center  flex-col pt-20 max-h-155 overflow-hidden bg-neutral-50 escape">
      <div className="rounded-full border-2 py-2 px-4  text-3xl text-landing bg-white shadow-xl">
        Subscription Made Simple
      </div>
      <div className="text-5xl text-landing font-bold mt-10">
        Take Control of Your Subscriptions
      </div>
      <div className="max-w-3xl text-center font-light text-lg mt-4 text-landing">
        Subscribly helps you track, organize, and manage subscriptions in one
        central dashboard. Avoid forgotten renewals, gain full cost
        transparency, and stay in control of recurring expenses
      </div>

      <div className="flex gap-6 mt-6">
        <Link href={pathName.SIGNUP}>
          {" "}
          <button className="border rounded-full py-2 px-4 text-lg bg-buttons text-white cursor-pointer">
            Get Started
          </button>
        </Link>
        <button className="border rounded-full py-2 px-4 text-lg cursor-pointer">
          Know More
        </button>
      </div>

      <div className="mt-4">
        <Image src={demo} alt="demo" width={750} />
      </div>
    </div>
  );
};

export default HeroSection;
