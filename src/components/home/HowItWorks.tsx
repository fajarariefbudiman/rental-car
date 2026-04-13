import { Calendar, Package, Sparkles, Home } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book Online',
    description: 'Schedule your cleaning service through our website or WhatsApp.',
  },
  {
    icon: Package,
    title: 'We Pick Up Your Shoes',
    description: 'Our courier will collect your shoes from your doorstep.',
  },
  {
    icon: Sparkles,
    title: 'Professional Cleaning',
    description: 'Our experts clean and restore your shoes with care.',
  },
  {
    icon: Home,
    title: 'Delivery Back to You',
    description: 'Receive your fresh, clean shoes right at your door.',
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-2 mb-4">How It Works</h2>
          <p className="body-text mx-auto max-w-2xl">
            Getting your shoes professionally cleaned has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-primary/20 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="relative text-center">
                {/* Step Number */}
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                  {index + 1}
                </div>
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>

                {/* Connector Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-10 hidden translate-x-1/2 text-primary lg:block">
                    <svg className="h-6 w-12" viewBox="0 0 48 24" fill="none">
                      <path
                        d="M0 12h40m0 0l-8-8m8 8l-8 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
