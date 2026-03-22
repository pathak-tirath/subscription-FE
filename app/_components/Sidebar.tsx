"use client"
import Image from "next/image";
import { sidebar } from "../_utils/sidebar";

const Sidebar = () => {
  return (
    <div className="border-r-2">
      {sidebar.map((item,key) => (
        <div key={key} className="items-center gap-4 flex">
          <Image src={item.icon} alt="icon" />
          <div className="text-2xl">{item.title}</div>
        </div>
      ))}
    </div>
  );
};
export default Sidebar;
