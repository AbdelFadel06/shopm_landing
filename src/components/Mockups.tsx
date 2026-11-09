// Cadres d'appareil en CSS (aucune image) : ordinateur portable et téléphone.

type ShotProps = { src: string; alt: string; eager?: boolean };

export function Laptop({ src, alt, eager }: ShotProps) {
  return (
    <div className="w-full">
      {/* Écran */}
      <div className="rounded-t-[14px] border border-[#1E293B] bg-[#0F172A] px-[1.6%] pb-[1.6%] pt-[2.2%]">
        <div className="relative mx-auto mb-[1%] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#334155]" />
        <div className="aspect-[16/10] overflow-hidden rounded-[3px] bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            width={1600}
            height={1000}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
      {/* Socle */}
      <div className="relative -mx-[6%] h-3 rounded-b-[10px] border border-t-0 border-[#94A3B8] bg-[#CBD5E1] sm:h-4">
        <div className="mx-auto h-1.5 w-[14%] rounded-b-md bg-[#94A3B8]" />
      </div>
    </div>
  );
}

export function Phone({ src, alt, eager }: ShotProps) {
  return (
    <div className="w-full rounded-[2.2rem] border border-[#1E293B] bg-[#0F172A] p-[4.5%]">
      <div className="flex aspect-[390/880] flex-col overflow-hidden rounded-[1.7rem] bg-white">
        {/* Barre d'état avec l'encoche, au-dessus de la capture */}
        <div className="flex h-[4.5%] shrink-0 items-center justify-center bg-white">
          <div className="h-[55%] w-[30%] rounded-full bg-[#0F172A]" />
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
