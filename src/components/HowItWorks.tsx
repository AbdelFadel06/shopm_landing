const steps = [
  {
    number: "01",
    title: "Installation & configuration",
    description:
      "Nous installons ShopM sur votre infrastructure ou la nôtre en moins de 24h. Vos produits, catégories et employés sont configurés dès le départ — vous ne partez pas de zéro.",
    visual: (
      <div className="space-y-2">
        {["Boutique configurée ✓", "Produits importés ✓", "Équipe créée ✓"].map((t) => (
          <div key={t} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
            <span className="w-2 h-2 bg-success rounded-full" />
            <span className="text-white/80 text-sm">{t}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    title: "Formation de votre équipe",
    description:
      "Une session de formation pratique est incluse. Vos caissiers, livreurs et managers apprennent à utiliser ShopM sur leurs vrais cas d'usage — pas sur des exercices fictifs.",
    visual: (
      <div className="grid grid-cols-3 gap-2">
        {[
          { role: "Manager", icon: "👔", color: "bg-brand/20 border-brand/30" },
          { role: "Caissier", icon: "🧾", color: "bg-success/20 border-success/30" },
          { role: "Livreur", icon: "🚚", color: "bg-warning/20 border-warning/30" },
        ].map((u) => (
          <div key={u.role} className={`${u.color} border rounded-xl p-3 text-center`}>
            <div className="text-2xl mb-1">{u.icon}</div>
            <div className="text-white/70 text-xs font-medium">{u.role}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "03",
    title: "Vous pilotez, on assure le support",
    description:
      "Après le lancement, notre équipe reste disponible. Mises à jour, nouvelles fonctionnalités, questions techniques — vous n'êtes jamais seul. Et vos données restent toujours les vôtres.",
    visual: (
      <div className="space-y-2">
        {[
          { label: "Support réactif", color: "text-success" },
          { label: "Mises à jour incluses", color: "text-brand-light" },
          { label: "Vos données, votre propriété", color: "text-warning" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
            <svg className={`w-4 h-4 flex-shrink-0 ${item.color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-white/80 text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-24 bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/20 border border-brand/30 text-blue-300 text-sm font-semibold rounded-full mb-4">
            Comment ça marche
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Opérationnel en{" "}
            <span className="text-gradient-light">moins de 48h</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            De la signature au premier encaissement, nous vous accompagnons à chaque étape.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-8 ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <div className="text-brand-light/40 font-black text-6xl leading-none mb-4 select-none">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </div>
              <div className={`p-2 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                {step.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
