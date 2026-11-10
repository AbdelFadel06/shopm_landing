import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const TITLE = "ShopM — Logiciel de gestion de stock, caisse et inventaire au Bénin";
const DESCRIPTION =
  "Logiciel de gestion commerciale pour boutiques à Cotonou, Abomey-Calavi et partout au Bénin : suivi de stock en boutique et en magasin, alertes de rupture, caisse, inventaire et rapports. Démo gratuite.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — ShopM" },
  description: DESCRIPTION,
  applicationName: "ShopM",
  keywords: [
    "logiciel de gestion commerciale",
    "logiciel de gestion de stock",
    "logiciel de caisse",
    "gestion de stock boutique",
    "suivi de caisse",
    "inventaire",
    "gestion de magasin",
    "logiciel boutique Cotonou",
    "logiciel gestion Abomey-Calavi",
    "logiciel de gestion Bénin",
    "Afrique francophone",
    "FCFA",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "ShopM",
    title: TITLE,
    description: DESCRIPTION,
    locale: "fr_FR",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "ShopM, logiciel de gestion de stock et de caisse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  other: {
    "geo.region": "BJ-LI",
    "geo.placename": "Cotonou",
  },
};

export const viewport: Viewport = { themeColor: "#1D4ED8" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={sans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
