"use client";

import { GetCurrentUserFn } from "@/api/auth/auth";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { pathName } from "../_utils/enum";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isFetching } = GetCurrentUserFn();
  const router = useRouter();

  const isAuthenticated = data?.data?.authenticated;

  useLayoutEffect(() => {
    if (isAuthenticated && !isLoading && !isFetching) {
      router.replace(pathName.DASHBOARD);
    }
  }, [isAuthenticated, isFetching, isLoading, router]);

  if (isLoading || isFetching) return "Loading"; // TODO: Update here to full spinner
  if (isAuthenticated) return null;

  return <>{children}</>;
};

export default PublicRoute;
