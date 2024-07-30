"use client";

import { ReactNode } from "react";
import "./globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <title>Star Wars Heroes</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="text-m text-[#c8c8c8] bg-[#272b30] font-semibold">
        <div className="h-screen py-4">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
