"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Dois-je avoir une connexion internet pour utiliser ShopM ?",
    a: "ShopM fonctionne en ligne. Une connexion internet est nécessaire pour synchroniser les données. Nous travaillons sur un mode hors-ligne pour les zones à connectivité limitée.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Vos données vous appartiennent. Elles sont hébergées sur votre propre serveur ou sur notre infrastructure sécurisée en Europe. Aucune revente, aucun partage tiers. Vous pouvez exporter et télécharger vos données à tout moment.",
  },
  {
    q: "Que se passe-t-il si je ne renouvelle pas l'abonnement ?",
    a: "En cas de non-renouvellement, votre accès à l'application est suspendu mais vos données sont conservées et exportables. La licence est acquise définitivement — vous pouvez réactiver votre boutique dès que vous reprenez l'abonnement.",
  },
  {
    q: "Puis-je ajouter une boutique supplémentaire plus tard ?",
    a: "Oui. Chaque boutique supplémentaire est facturée 75 000 F CFA par an. La licence reste la même — vous ne la payez qu'une seule fois.",
  },
  {
    q: "La formation est-elle vraiment incluse ?",
    a: "Oui. Une session de formation pratique avec votre équipe est incluse dans tous les plans. Elle est réalisée en présentiel ou à distance selon votre préférence.",
  },
  {
    q: "Combien d'employés puis-je créer ?",
    a: "Il n'y a pas de limite au nombre d'employés, caissiers ou livreurs que vous pouvez créer. Le prix dépend uniquement du nombre de boutiques.",
  },
  {
    q: "ShopM peut-il remplacer mon logiciel de caisse actuel ?",
    a: "Oui. ShopM est conçu pour être un point de vente complet. Si vous utilisez actuellement un tableur ou un logiciel basique, la migration est simple et nous vous accompagnons dans le transfert de vos données produits.",
  },
  {
    q: "Y a-t-il une période d'essai ?",
    a: "Nous proposons une démonstration complète sur votre cas d'usage réel — avec vos produits et votre équipe. Contactez-nous pour organiser une session sans engagement.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-brand-pale text-brand text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-black text-primary mb-4">Questions fréquentes</h2>
          <p className="text-muted">Vous ne trouvez pas votre réponse ? Écrivez-nous directement.</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                open === i ? "border-brand shadow-sm" : "border-border"
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white hover:bg-surface transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-primary text-sm pr-2">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 bg-white">
                  <p className="text-muted text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
