import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { STORE_CONFIG } from "@/config/store";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "THE BLACK COLLECTION — Men's Wear Dabra | Jeans, Shirts, Tees & Lowers",
  description:
    "Official website of THE BLACK COLLECTION 2025 (Dabra). Trending Men's Wear, Boxy Fit Shirts, Drop-Shoulder Tees, Denim Jeans & Lowers. Pan India Delivery & WhatsApp Ordering.",
  keywords: [
    "The Black Collection Dabra",
    "theblackcollection2025",
    "Men's Wear Dabra",
    "Boxy Fit Shirts Dabra",
    "Men's Jeans Dabra",
    "Men's Lowers and Trousers",
    "Pan India Delivery Menswear",
    "WhatsApp Clothing Store Dabra",
  ],
  authors: [{ name: STORE_CONFIG.name }],
  metadataBase: new URL("https://theblackcollection2025.com"),
  openGraph: {
    title: "THE BLACK COLLECTION 2025 — Luxury Streetwear & Apparel",
    description:
      "Curated monochrome streetwear, oversized tees, bespoke jackets, and luxury dresses. Enquire directly on WhatsApp.",
    url: "https://theblackcollection2025.com",
    siteName: STORE_CONFIG.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "The Black Collection 2025 Luxury Lookbook",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE BLACK COLLECTION 2025",
    description:
      "Luxury monochrome apparel and high-density streetwear drops.",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${jakarta.variable} antialiased bg-zinc-950 text-zinc-100 min-h-screen`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
