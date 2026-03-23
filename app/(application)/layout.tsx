import React from "react";
import Sidebar from "../_components/Sidebar";
import AppHeader from "../_components/appHeader/page";
import ProtectedRoute from "../_components/ProtectedRoute";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex">
        <div className="w-[15%]">
          <Sidebar />
        </div>

        <div className="w-[85%]">
          <AppHeader />
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}
