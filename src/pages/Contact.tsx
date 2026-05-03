import { Layout, PageHero } from "../components/Layout";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { WHATSAPP_URL } from "../data/vehicles";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "Dengan Pengemudi", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pesan terkirim! Kami akan menghubungi Anda segera.");
    setForm({ name: "", phone: "", service: "Dengan Pengemudi", message: "" });
  };

  return (
    <Layout>
      <PageHero eyebrow="Bantuan" title="Hubungi Kami" tagline="Tim TemanPergi.id siap membantu kebutuhan rental Anda 24/7." />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form 60% */}
          <form onSubmit={submit} className="lg:col-span-3 rounded-2xl bg-white border border-border p-6 md:p-8 space-y-4 shadow-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Form Kontak</p>
              <h2 className="mt-1 font-display text-2xl md:text-3xl font-black text-ink">Kirim Pesan ke Kami</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Nama" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Input label="No. WhatsApp" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/80">Jenis Layanan</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>Dengan Pengemudi</option>
                <option>Lepas Kunci</option>
                <option>Sewa Bulanan</option>
                <option>Operasional Kantor</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/80">Pesan</label>
              <textarea
                required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <button type="submit" className="w-full rounded-xl bg-primary py-3.5 font-semibold text-white hover:bg-primary-dark transition">
              Kirim Pesan
            </button>
          </form>

          {/* Info 40% */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-white border border-border p-6 shadow-sm space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Info Kontak</p>
              <InfoRow icon={MessageCircle} title="WhatsApp" value="+62 812-3456-7890" href={WHATSAPP_URL} />
              <InfoRow icon={Mail} title="Email" value="hello@temanpergi.id" href="mailto:hello@temanpergi.id" />
              <InfoRow icon={Clock} title="Jam Operasional" value="24 Jam, 7 hari seminggu" />
              <InfoRow icon={MapPin} title="Alamat" value="Jl. Sudirman, Jakarta Selatan" />
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] hover:bg-[#1fb957] py-4 font-semibold text-white shadow-md transition"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.03 1.318-1.044 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.498-1.318.215-.502.215-.93.157-1.017-.115-.187-.3-.3-.53-.43zM16.115 6.5c-5.31 0-9.61 4.302-9.61 9.612 0 1.69.443 3.323 1.275 4.756L6 26.5l5.769-1.518a9.59 9.59 0 0 0 4.345 1.046h.01c5.3 0 9.61-4.302 9.61-9.612 0-2.566-1.075-4.985-2.873-6.795-1.812-1.812-4.222-2.93-6.788-2.93z"/></svg>
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>

        <div id="lokasi" className="mt-12 overflow-hidden rounded-2xl border border-border h-[300px]">
          <iframe
            title="Lokasi TemanPergi.id"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.295999074673!2d106.8194732!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
};

const Input = ({ label, value, onChange, required }: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) => (
  <div>
    <label className="text-xs font-semibold text-ink/80">{label}</label>
    <input
      required={required} value={value} onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);

const InfoRow = ({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) => {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})} className="flex items-start gap-3 group">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{title}</p>
        <p className="text-sm font-semibold text-ink group-hover:text-primary transition-colors">{value}</p>
      </div>
    </Comp>
  );
};

export default Contact;
