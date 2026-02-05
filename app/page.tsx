"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HeroSection from "./_components/(landing)/hero/page";
import WhyChooseUsSection from "./_components/(landing)/whyChooseUs/page";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HeroSection />
      <WhyChooseUsSection />
    </QueryClientProvider>
  );
}
