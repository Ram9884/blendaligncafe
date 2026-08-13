import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Cafe Website Template & Demo",
  description:
    "A customizable premium website template for modern cafes and restaurants. Features high-fidelity design system, interactive menu, and clean layout.",
  keywords: [
    "cafe template",
    "restaurant website",
    "cafe website demo",
    "premium cafe layout",
    "nextjs cafe template",
  ],
  icons: [
    { rel: "icon", url: "/favicon.svg" },
    { rel: "apple-touch-icon", url: "/favicon.svg" },
  ],
  openGraph: {
    title: "Premium Cafe Website Template & Demo",
    description:
      "A customizable premium website template for modern cafes and restaurants. Features high-fidelity design system, interactive menu, and clean layout.",
    type: "website",
    locale: "en_US",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Cafe Website Template & Demo",
    description:
      "A customizable premium website template for modern cafes and restaurants. Features high-fidelity design system, interactive menu, and clean layout.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-cream text-dark font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
