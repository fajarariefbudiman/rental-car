import digiatLogo from "../assets/digiat.png";
import { Link } from "react-router-dom";
import {
  Instagram,
  MessageCircle,
  Music2,
  Youtube,
  ShieldCheck,
} from "lucide-react";
import { WHATSAPP_URL } from "../data/vehicles";

const COL_LAYANAN = [
  ["Dengan Pengemudi", "/layanan#dengan-pengemudi"],
  ["Lepas Kunci", "/layanan#lepas-kunci"],
  ["Sewa Bulanan", "/layanan#sewa-bulanan"],
  ["Operasional Kantor", "/layanan#operasional"],
];
const COL_PERUSAHAAN: [string, string, boolean?][] = [
  ["Tentang Kami", "/about"],
  ["Armada", "/vehicle"],
  ["Promo", "/promo"],
  ["Karir", "#", true],
];
const COL_BANTUAN = [
  ["FAQ", "/faq"],
  ["Hubungi Kami", "/contact"],
  ["Lokasi Layanan", "/contact#lokasi"],
  ["Syarat & Ketentuan", "#"],
];

export const Footer = () => (
  <footer className='bg-[#1A1A1A] text-gray-400'>
    <div className='container-px mx-auto max-w-7xl py-16'>
      <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
        {/* Col 1 */}
        <div>
          {/* Logo — sama seperti Navbar */}
          <Link to='/' className='flex items-center gap-2'>
            <img
              src={digiatLogo}
              alt='DiGiat Logo'
              className='h-8 w-auto object-contain'
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = "none";
                (img.nextSibling as HTMLElement).style.display = "inline";
              }}
            />
            <span className='text-2xl font-poppins text-white'>
              <span className='font-bold'>DiGiat</span>
              <span className='font-light'>Group</span>
            </span>
          </Link>

          <p className='mt-4 text-sm italic leading-relaxed max-w-xs'>
            Teman nyaman bepergianmu. Demo layanan sewa mobil harian, mingguan,
            dan bulanan; tidak menerima pesanan sungguhan.
          </p>
          <div className='mt-5 flex gap-2'>
            {[
              {
                Icon: Instagram,
                href: "https://instagram.com",
                label: "Instagram",
              },
              { Icon: Music2, href: "https://tiktok.com", label: "TikTok" },
              { Icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
              { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noreferrer'
                aria-label={label}
                className='rounded-full bg-white/5 p-2.5 hover:bg-primary hover:text-white transition-colors'
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className='mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs'>
            <ShieldCheck size={14} className='text-primary' />
            Template demonstrasi DiGiatGroup
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h3 className='text-sm font-bold uppercase tracking-wider text-white'>
            Produk & Layanan
          </h3>
          <ul className='mt-4 space-y-2.5 text-sm'>
            {COL_LAYANAN.map(([l, h]) => (
              <li key={l as string}>
                <Link
                  to={h as string}
                  className='hover:text-primary transition-colors'
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h3 className='text-sm font-bold uppercase tracking-wider text-white'>
            Perusahaan
          </h3>
          <ul className='mt-4 space-y-2.5 text-sm'>
            {COL_PERUSAHAAN.map(([l, h, soon]) => (
              <li key={l as string}>
                <Link
                  to={h as string}
                  className='hover:text-primary transition-colors inline-flex items-center gap-2'
                >
                  {l}
                  {soon && (
                    <span className='rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary'>
                      Coming Soon
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h3 className='text-sm font-bold uppercase tracking-wider text-white'>
            Bantuan
          </h3>
          <ul className='mt-4 space-y-2.5 text-sm'>
            {COL_BANTUAN.map(([l, h]) => (
              <li key={l}>
                <Link to={h} className='hover:text-primary transition-colors'>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className='border-t border-white/10'>
      <div className='container-px mx-auto max-w-7xl py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs'>
        <p>© {new Date().getFullYear()} DiGiat Group — All Rights Reserved</p>
        <p className='text-gray-500'>
          Bagian dari layanan transportasi terpercaya Indonesia
        </p>
      </div>
    </div>
  </footer>
);
