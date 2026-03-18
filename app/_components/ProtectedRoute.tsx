"use client";

import { GetCurrentUserFn } from "@/api/auth/auth";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isFetching } = GetCurrentUserFn();
  const router = useRouter();

  const isAuthenticated = data?.data?.authenticated;

  useLayoutEffect(() => {
    if (!isAuthenticated && !isLoading && !isFetching) {
      router.replace("/login");
    }
  }, [isAuthenticated, isFetching, isLoading, router]);

  if (isLoading || isFetching) return "Loading"; // TODO: Update here to full spinner
  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
