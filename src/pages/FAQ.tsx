import { Layout, PageHero } from "../components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const FAQS = [
  { q: "Apa saja syarat sewa mobil bulanan?", a: "KTP, SIM A yang masih berlaku, NPWP (untuk korporasi), serta deposit sesuai tipe kendaraan. Untuk WNA wajib menyertakan paspor & KITAS." },
  { q: "Apakah tersedia supir/driver?", a: "Ya, kami menyediakan opsi lepas kunci maupun dengan supir profesional berpengalaman. Biaya supir terpisah dari biaya sewa." },
  { q: "Bagaimana cara booking?", a: "Anda bisa booking lewat tombol WhatsApp di website ini, kontak admin via telepon, atau datang langsung ke kantor kami di Jakarta Selatan." },
  { q: "Apakah ada deposit?", a: "Ya, deposit bervariasi mulai dari Rp 1.000.000 tergantung tipe kendaraan. Deposit dikembalikan penuh saat mobil dikembalikan dalam kondisi baik." },
  { q: "Area layanan dimana saja?", a: "Kami melayani Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi). Untuk luar kota dapat dinegosiasikan dengan biaya tambahan." },
  { q: "Apakah mobil sudah termasuk asuransi?", a: "Semua armada kami sudah termasuk asuransi all risk. Pelanggan tetap bertanggung jawab untuk own risk sesuai polis." },
  { q: "Bagaimana jika mobil mogok di jalan?", a: "Tim kami siap 24 jam untuk derek & penggantian unit. Hubungi nomor darurat yang tertera di buku panduan kendaraan." },
  { q: "Apakah bisa diperpanjang?", a: "Tentu bisa. Hubungi admin minimal 1 hari sebelum jatuh tempo untuk perpanjangan dengan harga spesial." },
  { q: "Metode pembayaran apa saja yang diterima?", a: "Kami menerima transfer bank (BCA, Mandiri, BRI), QRIS, dan pembayaran tunai di kantor." },
];

const FAQ = () => (
  <Layout>
    <PageHero title="FAQ" tagline="Pertanyaan yang sering diajukan." />

    <section className="container-px mx-auto max-w-3xl py-16">
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-5 [&[data-state=open]]:border-primary">
            <AccordionTrigger className="text-left font-semibold text-ink hover:no-underline [&[data-state=open]>svg]:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </Layout>
);

export default FAQ;
