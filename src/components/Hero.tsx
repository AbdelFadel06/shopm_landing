export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand/10 rounded-full blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand/20 border border-brand/30 rounded-full mb-8">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-blue-300 text-sm font-medium">Logiciel de gestion commerciale</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          Gérez votre boutique.
          <br />
          <span className="text-gradient-light">Sans prise de tête.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          ShopM regroupe vos ventes, votre stock, vos livraisons et vos rapports dans une seule
          application simple — conçue pour les commerçants qui veulent{" "}
          <span className="text-white/90 font-semibold">piloter, pas subir</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-light transition-all shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 text-base"
          >
            Demander une démo gratuite →
          </a>
          <a
            href="#fonctionnalites"
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 text-base"
          >
            Découvrir les fonctionnalités
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-sm shadow-2xl">
            {/* Fake browser bar */}
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 mb-2">
              <span className="w-3 h-3 rounded-full bg-danger/60" />
              <span className="w-3 h-3 rounded-full bg-warning/60" />
              <span className="w-3 h-3 rounded-full bg-success/60" />
              <div className="flex-1 mx-4 bg-white/10 rounded-md h-5 flex items-center px-3">
                <span className="text-white/30 text-xs">app.shopm.com</span>
              </div>
            </div>

            {/* Dashboard preview */}
            <div className="grid grid-cols-4 gap-2 p-3 mb-2">
              {[
                { label: "Ventes aujourd'hui", value: "48", color: "bg-brand/20 border-brand/30" },
                { label: "CA du jour", value: "2 450 000 F", color: "bg-success/20 border-success/30" },
                { label: "Stock bas", value: "3", color: "bg-warning/20 border-warning/30" },
                { label: "Livraisons", value: "12", color: "bg-purple-500/20 border-purple-500/30" },
              ].map((card) => (
                <div key={card.label} className={`${card.color} border rounded-xl p-3`}>
                  <div className="text-white/40 text-xs mb-1">{card.label}</div>
                  <div className="text-white font-bold text-lg">{card.value}</div>
                </div>
              ))}
            </div>

            {/* Fake table */}
            <div className="bg-white/5 rounded-xl overflow-hidden mx-3 mb-3">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Dernières ventes</span>
                <span className="text-brand-light text-xs">Voir tout →</span>
              </div>
              {[
                { ref: "VTE-001", montant: "45 000 F", statut: "Payé", couleur: "text-success" },
                { ref: "VTE-002", montant: "128 500 F", statut: "Livraison", couleur: "text-warning" },
                { ref: "VTE-003", montant: "32 000 F", statut: "Payé", couleur: "text-success" },
              ].map((row) => (
                <div key={row.ref} className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 last:border-0">
                  <span className="text-white/40 text-xs font-mono">{row.ref}</span>
                  <span className="text-white/80 text-xs font-semibold">{row.montant}</span>
                  <span className={`${row.couleur} text-xs font-medium`}>{row.statut}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Glow under mockup */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-brand/30 blur-2xl rounded-full" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs">Défiler</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
