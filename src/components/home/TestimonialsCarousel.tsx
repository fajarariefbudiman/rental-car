import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rudi Hartono',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    shoe: 'Nike Air Jordan 1',
    rating: 5,
    quote: 'My Jordans looked brand new after the Premium Care service. The team really knows their stuff!',
  },
  {
    id: 2,
    name: 'Sarah Wijaya',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    shoe: 'Adidas Stan Smith',
    rating: 5,
    quote: 'Super convenient with the pick-up and delivery service. My white Stan Smiths are spotless again!',
  },
  {
    id: 3,
    name: 'Michael Chen',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    shoe: 'Timberland Boots',
    rating: 5,
    quote: 'Best shoe cleaning service in Jakarta. They restored my old Timberlands perfectly.',
  },
  {
    id: 4,
    name: 'Anita Sari',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    shoe: 'Converse Chuck Taylor',
    rating: 5,
    quote: 'Fast, professional, and affordable. Will definitely use their service again!',
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-2 mb-4">What Our Customers Say</h2>
          <p className="body-text mx-auto max-w-2xl">
            Don't just take our word for it. Here's what our happy customers have to say.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === currentIndex
                  ? 'relative opacity-100'
                  : 'absolute inset-0 opacity-0'
              }`}
            >
              <div className="rounded-2xl bg-card p-8 text-center shadow-lg md:p-12">
                <Quote className="mx-auto mb-6 h-12 w-12 text-primary/30" />

                <p className="mb-8 text-lg leading-relaxed text-card-foreground md:text-xl">
                  "{testimonial.quote}"
                </p>

                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
                <h4 className="font-semibold text-card-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">{testimonial.shoe}</p>
              </div>
            </div>
          ))}

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
