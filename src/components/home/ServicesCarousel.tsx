import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Deep Clean Pro',
    type: 'Premium',
    price: 'From Rp 150,000',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80',
    description: 'Complete deep cleaning for heavily soiled shoes',
  },
  {
    id: 2,
    name: 'Quick Fresh',
    type: 'Express',
    price: 'From Rp 75,000',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    description: 'Fast refresh for lightly worn shoes',
  },
  {
    id: 3,
    name: 'Premium Care Plus',
    type: 'Premium',
    price: 'From Rp 250,000',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    description: 'Full restoration with protection coating',
  },
  {
    id: 4,
    name: 'Sneaker Restore',
    type: 'Specialist',
    price: 'From Rp 175,000',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80',
    description: 'Specialized treatment for sneakers',
  },
  {
    id: 5,
    name: 'Leather Revival',
    type: 'Specialist',
    price: 'From Rp 200,000',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80',
    description: 'Expert care for leather footwear',
  },
  {
    id: 6,
    name: 'Suede Specialist',
    type: 'Specialist',
    price: 'From Rp 185,000',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
    description: 'Delicate cleaning for suede and nubuck',
  },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (services.length - itemsPerView + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, itemsPerView]);

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, services.length - itemsPerView)));
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-2 mb-4">Our Services</h2>
          <p className="body-text mx-auto max-w-2xl">
            From quick refreshes to complete restorations, we offer professional cleaning services for all types of footwear.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                >
                  <div className="card-hover group overflow-hidden rounded-2xl bg-card shadow-md">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {service.type}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-bold text-card-foreground">
                        {service.name}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-primary">
                          {service.price}
                        </span>
                        <Link
                          to="/services"
                          className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="absolute -left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-primary hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-foreground"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex >= services.length - itemsPerView}
            className="absolute -right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-primary hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-foreground"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: services.length - itemsPerView + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
