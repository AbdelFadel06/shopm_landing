import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";
import { Laptop, Phone } from "@/components/Mockups";
import { ArrowRight, Check, Layers, Shield, Smartphone } from "@/components/Icons";
import { DEMO_URL, EMAIL, WHATSAPP_URL } from "@/lib/site";

const pillars = [
  {
    icon: Layers,
    title: "Tout au même endroit",
    text: "Caisse, stocks, transferts, inventaires, livraisons et rapports dans une seule application, pour une ou plusieurs boutiques.",
  },
  {
    icon: Smartphone,
    title: "Sur ordinateur et téléphone",
    text: "La caisse sur l’ordinateur du comptoir, le suivi sur votre téléphone. ShopM s’installe sur Android et iPhone sans passer par un store.",
  },
  {
    icon: Shield,
    title: "Sécurisé et tracé",
    text: "Chaque employé n’accède qu’à ce que permet son rôle, et chaque vente ou mouvement de stock garde le nom de son auteur.",
  },
];

const cards = [
  {
    tag: "Vente",
    title: "Encaissez et livrez sans perdre le fil",
    text: "De la caisse à la remise au client, chaque vente suit le même chemin et reste consultable.",
    points: ["Sessions de caisse ouvertes et clôturées", "Espèces et Mobile Money", "Livraisons suivies par le livreur"],
  },
  {
    tag: "Stock",
    title: "Le bon produit, au bon endroit",
    text: "Le stock bouge à chaque vente, et vous êtes prévenu avant qu’un produit ne manque.",
    points: ["Alertes de rupture et de stock bas", "Transferts entre boutiques", "Inventaires avec écarts calculés"],
  },
  {
    tag: "Équipe",
    title: "Chacun son rôle, vous gardez la main",
    text: "Manager, caissier, vendeur, magasinier, livreur : chaque compte voit uniquement ce qui le concerne.",
    points: ["Droits adaptés à chaque rôle", "Plusieurs boutiques, un seul compte", "Notifications pour les managers"],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── Présentation ── */}
        <section className="container-page pt-16 text-center sm:pt-24">
          <h1 className="mx-auto max-w-3xl text-[1.85rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.4rem]">
            Votre <span className="text-brand">caisse</span>, vos <span className="text-brand">stocks</span> et vos{" "}
            <span className="text-brand">livraisons</span> au même endroit
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] text-body">
            ShopM aide les commerçants à suivre ce qui se vend, ce qui reste en rayon et ce qui part en
            livraison, pour une ou plusieurs boutiques.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={DEMO_URL} className="btn-primary">
              Essayer la démo
            </a>
            <a href={WHATSAPP_URL} className="btn border border-brand bg-white text-brand hover:bg-brand-pale">
              Nous contacter
            </a>
          </div>
          <p className="mt-3 text-xs text-muted">Démo gratuite, sans inscription.</p>

          <div className="relative mx-auto mt-14 max-w-[1000px] pb-8 pr-[10%] sm:mt-16">
            <Laptop src="/shots/pc-caisse.webp" alt="Caisse de ShopM sur ordinateur" eager />
            <div className="absolute bottom-0 right-0 w-[20%] min-w-[84px] max-w-[180px]">
              <Phone src="/shots/mobile-dashboard.webp" alt="Tableau de bord ShopM sur téléphone" eager />
            </div>
          </div>
        </section>

        {/* ── Bande bleue : les avantages ── */}
        <section id="avantages" className="mt-16 bg-brand py-20 text-white sm:mt-24 sm:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-[2rem] sm:leading-tight">
                Gérez votre boutique sans cahier ni calculatrice
              </h2>
              <p className="mt-4 text-[15px] text-blue-100">
                L’objectif de ShopM est simple : que vous passiez moins de temps à compter et plus de temps à
                vendre, en gardant le contrôle même quand vous n’êtes pas en boutique.
              </p>
            </div>
            <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand">
                    <Icon />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-blue-100">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Aperçu avec onglets ── */}
        <section id="apercu" className="py-20 sm:py-24">
          <div className="container-page">
            <Showcase />
          </div>
        </section>

        {/* ── Fonctionnalités en cartes ── */}
        <section id="fonctionnalites" className="pb-20 sm:pb-24">
          <div className="container-page">
            <h2 className="mx-auto max-w-xl text-center text-2xl font-bold tracking-tight text-brand sm:text-[2rem] sm:leading-tight">
              Tout ce qu’il faut pour tenir une boutique
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {cards.map((c) => (
                <div key={c.tag} className="rounded-xl bg-brand-pale p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">{c.tag}</p>
                  <h3 className="mt-3 text-[17px] font-semibold leading-snug text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-body">{c.text}</p>
                  <ul className="mt-4 space-y-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-ink">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand text-white">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bannière d'appel : démo + contact ── */}
        <section id="contact" className="pb-20 sm:pb-24">
          <div className="container-page">
            <div className="relative overflow-hidden rounded-2xl bg-brand px-6 py-12 text-white sm:px-12 md:py-14">
              <div className="relative z-10 md:max-w-[56%]">
                <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-[1.85rem]">
                  Prêt à simplifier la gestion de votre boutique ?
                </h2>
                <p className="mt-4 text-[15px] text-blue-100">
                  Essayez la démo : une boutique fictive remise à zéro chaque nuit, où vous vous connectez en
                  un clic comme manager, caissier ou livreur. Pour une présentation ou une mise en place,
                  écrivez-nous sur WhatsApp.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={DEMO_URL} className="btn bg-white text-brand hover:bg-brand-pale">
                    Essayer la démo <ArrowRight />
                  </a>
                  <a href={WHATSAPP_URL} className="btn border border-blue-300 text-white hover:bg-brand-dark">
                    Nous écrire sur WhatsApp
                  </a>
                </div>
                <p className="mt-4 text-xs text-blue-200">
                  Ou par email : <a href={`mailto:${EMAIL}`} className="underline underline-offset-2">{EMAIL}</a>
                </p>
              </div>
              {/* Téléphone qui dépasse du bas de la bannière */}
              <div className="pointer-events-none absolute right-10 top-10 hidden w-[220px] md:block lg:right-20 lg:w-[240px]">
                <Phone src="/shots/mobile-login.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
