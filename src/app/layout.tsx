import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "ShopM — Suivi de stock et caisse pour boutiques",
  description:
    "Suivez votre stock en boutique et en magasin, recevez les alertes de rupture et de stock bas, enregistrez toutes vos ventes et livraisons. ShopM, sur ordinateur et téléphone.",
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
  keywords: "gestion boutique, logiciel caisse, gestion de stock, ventes, livraisons, Bénin",
  openGraph: {
    title: "ShopM — Suivi de stock et caisse",
    description: "Sachez exactement ce qui entre et sort de votre stock.",
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
