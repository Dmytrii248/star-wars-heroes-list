"use client";

import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";
const geistSans = localFont({
  src: "./public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <title>Star Wars Heroes</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-m text-[#c8c8c8] bg-[#272b30] font-semibold`}
      >
        <div className="h-screen">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
