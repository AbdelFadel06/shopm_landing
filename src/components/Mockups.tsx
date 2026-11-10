// Cadres d'appareil en CSS (aucune image) : écran à bordure épaisse et téléphone.

type ShotProps = { src: string; alt: string; eager?: boolean };

// Écran façon tablette/moniteur : simple bordure sombre épaisse aux coins arrondis.
export function Screen({ src, alt, eager }: ShotProps) {
  return (
    <div className="w-full overflow-hidden rounded-[18px] border-[6px] border-ink bg-ink sm:rounded-[28px] sm:border-[10px]">
      <div className="aspect-[16/10] overflow-hidden rounded-[10px] bg-white sm:rounded-[16px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export function Phone({ src, alt, eager }: ShotProps) {
  return (
    <div className="w-full rounded-[2.2rem] border border-[#1E293B] bg-ink p-[4.5%]">
      <div className="flex aspect-[390/880] flex-col overflow-hidden rounded-[1.7rem] bg-white">
        {/* Barre d'état avec l'encoche, au-dessus de la capture */}
        <div className="flex h-[4.5%] shrink-0 items-center justify-center bg-white">
          <div className="h-[55%] w-[30%] rounded-full bg-ink" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={390}
          height={844}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="min-h-0 w-full flex-1 object-cover object-top"
        />
      </div>
    </div>
  );
}
