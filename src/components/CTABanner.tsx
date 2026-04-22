export default function CTABanner() {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-light/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1.5 bg-brand/20 border border-brand/30 text-blue-300 text-sm font-semibold rounded-full mb-6">
          Démarrez dès maintenant
        </span>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Prêt à prendre le contrôle
          <br />
          <span className="text-gradient-light">de votre boutique ?</span>
        </h2>

        <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
          Contactez-nous pour une démonstration sur votre cas réel. On s&apos;adapte à votre activité, pas l&apos;inverse.
        </p>

        {/* Contact form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Votre prénom"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-brand-light transition-colors"
            />
            <input
              type="text"
              placeholder="Nom de votre boutique"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-brand-light transition-colors"
            />
          </div>
          <input
            type="tel"
            placeholder="Numéro WhatsApp / téléphone"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-brand-light transition-colors mb-4"
          />
          <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white/70 text-sm outline-none focus:border-brand-light transition-colors mb-6 appearance-none">
            <option value="" className="bg-primary">Nombre de boutiques</option>
            <option value="1" className="bg-primary">1 boutique</option>
            <option value="2" className="bg-primary">2 boutiques</option>
            <option value="3+" className="bg-primary">3 boutiques et plus</option>
          </select>
          <button className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-light transition-all shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 text-base">
            Demander une démonstration →
          </button>
          <p className="text-white/30 text-xs mt-4">
            Réponse garantie sous 24h · Aucun engagement · Démo 100% gratuite
          </p>
        </div>

        {/* Alternatives */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <a href="https://wa.me/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
            <span className="w-8 h-8 bg-success/20 border border-success/30 rounded-lg flex items-center justify-center text-success text-base">💬</span>
            Écrire sur WhatsApp
          </a>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <a href="mailto:contact@shopm.com" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
            <span className="w-8 h-8 bg-brand/20 border border-brand/30 rounded-lg flex items-center justify-center text-brand-light text-base">✉️</span>
            contact@shopm.com
          </a>
        </div>
      </div>
    </section>
  );
}
