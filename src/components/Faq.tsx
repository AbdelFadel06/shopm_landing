import { faq } from "@/lib/faq";

// Accordéon natif (details/summary) : lisible sans JavaScript, et par les moteurs de recherche.
export default function Faq() {
  return (
    <section id="faq" className="pb-20 sm:pb-24">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.8fr]">
        <div>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-[2rem] sm:leading-tight">
            Tout savoir sur ShopM
          </h2>
          <p className="mt-3 text-sm text-body">
            Logiciel de gestion de stock et de caisse pour les boutiques de Cotonou, Abomey-Calavi, Porto-Novo,
            Parakou et de toute l’Afrique francophone.
          </p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faq.map(({ q, a }) => (
            <details key={q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <h3>{q}</h3>
                <span aria-hidden className="text-xl leading-none text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 pr-8 text-sm text-body">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
