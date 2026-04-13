import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Rp 75,000',
    per: 'per pair',
    description: 'Quick refresh for lightly worn shoes',
    features: [
      'Exterior cleaning',
      'Basic stain removal',
      'Air dry',
      '2-3 days turnaround',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    price: 'Rp 150,000',
    per: 'per pair',
    description: 'Deep clean for regular maintenance',
    features: [
      'Full deep cleaning',
      'Interior & exterior',
      'Stain treatment',
      'Deodorizing',
      '3-5 days turnaround',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 'Rp 250,000',
    per: 'per pair',
    description: 'Complete restoration & protection',
    features: [
      'Everything in Standard',
      'Color restoration',
      'Protective coating',
      'Premium packaging',
      'Priority service',
      '5-7 days turnaround',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-2 mb-4">Simple, Transparent Pricing</h2>
          <p className="body-text mx-auto max-w-2xl">
            Choose the service level that fits your needs. All prices include pick-up and delivery.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-card p-8 shadow-lg ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}

              <div className="mb-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-card-foreground">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground"> {plan.per}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/booking"
                className={`block w-full rounded-lg py-3 text-center font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary-dark'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
