const stats = [
  { value: "100%", label: "Données hébergées chez vous", sub: "Confidentialité totale" },
  { value: "< 2min", label: "Pour enregistrer une vente", sub: "Interface pensée pour aller vite" },
  { value: "Multi", label: "Boutiques gérées simultanément", sub: "Un seul compte, plusieurs points de vente" },
  { value: "24/7", label: "Accès à vos données", sub: "Même sans connexion (mode hors-ligne prévu)" },
];

export default function Stats() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div key={i} className="bg-primary px-8 py-10 text-center">
              <div className="text-4xl font-black text-white mb-2">{s.value}</div>
              <div className="text-white/80 font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
