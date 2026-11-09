"use client";

import { useState } from "react";
import { Laptop, Phone } from "./Mockups";

const screens = [
  { key: "dashboard", label: "Tableau de bord", text: "Chiffre d’affaires, ruptures et meilleurs produits dès l’ouverture." },
  { key: "caisse", label: "Caisse", text: "Le caissier trouve le produit par son nom ou sa photo et encaisse." },
  { key: "stocks", label: "Stocks", text: "Quantités par boutique et alertes de réapprovisionnement." },
  { key: "ventes", label: "Ventes", text: "Chaque vente avec son caissier, son paiement et son statut." },
  { key: "rapport", label: "Rapport", text: "Le rapport du jour : encaissements, articles vendus, livraisons en attente." },
] as const;

type Device = "pc" | "mobile";

function Tabs<T extends string>({
  label,
  items,
  value,
  onChange,
}: {
  label: string;
  items: readonly { key: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div role="tablist" aria-label={label} className="inline-flex flex-wrap justify-center gap-1 rounded-lg bg-brand-dark p-1">
      {items.map((it) => {
        const active = it.key === value;
        return (
          <button
            key={it.key}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onChange(it.key)}
            className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              active ? "bg-white text-brand" : "text-blue-100 hover:text-white"
            }`}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}

export default function Showcase() {
  const [device, setDevice] = useState<Device>("pc");
  const [screen, setScreen] = useState<(typeof screens)[number]["key"]>("dashboard");
  const current = screens.find((s) => s.key === screen)!;
  const alt = `${current.label} de ShopM sur ${device === "pc" ? "ordinateur" : "téléphone"}`;

  return (
    <div className="flex flex-col items-center">
      <Tabs
        label="Appareil"
        items={[
          { key: "pc" as Device, label: "Ordinateur" },
          { key: "mobile" as Device, label: "Téléphone" },
        ]}
        value={device}
        onChange={setDevice}
      />
      <div className="mt-3">
        <Tabs label="Écran" items={screens} value={screen} onChange={setScreen} />
      </div>
      <p className="mt-5 min-h-[2.5rem] max-w-md text-center text-sm text-blue-100">{current.text}</p>

      <div className="mt-6 w-full" role="tabpanel">
        {device === "pc" ? (
          <div className="mx-auto w-[88%] max-w-[880px]">
            <Laptop key={screen} src={`/shots/pc-${screen}.webp`} alt={alt} />
          </div>
        ) : (
          <div className="mx-auto w-[64%] max-w-[270px]">
            <Phone key={screen} src={`/shots/mobile-${screen}.webp`} alt={alt} />
          </div>
        )}
      </div>
    </div>
  );
}
