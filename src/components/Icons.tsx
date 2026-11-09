// Petites icônes en ligne (tracés Lucide, licence ISC).
type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const Check = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Layers = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);

export const Smartphone = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);

export const Shield = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

export const ArrowRight = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
