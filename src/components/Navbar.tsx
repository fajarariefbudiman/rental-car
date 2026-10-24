import digiatLogo from "../assets/digiat.png";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

type SubItem = {
  label: string;
  to: string;
};

type NavItem = {
  label: string;
  to?: string;
  children?: SubItem[];
};

const NAV: NavItem[] = [
  {
    label: "Produk & Layanan",
    children: [
      {
        label: "Dengan Pengemudi",
        to: "/layanan#dengan-pengemudi",
      },
      {
        label: "Tanpa Pengemudi (Lepas Kunci)",
        to: "/layanan#lepas-kunci",
      },
      {
        label: "Sewa Bulanan",
        to: "/layanan#sewa-bulanan",
      },
      {
        label: "Operasional Kantor",
        to: "/layanan#operasional",
      },
    ],
  },
  {
    label: "Armada",
    children: [
      {
        label: "City Car / LCGC",
        to: "/vehicle?cat=CITY+CAR+(LCGC)",
      },
      {
        label: "MPV",
        to: "/vehicle?cat=MPV",
      },
      {
        label: "L-MPV",
        to: "/vehicle?cat=L-MPV",
      },
      {
        label: "SUV",
        to: "/vehicle?cat=SUV",
      },
      {
        label: "Luxury Car",
        to: "/vehicle?cat=LUXURY+CAR",
      },
      {
        label: "Mini Bus",
        to: "/vehicle?cat=MINI+BUS",
      },
    ],
  },
  {
    label: "Promo",
    to: "/promo",
  },
  {
    label: "Tentang Kami",
    children: [
      {
        label: "Profil Perusahaan",
        to: "/about",
      },
      {
        label: "Kenapa Pilih Kami",
        to: "/about#keunggulan",
      },
      {
        label: "Penghargaan & Kepercayaan",
        to: "/about#penghargaan",
      },
    ],
  },
  {
    label: "Bantuan",
    children: [
      {
        label: "FAQ",
        to: "/faq",
      },
      {
        label: "Hubungi Kami",
        to: "/contact",
      },
      {
        label: "Lokasi Layanan",
        to: "/contact#lokasi",
      },
    ],
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDrop, setActiveDrop] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  const location = useLocation();

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileSub(null);
    setActiveDrop(null);
  }, [location.pathname, location.search, location.hash]);

  const baseText = transparent ? "text-white" : "text-ink";

  const headerBg = transparent
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-md shadow-sm";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${headerBg}`}
    >
      <div className='container-px mx-auto flex h-20 max-w-7xl items-center justify-between gap-4'>
        {/* DiGiatGroup Branding */}
        <Link
          to='/'
          className='flex items-center gap-2 shrink-0'
          aria-label='DiGiatGroup Home'
        >
          <img
            src={digiatLogo}
            alt='DiGiatGroup'
            className='h-9 w-9 md:h-10 md:w-10 object-contain'
          />

          <span
            className={`text-xl md:text-2xl font-poppins transition-colors duration-300 ${baseText}`}
          >
            <span className='font-bold'>DiGiat</span>
            <span className='font-light'>Group</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex items-center gap-1'>
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className='relative'
                onMouseEnter={() => setActiveDrop(item.label)}
                onMouseLeave={() => setActiveDrop(null)}
              >
                <button
                  type='button'
                  onClick={() =>
                    setActiveDrop(activeDrop === item.label ? null : item.label)
                  }
                  aria-expanded={activeDrop === item.label}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${baseText} hover:text-primary`}
                >
                  {item.label}

                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      activeDrop === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDrop === item.label && (
                  <div className='absolute left-0 top-full min-w-[260px] pt-2 animate-slide-down'>
                    <div className='rounded-xl border border-border bg-white p-2 shadow-xl'>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={() => setActiveDrop(null)}
                          className='block rounded-lg px-3 py-2.5 text-sm text-ink hover:bg-secondary hover:text-primary transition-colors'
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to ?? "/"}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold transition-colors ${baseText} hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden lg:flex items-center gap-2 shrink-0'>
          <Link
            to='/contact'
            className='rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:scale-[1.02]'
          >
            Booking Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type='button'
          onClick={() => setOpen((prev) => !prev)}
          className={`lg:hidden rounded-md p-2 ${baseText}`}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='fixed inset-0 top-20 z-40 overflow-y-auto bg-white animate-fade-in lg:hidden'>
          <nav className='container-px mx-auto max-w-7xl py-4 pb-32'>
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className='border-b border-border'>
                  <button
                    type='button'
                    onClick={() =>
                      setMobileSub(mobileSub === item.label ? null : item.label)
                    }
                    aria-expanded={mobileSub === item.label}
                    className='flex w-full items-center justify-between py-4 text-left text-base font-semibold text-ink'
                  >
                    {item.label}

                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        mobileSub === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileSub === item.label && (
                    <div className='space-y-1 pb-3 pl-2 animate-slide-down'>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={() => setOpen(false)}
                          className='block rounded-lg px-3 py-2.5 text-sm text-ink/80 hover:bg-secondary'
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to ?? "/"}
                  onClick={() => setOpen(false)}
                  className='block border-b border-border py-4 text-base font-semibold text-ink'
                >
                  {item.label}
                </NavLink>
              ),
            )}

            <div className='mt-6 grid gap-3'>
              <Link
                to='/contact'
                onClick={() => setOpen(false)}
                className='rounded-full border border-ink/20 px-4 py-3 text-center text-sm font-semibold text-ink'
              >
                <Phone size={16} className='mr-2 inline' />
                Hubungi Kami
              </Link>

              <Link
                to='/contact'
                onClick={() => setOpen(false)}
                className='rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-md'
              >
                Booking Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
