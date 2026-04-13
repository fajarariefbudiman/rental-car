import { Link } from 'react-router-dom';
import { Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import BackToTop from '../components/shared/BackToTop';

const services = [
  {
    name: 'Deep Clean Pro',
    icon: '🧽',
    price: 'Rp 150,000 - 200,000',
    description: 'Complete deep cleaning for heavily soiled shoes. Includes full interior and exterior treatment.',
    features: ['Full deep cleaning', 'Stain removal', 'Interior cleaning', 'Deodorizing', '3-5 days turnaround'],
  },
  {
    name: 'Quick Fresh',
    icon: '⚡',
    price: 'Rp 75,000 - 100,000',
    description: 'Fast refresh for lightly worn shoes. Perfect for regular maintenance.',
    features: ['Exterior cleaning', 'Basic stain removal', 'Quick dry', '1-2 days turnaround'],
  },
  {
    name: 'Premium Care Plus',
    icon: '✨',
    price: 'Rp 250,000 - 350,000',
    description: 'Full restoration with protection coating. Ideal for valuable or designer shoes.',
    features: ['Everything in Deep Clean', 'Color restoration', 'Protective coating', 'Premium packaging', 'Priority service'],
  },
  {
    name: 'Sneaker Restore',
    icon: '👟',
    price: 'Rp 175,000 - 250,000',
    description: 'Specialized treatment for sneakers. Whitening, sole cleaning, and restoration.',
    features: ['Sole cleaning', 'Midsole whitening', 'Lace cleaning', 'Deep clean', 'Paint touch-up'],
  },
  {
    name: 'Leather Revival',
    icon: '🥾',
    price: 'Rp 200,000 - 300,000',
    description: 'Expert care for leather footwear. Conditioning, polishing, and protection.',
    features: ['Leather conditioning', 'Polish & shine', 'Color restoration', 'Scratch repair', 'Waterproofing'],
  },
  {
    name: 'Suede Specialist',
    icon: '🪶',
    price: 'Rp 185,000 - 275,000',
    description: 'Delicate cleaning for suede and nubuck materials.',
    features: ['Gentle suede cleaning', 'Nap restoration', 'Stain treatment', 'Protection spray', 'Color refresh'],
  },
];

const addons = [
  { name: 'Waterproofing', price: 'Rp 50,000' },
  { name: 'Deodorizing', price: 'Rp 25,000' },
  { name: 'Color Restoration', price: 'Rp 75,000' },
  { name: 'Sole Reglue', price: 'Rp 100,000' },
  { name: 'Lace Replacement', price: 'Rp 35,000' },
];

const faqs = [
  {
    q: 'How long does the cleaning process take?',
    a: 'Depending on the service level, it takes 1-7 business days. Quick Fresh is 1-2 days, Deep Clean Pro is 3-5 days, and Premium Care Plus is 5-7 days.',
  },
  {
    q: 'Do you offer pick-up and delivery?',
    a: 'Yes! We offer free pick-up and delivery across Jakarta, Tangerang, Bekasi, Depok, and Bogor for orders above Rp 200,000.',
  },
  {
    q: 'What if I\'m not satisfied with the result?',
    a: 'We offer a satisfaction guarantee. If you\'re not happy with the cleaning, we\'ll re-clean your shoes at no extra charge.',
  },
  {
    q: 'Can you clean designer/luxury shoes?',
    a: 'Absolutely! Our Premium Care Plus service is specifically designed for valuable and designer footwear with extra care and attention.',
  },
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=1920&q=80)' }}
          />
          <div className="overlay-dark" />
          <div className="container-custom relative z-10 text-center text-white">
            <h1 className="heading-1 mb-4">Our Services</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Professional shoe cleaning services tailored to every type of footwear.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="card-hover rounded-2xl bg-card p-6 shadow-lg">
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{service.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                  <p className="mb-4 text-lg font-semibold text-primary">{service.price}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/booking" className="btn-primary w-full text-center">
                    Book This Service
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="heading-2 mb-8 text-center">Add-On Services</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {addons.map((addon) => (
                <div key={addon.name} className="rounded-xl bg-card p-4 text-center shadow-md">
                  <h4 className="font-semibold text-card-foreground">{addon.name}</h4>
                  <p className="text-primary">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="heading-2 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl bg-card shadow-md">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-4 text-left"
                  >
                    <span className="font-semibold text-card-foreground">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="border-t px-4 pb-4 pt-2 text-muted-foreground">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-primary py-16">
          <div className="container-custom text-center">
            <h2 className="heading-2 mb-4 text-primary-foreground">Ready to Book?</h2>
            <p className="mb-6 text-primary-foreground/90">Get started with our professional shoe cleaning service today.</p>
            <Link to="/booking" className="btn-white inline-flex items-center gap-2">
              Book Now <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
};

export default Services;
