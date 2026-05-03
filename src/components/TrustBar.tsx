const PARTNERS = [
  { name: "Bank Central Asia", logo: "/img/bank/bca.png" },
  { name: "Bank Mandiri", logo: "/img/bank/mandiri.png" },
  { name: "Bank BNI", logo: "/img/bank/bni.png" },
  { name: "Bank Syariah Indonesia", logo: "/img/bank/bsi.png" },
  { name: "Bank Tabungan Negara", logo: "/img/bank/btn.png" },
];

const ALL = [...PARTNERS, ...PARTNERS];

export const TrustBar = () => (
  <section className="py-16 bg-background border-y border-border overflow-hidden">
    <div className="container-px mx-auto max-w-7xl mb-8 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
        Dipercaya Oleh
      </p>
      <h2 className="mt-2 text-2xl md:text-3xl font-bold text-ink">
        Mitra Kami
      </h2>
    </div>

    <div className="relative">
      <div
        className="flex animate-scroll"
        style={{ width: "max-content" }}
      >
        {ALL.map((partner, i) => (
          <div key={i} className="flex-shrink-0 mx-8 md:mx-12">
            <div className="w-32 md:w-40 h-20 md:h-24 flex items-center justify-center p-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Gradient fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
      />
    </div>
  </section>
);