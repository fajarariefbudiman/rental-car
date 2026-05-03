import { Layout, PageHero } from "../components/Layout";
import { SectionHeading } from "../components/SectionHeading";
import { Car, KeyRound, CalendarRange, Building2, Users, MapPinned, Clock, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: "dengan-pengemudi",
    icon: Car,
    title: "Dengan Pengemudi",
    desc: "Nikmati perjalanan nyaman dengan pengemudi profesional kami yang berpengalaman.",
  },
  {
    id: "lepas-kunci",
    icon: KeyRound,
    title: "Lepas Kunci (Self Drive)",
    desc: "Kebebasan berkendara tanpa pengemudi, cocok untuk yang ingin privasi penuh.",
  },
  {
    id: "sewa-bulanan",
    icon: CalendarRange,
    title: "Sewa Bulanan",
    desc: "Solusi hemat untuk kebutuhan mobilitas jangka panjang dengan harga spesial.",
  },
  {
    id: "operasional",
    icon: Building2,
    title: "Operasional Kantor",
    desc: "Armada kendaraan untuk menunjang operasional bisnis dan perusahaan Anda.",
  },
];

const STATS = [
  { icon: Car, value: "1000+", label: "Armada Tersedia" },
  { icon: MapPinned, value: "50+", label: "Kota Layanan" },
  { icon: Clock, value: "24/7", label: "Customer Support" },
  { icon: Award, value: "10+", label: "Tahun Pengalaman" },
];

const Layanan = () => (
  <Layout>
    <PageHero eyebrow="Layanan Kami" title="Produk & Layanan" tagline="Solusi rental mobil lengkap untuk semua kebutuhan mobilitas Anda — pribadi maupun korporat." />

    <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
      <SectionHeading eyebrow="Pilihan Layanan" title="Sesuaikan dengan kebutuhanmu" description="Dari perjalanan harian hingga kebutuhan operasional jangka panjang, TemanPergi.id punya solusinya." />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SERVICES.map(({ id, icon: Icon, title, desc }) => (
          <article key={id} id={id} className="rounded-2xl bg-white border border-border p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon size={28} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <Link
              to="/vehicle"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Lihat Detail <ArrowRight size={14} />
            </Link>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-ink text-white py-16">
      <div className="container-px mx-auto max-w-7xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-primary">Keunggulan Kami</p>
        <h2 className="mt-2 text-center font-display text-3xl md:text-4xl font-black">Kenapa pilih TemanPergi.id?</h2>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="mx-auto text-primary" size={32} />
              <p className="mt-4 font-display text-3xl md:text-4xl font-black text-white">{value}</p>
              <p className="mt-1 text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Layanan;
