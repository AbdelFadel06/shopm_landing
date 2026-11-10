import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { Phone, Screen } from "@/components/Mockups";
import { ArrowRight, Bell, Check, Layers, Shield } from "@/components/Icons";
import { DEMO_URL, EMAIL, WHATSAPP_CUSTOM_URL, WHATSAPP_URL } from "@/lib/site";

// Les trois raisons principales, dans l'ordre d'importance pour un commerçant.
const pillars = [
  {
    icon: Shield,
    title: "Plus de stock qui disparaît sans explication",
    text: "Chaque vente, réception, casse ou ajustement est enregistré avec le nom de l’employé. À l’inventaire, ShopM vous montre l’écart entre ce qui devrait être en rayon et ce qui y est vraiment.",
  },
  {
    icon: Bell,
    title: "Alertes rupture et stock bas",
    text: "Vous êtes prévenu dès qu’un produit est épuisé ou passe sous son minimum. Vous renouvelez à temps, sans compter les cartons à la main.",
  },
  {
    icon: Layers,
    title: "Boutique et magasin suivis séparément",
    text: "Le stock au comptoir et le stock en réserve ont chacun leurs quantités. Chaque sortie du magasin vers la boutique passe par un transfert enregistré.",
  },
];

const cards = [
  {
    tag: "Caisse",
    title: "Toutes vos ventes et livraisons enregistrées",
    text: "Chaque article vendu passe par la caisse et sort du stock automatiquement.",
    points: ["Espèces et Mobile Money", "Sessions de caisse par caissier", "Livraisons suivies jusqu’au client"],
  },
  {
    tag: "Rapports",
    title: "Vos chiffres sans calculatrice",
    text: "Le rapport du jour ou de la période, prêt à consulter ou à imprimer.",
    points: ["Chiffre d’affaires et articles vendus", "Encaissements par moyen de paiement", "Historique des mouvements de stock"],
  },
  {
    tag: "Équipe",
    title: "Chacun son rôle, vous gardez la main",
    text: "Caissier, vendeur, magasinier, livreur : chaque employé ne voit que ce qui le concerne.",
    points: ["Droits adaptés à chaque rôle", "Plusieurs boutiques, un seul compte", "Notifications pour les managers"],
  },
];

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        {/* ── Présentation ── */}
        <section className="container-page pt-16 text-center sm:pt-24">
          <h1>
            <span className="eyebrow block">Logiciel de gestion de stock et de caisse au Bénin</span>
            <span className="mx-auto mt-4 block max-w-3xl text-[1.85rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.5rem]">
              Sachez exactement ce qui <span className="text-brand">entre</span> et ce qui{" "}
              <span className="text-brand">sort</span> de votre stock
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] text-body">
            Produits qui disparaissent, ventes non enregistrées, ruptures découvertes trop tard : ShopM suit
            votre stock en boutique et en magasin, vous alerte quand il faut renouveler et garde la trace de
            chaque mouvement.
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

          <div className="mx-auto mt-14 max-w-[1040px] sm:mt-16">
            <Screen
              src="/shots/pc-dashboard.webp"
              alt="Logiciel de gestion de stock ShopM : tableau de bord avec ruptures, produits critiques et stocks bas"
              eager
            />
          </div>
        </section>

        {/* ── Bande bleue : le suivi du stock ── */}
        <section id="avantages" className="mt-16 bg-brand py-20 text-white sm:mt-24 sm:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-[2rem] sm:leading-tight">
                Un stock que vous contrôlez, même quand vous n’êtes pas là
              </h2>
              <p className="mt-4 text-[15px] text-blue-100">
                Vos employés vendent, rangent et livrent. Vous, vous voyez tout depuis votre téléphone.
              </p>
            </div>
            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand">
                    <Icon />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug">{title}</h3>
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

        {/* ── Le reste de l'application en cartes ── */}
        <section id="fonctionnalites" className="pb-20 sm:pb-24">
          <div className="container-page">
            <h2 className="mx-auto max-w-xl text-center text-2xl font-bold tracking-tight text-brand sm:text-[2rem] sm:leading-tight">
              Et tout ce qu’il faut pour faire tourner la boutique
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

        <Faq />

        {/* ── Sur mesure ── */}
        <section id="sur-mesure" className="pb-12 sm:pb-16">
          <div className="container-page">
            <div className="flex flex-col gap-6 rounded-2xl border border-line p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Sur mesure</p>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  Un besoin particulier ? <span className="whitespace-nowrap">Parlons-en.</span>
                </h2>
                <p className="mt-3 text-sm text-body">
                  Votre activité a ses propres règles : nous pouvons ajouter à ShopM un module pensé pour
                  vous, ou développer un logiciel qui vous sera propre. Expliquez-nous votre besoin, on en
                  discute ensemble.
                </p>
              </div>
              <a href={WHATSAPP_CUSTOM_URL} className="btn-primary shrink-0 self-start md:self-center">
                En discuter sur WhatsApp <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* ── Bannière d'appel : démo + contact ── */}
        <section id="contact" className="pb-20 sm:pb-24">
          <div className="container-page">
            <div className="relative overflow-hidden rounded-2xl bg-brand px-6 py-12 text-white sm:px-12 md:py-14">
              <div className="relative z-10 md:max-w-[56%]">
                <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-[1.85rem]">
                  Reprenez le contrôle de votre stock
                </h2>
                <p className="mt-4 text-[15px] text-blue-100">
                  Essayez la démo : une boutique fictive remise à zéro chaque nuit, où vous vous connectez en
                  un clic comme manager, caissier ou magasinier. Pour une présentation, une mise en place ou un
                  logiciel personnalisé selon vos besoins, écrivez-nous sur WhatsApp : on en discute.
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
                <Phone src="/shots/mobile-stocks.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
