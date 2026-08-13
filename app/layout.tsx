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
  title: "Blend Align Cafe | Coffee, Momos & More — Tiruvottiyur, Chennai",
  description:
    "Blend Align Cafe in Tiruvottiyur, Chennai serves premium cold coffee, mojitos, steamed momos, pasta, milkshakes and more. Dine-in, takeaway, and delivery available.",
  keywords: [
    "cafe tiruvottiyur",
    "blend align cafe",
    "cold coffee chennai",
    "momos tiruvottiyur",
    "milkshake cafe chennai",
    "pasta cafe tiruvottiyur",
  ],
  openGraph: {
    title: "Blend Align Cafe — Where Cravings Meet Their Match",
    description:
      "Premium cafe in Tiruvottiyur, Chennai. Coffee, momos, mojitos, pasta & more.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-dark font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
