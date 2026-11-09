import Link from "next/link";
import { DEMO_URL } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-ink">
      <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-[13px] font-bold text-white">
        S
      </span>
      <span className="text-[15px] font-semibold tracking-tight">ShopM</span>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white">
      <div className="container-page flex h-14 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/#apercu" className="hidden text-body hover:text-ink sm:inline">
            Aperçu
          </Link>
          <Link href="/#fonctionnalites" className="hidden text-body hover:text-ink sm:inline">
            Fonctionnalités
          </Link>
          <Link href="/#avantages" className="hidden text-body hover:text-ink sm:inline">
            Avantages
          </Link>
          <Link href="/#contact" className="hidden text-body hover:text-ink sm:inline">
            Contact
          </Link>
          <a href={DEMO_URL} className="btn-primary px-3 py-1.5">
            Essayer la démo
          </a>
        </nav>
      </div>
    </header>
  );
}
