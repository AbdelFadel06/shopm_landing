import { faq } from "@/lib/faq";
import { EMAIL, SITE_URL, WHATSAPP_E164 } from "@/lib/site";

// Données structurées schema.org : décrivent ShopM aux moteurs de recherche.
const areaServed = [
  "Cotonou", "Abomey-Calavi", "Porto-Novo", "Parakou", "Bénin",
  "Togo", "Côte d’Ivoire", "Sénégal", "Burkina Faso", "Niger", "Mali", "Cameroun", "Gabon",
];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ShopM",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      email: EMAIL,
      address: { "@type": "PostalAddress", addressLocality: "Cotonou", addressCountry: "BJ" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: WHATSAPP_E164,
        contactType: "sales",
        areaServed: ["BJ", "TG", "CI", "SN", "BF", "NE", "ML", "CM", "GA"],
        availableLanguage: "French",
      },
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Logiciel personnalisé sur mesure",
          description: "Module spécifique pour ShopM ou logiciel de gestion développé selon les besoins de l’entreprise.",
          areaServed: ["Bénin", "Afrique francophone"],
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "ShopM",
      inLanguage: "fr",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "ShopM",
      url: `${SITE_URL}/`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Logiciel de gestion commerciale, de stock et de caisse",
      operatingSystem: "Web, Android, iOS",
      inLanguage: "fr",
      description:
        "Logiciel de gestion commerciale pour boutiques : suivi de stock en boutique et en magasin, alertes de rupture et de stock bas, caisse, ventes et livraisons, inventaires et rapports.",
      featureList: [
        "Suivi de stock en boutique et en magasin",
        "Alertes de rupture et de stock bas",
        "Caisse et sessions de caisse",
        "Ventes et livraisons",
        "Inventaires avec écarts",
        "Transferts entre boutiques",
        "Rapports journaliers et par période",
        "Gestion des rôles des employés",
      ],
      screenshot: `${SITE_URL}/og.jpg`,
      areaServed: areaServed.map((name) => ({ "@type": "Place", name })),
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // Contenu statique écrit par nous : pas de donnée externe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
