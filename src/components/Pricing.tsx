"use client";
import { useState } from "react";

const fmt = (n: number) => n.toLocaleString("fr-FR");

const plans = [
  {
    name: "Starter",
    tagline: "1 boutique",
    icon: "🏪",
    color: "border-border",
    badge: null,
    year1: 225_000,
    yearN: 75_000,
    year1Detail: "150 000 F licence + 75 000 F abonnement",
    yearNDetail: "Abonnement annuel uniquement",
    features: [
      "1 boutique / point de vente",
      "Caisse & enregistrement des ventes",
      "Gestion du stock (boutique + magasin)",
      "Module livraisons & livreurs",
      "Rapports journaliers imprimables",
      "Historique mensuel",
      "Gestion des employés et caissiers",
      "Sessions de caisse",
      "Formation incluse",
      "Support email & téléphone",
    ],
    cta: "Démarrer avec Starter",
    ctaStyle: "bg-primary text-white hover:bg-primary/90",
  },
  {
    name: "Multi-boutiques",
    tagline: "2 boutiques",
    icon: "🏬",
    color: "border-brand ring-2 ring-brand/30",
    badge: "Le plus populaire",
    year1: 300_000,
    yearN: 150_000,
    year1Detail: "150 000 F licence + 75 000 F × 2 boutiques",
    yearNDetail: "75 000 F / boutique / an",
    features: [
      "Tout ce qui est inclus dans Starter",
      "2 boutiques / points de vente",
      "Basculement instantané entre boutiques",
      "Données cloisonnées par boutique",
      "Vue consolidée multi-boutiques",
      "Affectation d'employés entre boutiques",
      "Rapports par boutique",
    ],
    cta: "Choisir Multi-boutiques",
    ctaStyle: "bg-brand text-white hover:bg-brand-light shadow-lg shadow-brand/30",
  },
  {
    name: "Sur mesure",
    tagline: "3+ boutiques",
    icon: "🏢",
    color: "border-border",
    badge: null,
    year1: null,
    yearN: null,
    year1Detail: "75 000 F / boutique / an (abonnement)",
    yearNDetail: "Licence unique, abonnements au prorata",
    features: [
      "Tout ce qui est inclus dans Multi-boutiques",
      "3 boutiques et plus",
      "Tarification dégresssive dès 3 boutiques",
      "Intégrations personnalisées",
      "Formation avancée sur site",
      "Support prioritaire dédié",
      "SLA garanti",
    ],
    cta: "Nous contacter",
    ctaStyle: "bg-surface text-primary border border-border hover:bg-border",
  },
];

export default function Pricing() {
  const [year, setYear] = useState<"1" | "n">("1");

  return (
    <section id="tarifs" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-brand-pale text-brand text-sm font-semibold rounded-full mb-4">
            Tarification transparente
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-5 leading-tight">
            Un prix clair.{" "}
            <span className="text-gradient">Aucune surprise.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Licence unique + abonnement annuel par boutique. Pas de frais cachés, pas de commission sur vos ventes.
          </p>
        </div>

        {/* Year toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white border border-border rounded-xl p-1 shadow-sm">
            {[
              { key: "1", label: "Première année" },
              { key: "n", label: "Années suivantes" },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setYear(opt.key as "1" | "n")}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  year === opt.key
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted hover:text-primary"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 flex flex-col`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-brand text-white text-xs font-bold rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className="text-3xl mb-3">{plan.icon}</div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                </div>
                <p className="text-muted text-sm">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-border">
                {plan.year1 !== null ? (
                  <>
                    <div className="flex items-end gap-1 mb-1">
                      <span className="text-4xl font-black text-primary">
                        {fmt(year === "1" ? plan.year1 : plan.yearN!)}
                      </span>
                      <span className="text-muted text-sm mb-1.5">F CFA / an</span>
                    </div>
                    <p className="text-muted text-xs">
                      {year === "1" ? plan.year1Detail : plan.yearNDetail}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-3xl font-black text-primary mb-1">Sur devis</div>
                    <p className="text-muted text-xs">{year === "1" ? plan.year1Detail : plan.yearNDetail}</p>
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                    <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 bg-white border border-border rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-brand-pale rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <p className="text-sm text-primary font-semibold mb-1">Comment fonctionne la licence ?</p>
            <p className="text-sm text-muted">
              La licence de <strong>150 000 F CFA</strong> est un paiement unique. Elle vous donne accès à ShopM pour toujours.
              L&apos;abonnement annuel de <strong>75 000 F CFA par boutique</strong> couvre les mises à jour, le support et l&apos;hébergement.
              À partir de la deuxième année, vous ne payez que l&apos;abonnement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
