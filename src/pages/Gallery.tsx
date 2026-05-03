import { useEffect, useState } from "react";
import { Layout, PageHero } from "../components/Layout";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import avanza from "../assets/car-avanza.png";
import ertiga from "../assets/car-ertiga.png";
import innova from "../assets/car-innova.png";
import fortuner from "../assets/car-fortuner.png";
import xpander from "../assets/car-xpander.png";
import brio from "../assets/car-brio.png";
import alphard from "../assets/car-alphard.png";
import veloz from "../assets/car-veloz.png";
import rush from "../assets/car-rush.png";
import agya from "../assets/car-agya.png";
import hero from "../assets/hero-jakarta.jpg";

const IMAGES = [
  { src: avanza, alt: "Toyota Avanza" },
  { src: ertiga, alt: "Suzuki Ertiga" },
  { src: innova, alt: "Toyota Innova" },
  { src: fortuner, alt: "Toyota Fortuner" },
  { src: xpander, alt: "Mitsubishi Xpander" },
  { src: brio, alt: "Honda Brio" },
  { src: hero, alt: "Jakarta Skyline" },
  { src: alphard, alt: "Toyota Alphard" },
  { src: veloz, alt: "Toyota Veloz" },
  { src: rush, alt: "Toyota Rush" },
  { src: agya, alt: "Toyota Agya" },
];

const Gallery = () => {
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % IMAGES.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + IMAGES.length) % IMAGES.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx]);

  return (
    <Layout>
      <PageHero title="GALLERY" tagline="Momen bersama armada & pelanggan DigiatGroup" />

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="mb-4 block w-full overflow-hidden rounded-xl bg-secondary break-inside-avoid hover-lift"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-contain" />
            </button>
          ))}
        </div>
      </section>

      {idx !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 animate-fade-in">
          <button onClick={() => setIdx(null)} className="absolute top-4 right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Close">
            <X size={22} />
          </button>
          <button
            onClick={() => setIdx((i) => (i! - 1 + IMAGES.length) % IMAGES.length)}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <img src={IMAGES[idx].src} alt={IMAGES[idx].alt} className="max-h-[85vh] max-w-[85vw] object-contain animate-scale-in" />
          <button
            onClick={() => setIdx((i) => (i! + 1) % IMAGES.length)}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
