import { useRef, useState } from "react";
import { Layout } from "../components/Layout";
import { BookingWidget } from "../components/BookingWidget";
import { TrustBar } from "../components/TrustBar";
import { SectionHeading } from "../components/SectionHeading";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import hero from "../assets/hero-jakarta.jpg";
import avanza from "../assets/car-avanza.png";
import ertiga from "../assets/car-ertiga.png";
import innova from "../assets/car-innova.png";

const REVIEWS = [
  {
    name: "Taraka Putra Satriani",
    initial: "T",
    color: "bg-purple-500",
    badge: "Local Guide",
    count: "12 ulasan",
    time: "8 bulan lalu",
    text: "Saya baru saja menggunakan jasa rental mobil dari Temanpergi.id dan sangat puas dengan pelayanannya. Mobil bersih, supir ramah, dan harga sangat bersaing. Recommended!",
  },
  {
    name: "Elzafan Dede",
    initial: "E",
    color: "bg-emerald-500",
    badge: null,
    count: "3 ulasan",
    time: "5 bulan lalu",
    text: "Booking gampang, ga pake mahal, anti ribett2, best rentall sih 👍 admin nya juga fast respon banget!",
  },
  {
    name: "Harapan Kreatif Indonesia",
    initial: "H",
    color: "bg-primary",
    badge: "Local Guide",
    count: "27 ulasan",
    time: "1 tahun lalu",
    text: "Perusahaan Sewa Mobil paling terbaik sejauh ini yang pernah saya gunakan. Armada lengkap, profesional, dan transparan dari awal sampai akhir.",
  },
];

const PROMOS = [
  {
    id: 1,
    tag: "Rental Mobil",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Long Weekend Deals: Diskon hingga 50%",
    description: "Nikmati perjalanan long weekend dengan armada pilihan. Rental harian mulai 300rb, bulanan mulai 5 juta.",
    period: "28 Apr – 2 Jun 2026",
    badge: "50% OFF",
    badgeColor: "bg-red-500",
    gradient: "from-[#1e3a5f] to-[#2d6a9f]",
  },
  {
    id: 2,
    tag: "Rental Mobil",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Pesan Sekali, Praktis ke Banyak Tujuan",
    description: "Sewa mobil harian mulai 200rb, bulanan mulai 4 juta. Layanan terpercaya ke seluruh Indonesia.",
    period: "1 – 30 Apr 2026",
    badge: "50% OFF",
    badgeColor: "bg-orange-500",
    gradient: "from-[#1a4a3a] to-[#2d8a6a]",
  },
  {
    id: 3,
    tag: "Airport Transfer",
    tagColor: "bg-orange-100 text-orange-700",
    title: "DiGiat × Garuda: 33% Rental Mobil",
    description: "Lanjutkan perjalanan udara Anda dengan armada darat premium. Mulai dari 200rb/hari.",
    period: "1 Mar – 31 Mei 2026",
    badge: "33% OFF",
    badgeColor: "bg-primary",
    gradient: "from-[#3a1a1a] to-[#8a2d2d]",
  },
  {
    id: 4,
    tag: "Sewa Bulanan",
    tagColor: "bg-green-100 text-green-700",
    title: "Paket Bulanan Hemat untuk Kantor",
    description: "Solusi transportasi operasional kantor dengan armada lengkap. Pengemudi profesional tersedia.",
    period: "Berlaku sepanjang 2026",
    badge: "HEMAT",
    badgeColor: "bg-green-600",
    gradient: "from-[#1a3a2a] to-[#2d6a4a]",
  },
  {
    id: 5,
    tag: "Lepas Kunci",
    tagColor: "bg-purple-100 text-purple-700",
    title: "Self Drive Weekend: Bebas Jelajahi Kota",
    description: "Lepas kunci akhir pekan tanpa pengemudi. Fleksibel, bebas, dan hemat. Mulai 250rb/hari.",
    period: "Setiap Sabtu – Minggu",
    badge: "SPESIAL",
    badgeColor: "bg-purple-600",
    gradient: "from-[#2a1a3a] to-[#4a2d6a]",
  },
];

const VISIBLE = 3;

const Index = () => {
  const [current, setCurrent] = useState(0);
  const max = PROMOS.length - VISIBLE;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <Layout transparentNav>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-24">
        <img
          src={hero}
          alt="Jakarta city skyline"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/40 to-black/70" />

        <div className="relative z-10 container-px mx-auto max-w-5xl text-center pt-6 pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">#TemanNyamanBepergianmu</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white text-balance">
            Pergi nyaman & aman, <span className="text-orange-300">temanpergi.id</span> selalu nemenin!
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base text-white/90 leading-relaxed">
            Rental mobil harian, mingguan & bulanan dari city car sampai SUV — untuk kebutuhan operasional kantor maupun pribadi Anda.
          </p>
        </div>

        <div className="relative z-10 w-full container-px mx-auto max-w-6xl pb-16">
          <BookingWidget />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none opacity-30">
          <div className="container-px mx-auto max-w-6xl flex items-end justify-center gap-2 md:gap-6 translate-y-12">
            <img src={avanza} alt="" className="w-1/3 max-w-[260px]" />
            <img src={ertiga} alt="" className="w-1/3 max-w-[300px]" />
            <img src={innova} alt="" className="w-1/3 max-w-[260px]" />
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="py-20 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                Penawaran Terbaik
              </span>
              <h2 className="text-4xl font-extrabold text-ink leading-tight">
                Promo Spesial untuk Anda
              </h2>
              <p className="mt-2 text-muted-foreground max-w-md text-sm leading-relaxed">
                Dapatkan penawaran eksklusif untuk rental mobil harian, mingguan & bulanan.
                Jangan lewatkan kesempatan ini!
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <Link
                to="/promo"
                className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Lihat Semua Promo <ArrowRight size={16} />
              </Link>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={prev}
                  disabled={current === 0}
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-ink hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  disabled={current >= max}
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-ink hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + ${20 / VISIBLE}px)))`,
              }}
            >
              {PROMOS.map((promo) => (
                <div
                  key={promo.id}
                  className="flex-shrink-0 w-[calc((100%-40px)/3)] group cursor-pointer"
                >
                  {/* Card image area */}
                  <div className={cn("relative rounded-2xl overflow-hidden bg-gradient-to-br h-52", promo.gradient)}>
                    <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/5" />
                    <div className="absolute -right-4 -bottom-8 h-28 w-28 rounded-full bg-white/5" />
                    <div className={cn("absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-extrabold text-white shadow-lg", promo.badgeColor)}>
                      {promo.badge}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/30 backdrop-blur-sm px-3 py-2">
                      <p className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">
                        Periode Promo
                      </p>
                      <p className="text-xs font-bold text-white mt-0.5">{promo.period}</p>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="mt-4">
                    <span className={cn("inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold mb-2", promo.tagColor)}>
                      {promo.tag}
                    </span>
                    <h3 className="text-base font-bold text-ink leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {promo.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {promo.description}
                    </p>
                    <Link
                      to="/promo"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                    >
                      Lihat Detail <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile nav */}
          <div className="flex md:hidden items-center justify-between mt-8">
            <Link to="/promo" className="text-sm font-semibold text-primary flex items-center gap-1">
              Lihat Semua <ArrowRight size={14} />
            </Link>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={current === 0}
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                disabled={current >= max}
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === current ? "w-6 bg-primary" : "w-1.5 bg-border"
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="bg-secondary py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Layanan Kami"
            title="Kendaraan Untuk Semua Kebutuhan Perjalanan"
            description="Kami paham setiap bisnis dan pribadi mempunyai kebutuhan transportasi yang beragam. Maka dari itu, TemanPergi.id menawarkan berbagai layanan sewa kendaraan sebagai solusi untuk memenuhi kebutuhan transportasi yang dapat disesuaikan dengan berbagai kebutuhan."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* BISNIS */}
            <article className="rounded-2xl bg-card p-8 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Kebutuhan</p>
                  <h3 className="text-2xl font-black text-ink">Bisnis</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink/75 mb-6">
                Solusi transportasi profesional untuk operasional kantor, kunjungan klien, perjalanan dinas, dan kebutuhan bisnis lainnya dengan armada premium dan pengemudi berpengalaman.
              </p>
              <ul className="space-y-2 mb-6">
                {["Operasional Kantor", "Kunjungan Klien & Meeting", "Perjalanan Dinas", "Sewa Bulanan Korporat"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink/80">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Pelajari lebih lanjut
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </article>

            {/* PRIBADI */}
            <article className="rounded-2xl bg-card p-8 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Kebutuhan</p>
                  <h3 className="text-2xl font-black text-ink">Pribadi</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink/75 mb-6">
                Nikmati perjalanan nyaman dan aman bersama keluarga atau teman. Tersedia berbagai pilihan armada dari city car hingga SUV untuk setiap momen perjalanan Anda.
              </p>
              <ul className="space-y-2 mb-6">
                {["Wisata & Liburan", "Acara Keluarga", "Pernikahan & Event", "Antar Jemput Bandara"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink/80">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Pelajari lebih lanjut
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </article>
          </div>
        </div>
      </section>

      <TrustBar />
    </Layout>
  );
};

export default Index;