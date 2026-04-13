import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const transformations = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    type: 'Nike Air Max',
    note: 'Heavy stains removed',
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    type: 'Adidas Ultraboost',
    note: 'Full restoration',
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80',
    type: 'Converse Chuck',
    note: 'Canvas whitening',
  },
  {
    id: 4,
    before: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80',
    type: 'Leather Boots',
    note: 'Leather conditioning',
  },
  {
    id: 5,
    before: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&q=80',
    type: 'Running Shoes',
    note: 'Deep clean & deodorize',
  },
];

const BeforeAfterCard = ({ item }: { item: typeof transformations[0] }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-lg">
      <div
        className="relative aspect-square cursor-ew-resize select-none overflow-hidden"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (isDragging) {
            const rect = e.currentTarget.getBoundingClientRect();
            handleMove(e.clientX, rect);
          }
        }}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          const rect = e.currentTarget.getBoundingClientRect();
          handleMove(touch.clientX, rect);
        }}
      >
        {/* After Image (Background) */}
        <img
          src={item.after}
          alt={`${item.type} after`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.before}
            alt={`${item.type} before`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
            loading="lazy"
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute bottom-0 top-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
            <ChevronLeft className="h-4 w-4 text-foreground" />
            <ChevronRight className="h-4 w-4 text-foreground" />
          </div>
        </div>

        {/* Labels */}
        <span className="absolute left-4 top-4 rounded-full bg-warning px-3 py-1 text-xs font-semibold text-warning-foreground">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-success px-3 py-1 text-xs font-semibold text-success-foreground">
          After
        </span>
      </div>

      <div className="p-4">
        <h4 className="font-semibold text-card-foreground">{item.type}</h4>
        <p className="text-sm text-muted-foreground">{item.note}</p>
      </div>
    </div>
  );
};

const BeforeAfterGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const goTo = (index: number) => {
    const maxIndex = transformations.length - itemsPerView;
    if (index < 0) index = maxIndex;
    if (index > maxIndex) index = 0;
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-2 mb-4">Amazing Transformations</h2>
          <p className="body-text mx-auto max-w-2xl">
            Drag the slider to see the before and after results of our professional cleaning.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {transformations.map((item) => (
                <div key={item.id} className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3">
                  <BeforeAfterCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => goTo(currentIndex - 1)}
            className="absolute -left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => goTo(currentIndex + 1)}
            className="absolute -right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
