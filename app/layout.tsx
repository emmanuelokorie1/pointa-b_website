import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layouts/navbar";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import YourDeliveries from "./(pages)/(Home)/YourDeliveries";
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
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Point A2B | On-Demand Delivery & Logistics Platform",
    template: "%s | Point A2B"
  },
  description: "Point A2B is the ultimate local delivery and logistics platform. Send items across town, track packages in real-time, or get on-demand delivery for your business.",
  keywords: ["Logistics", "On-Demand Delivery", "Local Delivery", "Courier Service", "Point A2B", "Package Tracking", "Merchant Delivery"],
  authors: [{ name: "Point A2B" }],
  openGraph: {
    title: "Point A2B | On-Demand Delivery & Logistics Platform",
    description: "Send anything across town or order from local merchants with fast, reliable, on-time logistics and real-time tracking.",
    url: "https://pointab.com",
    siteName: "Point A2B",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Point A2B | On-Demand Delivery & Logistics Platform",
    description: "Send anything across town or order from local merchants with fast, reliable, on-time logistics and real-time tracking.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${trebuchet.variable}`} suppressHydrationWarning>
      <head>
        {/* Non-blocking async Google Fonts load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ReactQueryProvider>
          <Navbar />
          {children}
          <YourDeliveries />
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}



