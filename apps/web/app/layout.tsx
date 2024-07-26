import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Star Wars Heroes",
  description:
    "Application to show all the Star Wars characters, Films, and ships where heroes were",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-m text-[#c8c8c8] bg-[#272b30] font-semibold`}
      >
        <div className="h-screen">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
