"use client";

import { useState } from "react";
import { Phone, Screen } from "./Mockups";

const screens = [
  {
    key: "stocks",
    label: "Stocks",
    title: "Votre stock, en boutique comme en magasin",
    text: "Les quantités de chaque produit, au comptoir et en réserve, avec les ruptures et les stocks bas mis en avant pour commander à temps.",
  },
  {
    key: "caisse",
    label: "Caisse",
    title: "Chaque vente passe par la caisse",
    text: "Le caissier retrouve le produit par son nom ou sa photo, encaisse, et le stock diminue tout seul. Plus de vente qui ne laisse aucune trace.",
  },
  {
    key: "ventes",
    label: "Ventes",
    title: "Toutes vos ventes et livraisons enregistrées",
    text: "Référence, caissier, moyen de paiement et statut de chaque vente, sur place ou en livraison, filtrables par jour.",
  },
  {
    key: "rapport",
    label: "Rapport",
    title: "Le rapport du jour, prêt à imprimer",
    text: "Encaissements en espèces et Mobile Money, articles vendus et livraisons en attente de paiement.",
  },
  {
    key: "dashboard",
    label: "Tableau de bord",
    title: "L’essentiel dès l’ouverture",
    text: "Ruptures, produits sous le minimum, chiffre d’affaires de la semaine et meilleures ventes.",
  },
] as const;

type ScreenKey = (typeof screens)[number]["key"];
type Device = "pc" | "mobile";

export default function Showcase() {
  const [screen, setScreen] = useState<ScreenKey>("stocks");
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
          <div className="mx-auto w-[90%] max-w-[1000px]">
            <Screen key={screen} src={`/shots/pc-${screen}.webp`} alt={alt} />
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
