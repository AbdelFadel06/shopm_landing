import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "ShopM — Gestion de boutique : caisse, stocks, livraisons",
  description:
    "ShopM réunit la caisse, les stocks, les transferts, les livraisons et les rapports de vos boutiques dans une seule application, sur ordinateur comme sur téléphone.",
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
  keywords: "gestion boutique, logiciel caisse, gestion de stock, ventes, livraisons, Bénin",
  openGraph: {
    title: "ShopM — Gestion de boutique",
    description: "Caisse, stocks, livraisons et rapports dans une seule application.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={sans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
