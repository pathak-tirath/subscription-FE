"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./globals.css";
import Header from "@/app/_components/header/page";
import Footer from "@/app/_components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Subscribly",
//   description: "Join, discover, and enjoy curated experiences monthly",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container`}
      >
        <QueryClientProvider client={queryClient}>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
