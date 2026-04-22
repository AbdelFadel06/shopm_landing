"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#fonctionnalites", label: "Fonctionnalités" },
    { href: "#comment-ca-marche", label: "Comment ça marche" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-md group-hover:bg-brand-light transition-colors">
            <span className="text-white font-black text-sm">S</span>
          </div>
          <span
            className={`font-black text-xl tracking-tight transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Shop<span className={scrolled ? "text-brand" : "text-blue-300"}>M</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-muted hover:text-primary hover:bg-surface"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#tarifs"
            className={`text-sm font-semibold transition-colors ${
              scrolled ? "text-muted hover:text-primary" : "text-white/80 hover:text-white"
            }`}
          >
            Voir les tarifs
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-brand-light transition-colors shadow-md hover:shadow-lg"
          >
            Demander une démo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-0.5 w-5 transition-all ${scrolled ? "bg-primary" : "bg-white"}`}
              />
            ))}
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-muted hover:text-primary hover:bg-surface rounded-lg"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border mt-3">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center px-4 py-2.5 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-brand-light"
            >
              Demander une démo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
