import React from "react";
import Sidebar from "../_components/Sidebar";
import AppHeader from "../_components/appHeader/page";
import ProtectedRoute from "../_components/ProtectedRoute";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <AppHeader />
      <div className="flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">{children}</div>
      </div>
    </ProtectedRoute>
  );
}
