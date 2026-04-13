import { Link } from 'react-router-dom';
import { Sparkles, Clock, DollarSign } from 'lucide-react';

const guarantees = [
  { icon: Clock, text: 'Fast Service' },
  { icon: Sparkles, text: 'Expert Care' },
  { icon: DollarSign, text: 'Affordable Pricing' },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-cleaning-a-shoe-3831/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="overlay-dark" />

      {/* Content */}
      <div className="container-custom relative z-10 py-32 text-center text-white">
        <h1 className="heading-1 mb-6 animate-fade-in">
          Restore Your Shoes to
          <span className="block text-primary">Perfect Condition</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 opacity-90 md:text-xl" style={{ animationDelay: '0.1s' }}>
          Professional shoe cleaning and care services for all types of footwear. Give your favorite shoes the treatment they deserve.
        </p>

        {/* CTA Button */}
        <Link
          to="/booking"
          className="btn-primary mb-12 inline-flex text-lg"
          style={{ animationDelay: '0.2s' }}
        >
          Book Cleaning Service
        </Link>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {guarantees.map(({ icon: Icon, text }, index) => (
            <div
              key={text}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
