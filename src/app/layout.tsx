import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopM — Logiciel de gestion commerciale pour boutiques",
  description:
    "ShopM simplifie la gestion de vos ventes, stocks, livraisons et rapports. Conçu pour les commerçants africains qui veulent piloter leur activité sans prise de tête.",
  keywords: "gestion boutique, logiciel caisse, stock, ventes, livraisons, Bénin, Afrique",
  openGraph: {
    title: "ShopM — Gestion commerciale simple et efficace",
    description: "Gérez vos ventes, stocks et livraisons depuis une seule application.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
