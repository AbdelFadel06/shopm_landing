import Link from "next/link";
import { Logo } from "./Header";
import { EMAIL, WHATSAPP_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="text-muted">© {new Date().getFullYear()} ShopM. Tous droits réservés.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-muted">
          <Link href="/conditions-utilisation/" className="hover:text-ink">
            Conditions d’utilisation
          </Link>
          <Link href="/confidentialite/" className="hover:text-ink">
            Confidentialité
          </Link>
          <a href={WHATSAPP_URL} className="hover:text-ink">
            WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-ink">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
