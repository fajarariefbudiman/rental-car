import { Layout, PageHero } from "../components/Layout";
import { WHATSAPP_URL } from "../data/vehicles";

const PROMOS = [
  { title: "Diskon Bulanan 50%", desc: "Sewa mobil bulanan dengan potongan hingga 50%. Hubungi admin untuk detail.", until: "31 Des 2024", tag: "BULANAN" },
  { title: "Paket Mingguan Hemat", desc: "Diskon up to 16% untuk semua tipe kendaraan periode mingguan.", until: "30 Nov 2024", tag: "MINGGUAN" },
  { title: "Free Antar Jemput", desc: "Gratis biaya antar-jemput untuk area Jabodetabek minimum sewa 3 hari.", until: "Tanpa Batas", tag: "JABODETABEK" },
  { title: "Spesial Akhir Pekan", desc: "Promo khusus weekend untuk Toyota Avanza, Innova, dan Fortuner.", until: "Setiap Minggu", tag: "WEEKEND" },
  { title: "Korporasi Long-Term", desc: "Harga spesial untuk kontrak korporasi 6 bulan ke atas.", until: "Negotiable", tag: "B2B" },
  { title: "Cashback Rp 500K", desc: "Cashback untuk pelanggan baru dengan minimum sewa bulanan.", until: "31 Des 2024", tag: "NEW USER" },
];

const Promo = () => (
  <Layout>
    <PageHero title="PROMO & CONTENT" tagline="Penawaran terbaik untuk teman perjalanan Anda." />

    <section className="container-px mx-auto max-w-7xl py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROMOS.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-2xl bg-card border border-border hover-lift">
            <div className="aspect-[16/10] bg-gradient-to-br from-primary to-primary-dark relative">
              <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-wide text-primary">
                {p.tag}
              </span>
              <span className="absolute bottom-4 right-4 font-display text-5xl font-black text-white/30">%</span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Berlaku s.d. <span className="font-semibold text-ink">{p.until}</span></span>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">
                  Klaim →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-secondary py-16">
      <div className="container-px mx-auto max-w-7xl text-center">
        <h2 className="font-display text-3xl font-black text-ink">Ikuti Instagram Kami</h2>
        <p className="mt-2 text-muted-foreground">@temanpergi.id — update promo & konten harian</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-primary/30 to-primary/70" />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Promo;
