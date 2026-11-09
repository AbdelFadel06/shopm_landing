"use client";

import { useState } from "react";
import { Laptop, Phone } from "./Mockups";

const screens = [
  {
    key: "dashboard",
    label: "Tableau de bord",
    title: "Votre journée en un coup d’œil",
    text: "Chiffre d’affaires de la semaine, produits en rupture et meilleures ventes, dès l’ouverture de l’application.",
  },
  {
    key: "caisse",
    label: "Caisse",
    title: "Encaissez vite, au bon prix",
    text: "Le caissier retrouve le produit par son nom ou sa photo, le panier se calcule tout seul et le stock suit.",
  },
  {
    key: "stocks",
    label: "Stocks",
    title: "Sachez ce qu’il reste en rayon",
    text: "Quantités par boutique et par emplacement, avec les produits à réapprovisionner mis en avant.",
  },
  {
    key: "ventes",
    label: "Ventes",
    title: "Chaque vente est retrouvable",
    text: "Référence, caissier, moyen de paiement et statut : l’historique complet, filtrable par jour.",
  },
  {
    key: "rapport",
    label: "Rapport",
    title: "Le rapport du jour, prêt à imprimer",
    text: "Encaissements en espèces et Mobile Money, articles vendus et livraisons en attente de paiement.",
  },
] as const;

type ScreenKey = (typeof screens)[number]["key"];
type Device = "pc" | "mobile";

export default function Showcase() {
  const [screen, setScreen] = useState<ScreenKey>("dashboard");
  const [device, setDevice] = useState<Device>("pc");
  const current = screens.find((s) => s.key === screen)!;
  const alt = `${current.label} de ShopM sur ${device === "pc" ? "ordinateur" : "téléphone"}`;

  return (
    <div>
      {/* Barre d'onglets des écrans */}
      <div className="rounded-xl border border-line bg-soft p-1.5">
        <div role="tablist" aria-label="Écran" className="flex gap-1 overflow-x-auto">
          {screens.map((s) => {
            const active = s.key === screen;
            return (
              <button
                key={s.key}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setScreen(s.key)}
                className={`flex-1 whitespace-nowrap rounded-lg px-4 py-2 text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  active ? "bg-white text-brand shadow-sm" : "text-body hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-brand sm:text-[1.75rem]">{current.title}</h3>
        <p className="mt-3 text-sm text-body">{current.text}</p>

        {/* Choix de l'appareil */}
        <div role="tablist" aria-label="Appareil" className="mt-6 inline-flex rounded-full border border-line p-1">
          {(
            [
              ["pc", "Version ordinateur"],
              ["mobile", "Version téléphone"],
            ] as [Device, string][]
          ).map(([key, label]) => (
            <button
              key={key}
              role="tab"
              type="button"
              aria-selected={device === key}
              onClick={() => setDevice(key)}
              className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                device === key ? "bg-brand text-white" : "text-body hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10" role="tabpanel" aria-label={alt}>
        {device === "pc" ? (
          <div className="mx-auto w-[90%] max-w-[860px]">
            <Laptop key={screen} src={`/shots/pc-${screen}.webp`} alt={alt} />
          </div>
        ) : (
          <div className="mx-auto w-[66%] max-w-[270px]">
            <Phone key={screen} src={`/shots/mobile-${screen}.webp`} alt={alt} />
          </div>
        )}
      </div>
    </div>
  );
}
