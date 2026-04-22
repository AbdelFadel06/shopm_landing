export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
                <span className="text-white font-black text-sm">S</span>
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                Shop<span className="text-blue-400">M</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Logiciel de gestion commerciale conçu pour les commerçants qui veulent piloter leur activité avec sérénité.
            </p>
          </div>

          {/* Produit */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Produit</h4>
            <ul className="space-y-2.5">
              {["Fonctionnalités", "Tarifs", "Comment ça marche", "FAQ"].map((label) => (
                <li key={label}>
                  <a href={`#${label.toLowerCase().replace(/\s+/g, "-")}`} className="text-white/40 text-sm hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fonctionnalités */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Fonctionnalités</h4>
            <ul className="space-y-2.5">
              {["Point de vente", "Gestion du stock", "Livraisons", "Rapports", "Multi-boutiques"].map((label) => (
                <li key={label}>
                  <a href="#fonctionnalites" className="text-white/40 text-sm hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#contact" className="text-white/40 text-sm hover:text-white transition-colors">
                  Demander une démo
                </a>
              </li>
              <li>
                <a href="mailto:contact@shopm.com" className="text-white/40 text-sm hover:text-white transition-colors">
                  contact@shopm.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/" className="text-white/40 text-sm hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {year} ShopM. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
