import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DEMO_URL, EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site";

const features = [
  {
    title: "Caisse et ventes",
    text: "Encaissez en quelques clics en cherchant le produit par son nom. Chaque session de caisse est suivie de l’ouverture à la clôture.",
  },
  {
    title: "Stocks et alertes",
    text: "Le stock se met à jour à chaque vente. Les ruptures et les produits sous le seuil minimum sont signalés.",
  },
  {
    title: "Transferts et inventaires",
    text: "Déplacez la marchandise entre boutiques et faites vos inventaires avec les écarts calculés.",
  },
  {
    title: "Livraisons",
    text: "Le livreur voit ses courses sur son téléphone et confirme chaque remise au client.",
  },
  {
    title: "Rapports",
    text: "Chiffre d’affaires, produits les plus vendus et mouvements de stock, par jour, semaine ou mois.",
  },
  {
    title: "Équipe et rôles",
    text: "Manager, caissier, vendeur, magasinier, livreur : chacun n’accède qu’à ce dont il a besoin.",
  },
];

const benefits = [
  ["Une seule application", "Ventes, stocks et livraisons au même endroit, plus de cahiers ni de fichiers éparpillés."],
  ["Sur ordinateur et téléphone", "S’installe comme une application sur Android et iPhone, sans passer par un store."],
  ["Plusieurs boutiques", "Suivez chaque point de vente séparément ou comparez-les depuis un seul compte."],
  ["Tout est tracé", "Chaque vente, mouvement de stock et transfert est enregistré avec la personne qui l’a fait."],
  ["Alertes utiles", "Le manager est prévenu d’une rupture ou d’un signalement, sans être noyé de notifications."],
  ["Pensé pour le franc CFA", "Montants et rapports en francs CFA, interface entièrement en français."],
];

function Shot({
  src,
  alt,
  mobile,
  className = "",
}: {
  src: string;
  alt: string;
  mobile?: string;
  className?: string;
}) {
  // Sur téléphone, la capture d'ordinateur serait illisible : on montre la version mobile.
  return (
    <>
      {mobile && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={mobile}
          alt={alt}
          width={390}
          height={844}
          loading="lazy"
          decoding="async"
          className="shot mx-auto block h-auto w-full max-w-[280px] sm:hidden"
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={1440}
        height={900}
        loading="lazy"
        decoding="async"
        className={`shot h-auto w-full ${mobile ? "hidden sm:block" : ""} ${className}`}
      />
    </>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── Présentation ── */}
        <section className="container-page pb-20 pt-14 sm:pt-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Logiciel de gestion de boutique</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.5rem]">
              Votre caisse, vos stocks et vos livraisons, enfin au même endroit.
            </h1>
            <p className="mt-4 max-w-xl text-base text-body">
              ShopM aide les commerçants à suivre ce qui se vend, ce qui reste en rayon et ce qui part en
              livraison, pour une ou plusieurs boutiques.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={DEMO_URL} className="btn-primary">
                Essayer la démo
              </a>
              <a href={WHATSAPP_URL} className="btn-secondary">
                Nous contacter
              </a>
            </div>
            <p className="mt-3 text-xs text-muted">Démo gratuite, sans inscription.</p>
          </div>

          <div className="relative mt-12">
            <Shot
              src="/shots/desktop-manager-dashboard.webp"
              mobile="/shots/mobile-manager-dashboard.webp"
              alt="Tableau de bord du manager dans ShopM"
              className="lg:mr-28"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/shots/mobile-manager-dashboard.webp"
              alt="ShopM sur téléphone"
              width={390}
              height={844}
              className="shot absolute -bottom-8 right-0 hidden h-auto w-[200px] lg:block"
            />
          </div>
        </section>

        {/* ── Fonctionnalités ── */}
        <section id="fonctionnalites" className="border-t border-line bg-soft py-16 sm:py-20">
          <div className="container-page">
            <div className="max-w-xl">
              <p className="eyebrow">Fonctionnalités</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                Tout ce qu’il faut pour tenir une boutique
              </h2>
            </div>
            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title}>
                  <h3 className="text-[15px] font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-body">{f.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid items-start gap-6 md:grid-cols-2">
              <figure>
                <Shot src="/shots/desktop-caisse.webp" alt="Écran de caisse avec les photos des produits" />
                <figcaption className="mt-2 text-xs text-muted">La caisse, avec la photo de chaque produit.</figcaption>
              </figure>
              <figure>
                <Shot src="/shots/desktop-manager-stocks.webp" mobile="/shots/mobile-manager-stocks.webp" alt="Suivi des stocks et des alertes" />
                <figcaption className="mt-2 text-xs text-muted">Les stocks et les produits à réapprovisionner.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ── Avantages ── */}
        <section id="avantages" className="py-16 sm:py-20">
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="eyebrow">Avantages</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                Savoir où en est votre commerce, à tout moment
              </h2>
              <p className="mt-3 text-sm text-body">
                L’objectif de ShopM est simple : que vous passiez moins de temps à compter et plus de temps
                à vendre, en gardant le contrôle même quand vous n’êtes pas en boutique.
              </p>
            </div>
            <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {benefits.map(([title, text]) => (
                <div key={title} className="border-l-2 border-brand pl-4">
                  <dt className="text-[15px] font-semibold text-ink">{title}</dt>
                  <dd className="mt-1 text-sm text-body">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Démo ── */}
        <section className="border-t border-line bg-soft py-16 sm:py-20">
          <div className="container-page grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow">Démo</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">Essayez ShopM avant d’en parler</h2>
              <p className="mt-3 max-w-lg text-sm text-body">
                La démo reproduit une boutique d’articles de maison avec ses produits, ses ventes et son
                équipe. Connectez-vous en un clic comme manager, caissier, vendeuse, magasinier ou livreur.
                Les données sont fictives et remises à zéro chaque nuit : vous pouvez tout essayer.
              </p>
              <a href={DEMO_URL} className="btn-primary mt-6">
                Ouvrir la démo
              </a>
            </div>
            <Shot src="/shots/desktop-login.webp" mobile="/shots/mobile-login.webp" alt="Page de connexion de la démo ShopM" />
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="container-page max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Parlons de votre boutique</h2>
            <p className="mt-3 text-sm text-body">
              Une question, une démonstration guidée ou une mise en place pour votre commerce ? Écrivez-nous
              sur WhatsApp, c’est le moyen le plus rapide de nous joindre.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL} className="btn bg-whatsapp text-white hover:opacity-90">
                WhatsApp · {WHATSAPP_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-secondary">
                {EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
