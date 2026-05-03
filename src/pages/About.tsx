import { Layout, PageHero } from "../components/Layout";
import { Car, Wallet, Clock, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: Car, title: "Armada Lengkap", desc: "Dari city car hingga luxury car, semua tersedia." },
  { icon: Wallet, title: "Harga Terjangkau", desc: "Harga transparan, no hidden cost." },
  { icon: Clock, title: "Pelayanan 24 Jam", desc: "Tim kami siap melayani kapan saja." },
  { icon: ShieldCheck, title: "Bergaransi", desc: "Asuransi & garansi untuk perjalanan aman." },
];

const About = () => (
  <Layout>
    <PageHero title="ABOUT US" tagline="Pergi nyaman dan aman tanpa kendala temanpergi.id selalu nemenin!" />

    <section className="container-px mx-auto max-w-5xl py-16 md:py-24 text-center">
      <h2 className="font-display text-3xl md:text-5xl font-black text-ink">
        Siapa Kami<span className="text-primary">.</span>
      </h2>
      <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
        TemanPergi.id adalah penyedia jasa rental mobil bulanan terpercaya di Jabodetabek.
        Misi kami adalah menjadi teman perjalanan Anda yang nyaman, aman, dan terjangkau —
        baik untuk kebutuhan operasional kantor maupun pribadi.
      </p>
    </section>

    <section className="bg-secondary py-16 md:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <h2 className="text-center font-display text-3xl md:text-4xl font-black text-ink">
          Kenapa Memilih Kami?
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-card p-7 text-center shadow-sm hover-lift">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="rounded-3xl bg-ink text-white p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-display text-3xl md:text-4xl font-black">Tim yang siap melayani.</h3>
          <p className="mt-4 text-white/80 leading-relaxed">
            Tim profesional kami berkomitmen memberikan pengalaman rental terbaik —
            dari proses booking yang mudah hingga pengantaran tepat waktu.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[0,1,2,3,4,5].map((i) => (
            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-primary to-primary-dark opacity-80" />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
