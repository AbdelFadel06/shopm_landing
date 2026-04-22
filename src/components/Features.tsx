const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    color: "text-brand bg-brand-pale border-brand/20",
    title: "Point de vente intégré",
    description:
      "Enregistrez les ventes en quelques secondes. Espèces, mobile money, livraison — chaque mode de paiement est géré nativement avec reçu automatique.",
    details: ["Vente en boutique & livraison", "Historique complet par caissier", "Gestion des remises et promotions"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    color: "text-success bg-emerald-50 border-success/20",
    title: "Gestion des livraisons",
    description:
      "Affectez chaque commande à un livreur. Suivez les paiements à la livraison, confirmez les encaissements, et exportez le récapitulatif en un clic.",
    details: ["Attribution par livreur", "Suivi paiement à la livraison", "Point livreur quotidien"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    color: "text-purple-600 bg-purple-50 border-purple-200",
    title: "Stock en temps réel",
    description:
      "Boutique ou magasin — votre stock est mis à jour à chaque vente et chaque arrivage. Alertes automatiques quand un produit est en rupture.",
    details: ["Gestion boutique & magasin séparés", "Alertes stock bas configurables", "Historique des mouvements"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    color: "text-warning bg-amber-50 border-warning/20",
    title: "Rapports & Analytiques",
    description:
      "Rapport journalier complet : CA, encaissements, dépenses, livraisons en attente. Historique mensuel consultable et imprimable en un clic.",
    details: ["Rapport journalier imprimable", "Historique mensuel visuel", "Bilan net automatique"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: "text-brand bg-brand-pale border-brand/20",
    title: "Multi-boutiques",
    description:
      "Gérez plusieurs points de vente depuis un seul compte manager. Basculez d'une boutique à l'autre en un clic, chaque espace est isolé.",
    details: ["Basculement boutique instantané", "Données cloisonnées par boutique", "Vue consolidée pour le manager"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    color: "text-success bg-emerald-50 border-success/20",
    title: "Gestion d'équipe",
    description:
      "Créez des comptes employés, caissiers et livreurs avec des accès adaptés. Suivez les sessions de caisse et les performances par collaborateur.",
    details: ["Rôles et permissions granulaires", "Sessions de caisse par employé", "Affectation par boutique"],
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-pale text-brand text-sm font-semibold rounded-full mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-5 leading-tight">
            Tout ce dont vous avez besoin,{" "}
            <span className="text-gradient">rien de superflu</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            ShopM a été conçu en écoutant de vrais commerçants. Chaque fonctionnalité résout un problème concret du quotidien.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${f.color} mb-5 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>

              <h3 className="text-lg font-bold text-primary mb-3">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{f.description}</p>

              <ul className="space-y-1.5">
                {f.details.map((d, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted">
                    <svg className="w-4 h-4 text-success flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
