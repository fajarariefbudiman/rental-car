import { Link } from 'react-router-dom';
import { Calendar, Package, Sparkles, Home, MapPin, Clock, Shield, Play } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import BackToTop from '../components/shared/BackToTop';

const steps = [
  {
    icon: Calendar,
    title: 'Book Online',
    description: 'Choose your service, select a date and time for pick-up. You can book through our website or WhatsApp.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
  },
  {
    icon: Package,
    title: 'We Pick Up Your Shoes',
    description: 'Our courier will arrive at your doorstep at the scheduled time. We provide protective bags for your shoes.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600',
  },
  {
    icon: Sparkles,
    title: 'Professional Cleaning',
    description: 'Your shoes go through our multi-step cleaning process by trained specialists using premium products.',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600',
  },
  {
    icon: Home,
    title: 'Delivery Back to You',
    description: 'Once cleaned and inspected, we deliver your fresh shoes back to your door in our signature packaging.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
  },
];

const coverageAreas = [
  'Jakarta Selatan', 'Jakarta Pusat', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara',
  'Tangerang', 'Tangerang Selatan', 'Bekasi', 'Depok', 'Bogor',
];

const turnaround = [
  { service: 'Quick Fresh', time: '1-2 business days' },
  { service: 'Deep Clean Pro', time: '3-5 business days' },
  { service: 'Premium Care Plus', time: '5-7 business days' },
  { service: 'Express (add-on)', time: 'Same day available' },
];

const HowItWorksPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero with Video */}
        <section className="relative py-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=1920"
          >
            <source src="https://cdn.coverr.co/videos/coverr-cleaning-a-shoe-3831/1080p.mp4" type="video/mp4" />
          </video>
          <div className="overlay-dark" />
          <div className="container-custom relative z-10 text-center text-white">
            <h1 className="heading-1 mb-4">How It Works</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Getting your shoes professionally cleaned is as easy as 1-2-3-4.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isReversed = index % 2 === 1;
                return (
                  <div
                    key={step.title}
                    className={`flex flex-col items-center gap-8 lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className="flex-1">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                          {index + 1}
                        </div>
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="heading-3 mb-4">{step.title}</h3>
                      <p className="body-text">{step.description}</p>
                    </div>
                    <div className="flex-1">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full rounded-2xl shadow-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Video */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="heading-2 mb-8 text-center">Watch Our Full Service Journey</h2>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
              <video
                id="journey-video"
                className="aspect-video w-full object-cover"
                poster="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=1920"
                controls={isVideoPlaying}
              >
                <source src="https://cdn.coverr.co/videos/coverr-cleaning-a-shoe-3831/1080p.mp4" type="video/mp4" />
              </video>
              {!isVideoPlaying && (
                <button
                  onClick={() => {
                    const video = document.getElementById('journey-video') as HTMLVideoElement;
                    if (video) {
                      video.play();
                      setIsVideoPlaying(true);
                    }
                  }}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform hover:scale-110"
                >
                  <Play className="h-8 w-8 ml-1" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Coverage & Timeline */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Coverage */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h3 className="heading-3">Pick-Up Coverage Areas</h3>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-lg">
                  <div className="mb-6 aspect-video rounded-xl bg-secondary" />
                  <div className="flex flex-wrap gap-2">
                    {coverageAreas.map((area) => (
                      <span key={area} className="rounded-full bg-primary-light px-3 py-1 text-sm font-medium text-primary">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Turnaround */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <Clock className="h-8 w-8 text-primary" />
                  <h3 className="heading-3">Turnaround Times</h3>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-lg">
                  <div className="space-y-4">
                    {turnaround.map((item) => (
                      <div key={item.service} className="flex items-center justify-between rounded-lg bg-secondary p-4">
                        <span className="font-medium text-foreground">{item.service}</span>
                        <span className="text-primary">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Control */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <Shield className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="heading-2 mb-4">Our Quality Promise</h2>
              <p className="body-text mb-8">
                Every pair of shoes goes through our rigorous 5-point quality check before delivery. We inspect for cleanliness, condition, and proper care. If you're not 100% satisfied, we'll re-clean for free.
              </p>
              <Link to="/booking" className="btn-primary">
                Book Your Service Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
};

export default HowItWorksPage;
