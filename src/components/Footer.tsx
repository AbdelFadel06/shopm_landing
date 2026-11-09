import Link from "next/link";
import { Logo } from "./Header";
import { DEMO_URL, EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-pale">
      <div className="container-page grid gap-10 py-14 text-sm sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-body">
            Logiciel de gestion de boutique : caisse, stocks, livraisons et rapports.
          </p>
        </div>
        <div>
          <p className="font-semibold text-ink">ShopM</p>
          <ul className="mt-3 space-y-2 text-body">
            <li><Link href="/#apercu" className="hover:text-brand">Aperçu</Link></li>
            <li><Link href="/#fonctionnalites" className="hover:text-brand">Fonctionnalités</Link></li>
            <li><a href={DEMO_URL} className="hover:text-brand">Démo</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-ink">Contact</p>
          <ul className="mt-3 space-y-2 text-body">
            <li><a href={WHATSAPP_URL} className="hover:text-brand">WhatsApp : {WHATSAPP_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="break-all hover:text-brand">{EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-100">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ShopM</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/conditions-utilisation/" className="hover:text-ink">Conditions d’utilisation</Link>
            <Link href="/confidentialite/" className="hover:text-ink">Politique de confidentialité</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
