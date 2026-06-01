import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layouts/navbar";
import "./globals.css";

const trebuchet = localFont({
  src: [
    {
      path: "../assets/fonts/trebuchet-ms-2/trebuc.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/trebuchet-ms-2/Trebuchet-MS-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-trebuchet",
});

export const metadata: Metadata = {
  title: "Pointab | Premium Web Experiences",
  description: "Crafting beautiful, high-performance web applications with a focus on design and user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${trebuchet.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
