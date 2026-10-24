import { useState, type FormEvent } from "react";
import { Layout, PageHero } from "../components/Layout";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";

type ContactForm = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  phone: "",
  service: "Dengan Pengemudi",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);

  const [submitted, setSubmitted] = useState(false);

  const updateForm = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setSubmitted(false);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Demo only: no API request or data storage.
    setSubmitted(true);

    toast.info("Ini hanya simulasi. Pesan tidak dikirim atau disimpan.");
  };

  const resetForm = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  return (
    <Layout>
      <PageHero
        eyebrow='Bantuan'
        title='Hubungi Kami'
        tagline='Demo website rental kendaraan oleh DiGiatGroup. Tidak ada pengiriman pesan atau booking nyata.'
      />

      <section className='container-px mx-auto max-w-7xl py-16 md:py-20'>
        <div className='grid gap-8 lg:grid-cols-5'>
          {/* Form Kontak */}
          <form
            onSubmit={submit}
            className='space-y-4 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8 lg:col-span-3'
          >
            <div>
              <p className='text-xs font-bold uppercase tracking-wider text-primary'>
                Form Kontak Demo
              </p>

              <h2 className='mt-1 font-display text-2xl font-black text-ink md:text-3xl'>
                Simulasi Kirim Pesan
              </h2>

              <p className='mt-2 text-sm text-muted-foreground'>
                Gunakan data contoh saja. Form ini tidak terhubung ke server.
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <Input
                label='Nama'
                value={form.name}
                onChange={(value) => updateForm("name", value)}
                placeholder='Nama contoh'
                required
              />

              <Input
                label='No. WhatsApp'
                value={form.phone}
                onChange={(value) => updateForm("phone", value)}
                placeholder='08xxxxxxxxxx'
                required
              />
            </div>

            <div>
              <label
                htmlFor='service'
                className='text-xs font-semibold text-ink/80'
              >
                Jenis Layanan
              </label>

              <select
                id='service'
                value={form.service}
                onChange={(e) => updateForm("service", e.target.value)}
                className='mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
              >
                <option>Dengan Pengemudi</option>
                <option>Lepas Kunci</option>
                <option>Sewa Bulanan</option>
                <option>Operasional Kantor</option>
              </select>
            </div>

            <div>
              <label
                htmlFor='message'
                className='text-xs font-semibold text-ink/80'
              >
                Pesan
              </label>

              <textarea
                id='message'
                required
                rows={5}
                value={form.message}
                onChange={(e) => updateForm("message", e.target.value)}
                placeholder='Tulis pesan contoh...'
                className='mt-1 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>

            <button
              type='submit'
              className='w-full rounded-xl bg-primary py-3.5 font-semibold text-white transition hover:bg-primary-dark'
            >
              Simulasikan Kirim Pesan
            </button>

            {submitted && (
              <div
                role='status'
                className='rounded-xl border border-primary/20 bg-primary/5 p-4'
              >
                <p className='font-semibold text-ink'>Simulasi Berhasil</p>

                <p className='mt-1 text-sm text-muted-foreground'>
                  Antarmuka form berhasil diuji. Tidak ada pesan yang dikirim,
                  disimpan, atau diteruskan.
                </p>

                <button
                  type='button'
                  onClick={resetForm}
                  className='mt-3 text-sm font-semibold text-primary underline'
                >
                  Coba Lagi
                </button>
              </div>
            )}
          </form>

          {/* Informasi Kontak */}
          <div className='space-y-4 lg:col-span-2'>
            <div className='space-y-4 rounded-2xl border border-border bg-white p-6 shadow-sm'>
              <p className='text-xs font-bold uppercase tracking-wider text-primary'>
                Info Demo
              </p>

              <InfoRow
                icon={MessageCircle}
                title='WhatsApp'
                value='Tidak aktif pada demo'
              />

              <InfoRow icon={Mail} title='Email' value='Tidak tersedia' />

              <InfoRow
                icon={Clock}
                title='Jam Operasional'
                value='Contoh: 24 Jam'
              />

              <InfoRow icon={MapPin} title='Lokasi' value='Lokasi ilustrasi' />
            </div>

            <div className='rounded-2xl bg-primary p-6 text-white'>
              <MessageCircle className='h-8 w-8' />

              <h3 className='mt-4 text-xl font-bold'>Teman Pergi</h3>

              <p className='mt-2 text-sm text-white/80'>
                Ini adalah demo template website rental kendaraan yang
                dikembangkan oleh DiGiatGroup.
              </p>

              <a
                href='https://digiatgroup.com'
                target='_blank'
                rel='noopener noreferrer'
                className='mt-5 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90'
              >
                Kunjungi DiGiatGroup
              </a>
            </div>
          </div>
        </div>

        {/* Lokasi Ilustrasi */}
        <div
          id='lokasi'
          className='mt-12 overflow-hidden rounded-2xl border border-border bg-secondary p-8 text-center'
        >
          <MapPin className='mx-auto h-10 w-10 text-primary' />

          <h3 className='mt-3 text-xl font-bold text-ink'>Area Layanan</h3>

          <p className='mx-auto mt-2 max-w-lg text-sm text-muted-foreground'>
            Lokasi pada website ini hanya ilustrasi untuk kebutuhan template.
            Belum tersedia lokasi operasional rental yang sebenarnya.
          </p>
        </div>
      </section>
    </Layout>
  );
};

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
};

const Input = ({
  label,
  value,
  onChange,
  required = false,
  placeholder,
}: InputProps) => (
  <div>
    <label className='text-xs font-semibold text-ink/80'>{label}</label>

    <input
      type='text'
      required={required}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className='mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
    />
  </div>
);

type InfoRowProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

const InfoRow = ({ icon: Icon, title, value }: InfoRowProps) => (
  <div className='flex items-start gap-3'>
    <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary'>
      <Icon size={18} />
    </span>

    <div>
      <p className='text-xs uppercase tracking-wide text-muted-foreground'>
        {title}
      </p>

      <p className='text-sm font-semibold text-ink'>{value}</p>
    </div>
  </div>
);

export default Contact;
