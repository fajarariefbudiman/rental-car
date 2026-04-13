import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import BackToTop from '../components/shared/BackToTop';

const categories = ['All', 'Sneakers', 'Leather', 'Boots', 'Canvas', 'Suede'];

const galleryItems = [
  { id: 1, category: 'Sneakers', before: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600', after: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600', type: 'Nike Air Max', service: 'Deep Clean Pro' },
  { id: 2, category: 'Sneakers', before: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600', after: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600', type: 'Adidas Ultraboost', service: 'Premium Care Plus' },
  { id: 3, category: 'Canvas', before: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600', after: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600', type: 'Converse Chuck', service: 'Quick Fresh' },
  { id: 4, category: 'Leather', before: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600', after: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600', type: 'Leather Oxford', service: 'Leather Revival' },
  { id: 5, category: 'Boots', before: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600', after: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600', type: 'Timberland Boots', service: 'Premium Care Plus' },
  { id: 6, category: 'Suede', before: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600', after: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=600', type: 'Suede Desert Boot', service: 'Suede Specialist' },
  { id: 7, category: 'Sneakers', before: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600', after: 'https://images.unsplash.com/photo-1556048219-bb6978360b84?w=600', type: 'Jordan Retro', service: 'Sneaker Restore' },
  { id: 8, category: 'Canvas', before: 'https://images.unsplash.com/photo-1494496195158-c3becb4f2475?w=600', after: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600', type: 'Vans Old Skool', service: 'Deep Clean Pro' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [sliderPos, setSliderPos] = useState(50);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter);
  const currentItem = lightbox !== null ? galleryItems.find((i) => i.id === lightbox) : null;

  const goTo = (direction: 'prev' | 'next') => {
    if (lightbox === null) return;
    const currentIdx = galleryItems.findIndex((i) => i.id === lightbox);
    const newIdx = direction === 'prev'
      ? (currentIdx - 1 + galleryItems.length) % galleryItems.length
      : (currentIdx + 1) % galleryItems.length;
    setLightbox(galleryItems[newIdx].id);
    setSliderPos(50);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1920)' }}
          />
          <div className="overlay-dark" />
          <div className="container-custom relative z-10 text-center text-white">
            <h1 className="heading-1 mb-4">Gallery</h1>
            <p className="mx-auto max-w-2xl text-lg">
              See the amazing transformations we've achieved for our customers.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-6 py-2 font-medium transition-colors ${filter === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground hover:bg-primary/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => { setLightbox(item.id); setSliderPos(50); }}
                  className="card-hover mb-6 cursor-pointer overflow-hidden rounded-2xl bg-card shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={item.after}
                      alt={item.type}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-card-foreground">{item.type}</h4>
                    <p className="text-sm text-muted-foreground">{item.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {currentItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 text-white hover:text-primary"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={() => goTo('prev')}
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="max-h-[80vh] max-w-4xl">
              {/* Before/After Slider */}
              <div
                className="relative aspect-video cursor-ew-resize select-none overflow-hidden rounded-xl"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                  setSliderPos((x / rect.width) * 100);
                }}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                  setSliderPos((x / rect.width) * 100);
                }}
              >
                <img src={currentItem.after} alt="After" className="h-full w-full object-cover" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                  <img
                    src={currentItem.before}
                    alt="Before"
                    className="h-full object-cover"
                    style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none' }}
                  />
                </div>
                <div
                  className="absolute bottom-0 top-0 w-1 bg-white"
                  style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                    <ChevronLeft className="h-4 w-4 text-foreground" />
                    <ChevronRight className="h-4 w-4 text-foreground" />
                  </div>
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-warning px-3 py-1 text-xs font-semibold text-warning-foreground">Before</span>
                <span className="absolute right-4 top-4 rounded-full bg-success px-3 py-1 text-xs font-semibold text-success-foreground">After</span>
              </div>

              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold">{currentItem.type}</h3>
                <p className="text-white/70">{currentItem.service}</p>
              </div>
            </div>

            <button
              onClick={() => goTo('next')}
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
};

export default Gallery;
