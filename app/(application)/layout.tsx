import React from "react";
import Sidebar from "../_components/_common/Sidebar";
import AppHeader from "../_components/appHeader/page";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <div className="flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">{children}</div>
      </div>
    </>
  );
}
