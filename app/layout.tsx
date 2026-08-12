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
  title: "Blend Align Cafe | Crave-worthy coffee, momos & more in Tiruvottiyur",
  description:
    "Blend Align Cafe in Tiruvottiyur, Chennai serves cold coffee, mojitos, steamed momos, pasta, milkshakes and more with dine-in, takeaway and delivery.",
  keywords: [
    "Blend Align Cafe",
    "cafe Tiruvottiyur",
    "cold coffee Chennai",
    "momos Chennai",
    "milkshakes Chennai",
    "pasta Tiruvottiyur",
  ],
  icons: [
    { rel: "icon", url: "/favicon.svg" },
    { rel: "apple-touch-icon", url: "/favicon.svg" },
  ],
  openGraph: {
    title: "Blend Align Cafe — Crave-worthy cafe in Tiruvottiyur, Chennai",
    description:
      "Premium neighbourhood cafe serving coffee, mojitos, momos, pasta and desserts in Tiruvottiyur with dine-in, takeaway and delivery.",
    type: "website",
    locale: "en_IN",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blend Align Cafe | Crave-worthy coffee, momos & more in Tiruvottiyur",
    description:
      "Premium neighbourhood cafe serving coffee, mojitos, momos, pasta and desserts in Tiruvottiyur with dine-in, takeaway and delivery.",
    images: ["/og-image.svg"],
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
