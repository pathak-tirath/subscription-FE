"use client";

import Image from "next/image";
import { insightsSidebar } from "./sidebar/insights";
import { sidebarMain } from "./sidebar/main";
import { settingsSidebar } from "./sidebar/settings";

import Logo from "@/assets/subscribly.png";

const Sidebar = () => {
  return (
    <div className="border-r-2 border-neutral-200 bg-neutral-100 h-screen">
      <Image src={Logo} alt="logo" width={200} className="mx-auto py-2" />

      <div className="px-6 flex flex-col gap-6 pt-10">
        <div>
          <div className="text-sm font-light text-gray-700">MAIN</div>
          {sidebarMain.map((item, key) => {
            return (
              <div key={key} className="items-center gap-4 flex py-2">
                <div> {item.icon}</div>
                <div className="text-xl">{item.title}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="text-sm font-light text-gray-700">INSIGHTS</div>
          {insightsSidebar.map((item, key) => {
            return (
              <div key={key} className="items-center gap-4 flex py-2">
                <div> {item.icon}</div>
                <div className="text-xl">{item.title}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="text-sm font-light text-gray-700">ACCOUNTS</div>
          {settingsSidebar.map((item, key) => {
            return (
              <div key={key} className="items-center gap-4 flex py-2">
                <div> {item.icon}</div>
                <div className="text-xl">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
