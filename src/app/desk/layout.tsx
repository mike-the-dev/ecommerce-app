import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";
import { NextUIProvider } from '@nextui-org/react';
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <div className="flex items-start justify-between">
            <Sidebar />
            <main className="w-full h-full">
              {children}
            </main>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
