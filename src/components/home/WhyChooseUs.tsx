import { Wrench, Leaf, Truck, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Wrench,
    title: 'Professional Equipment',
    description: 'We use industry-leading tools and machines for the best results.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: 'Safe for your shoes and the environment with premium cleaning solutions.',
  },
  {
    icon: Truck,
    title: 'Pick-up & Delivery',
    description: 'Convenient door-to-door service across Jakarta and surrounding areas.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guarantee',
    description: 'Not satisfied? We\'ll re-clean your shoes at no extra charge.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-2 mb-4">Why Choose Pede Clean Shoes</h2>
          <p className="body-text mx-auto max-w-2xl">
            We're committed to giving your shoes the care they deserve with our expert team and proven techniques.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="card-hover rounded-2xl bg-card p-8 text-center shadow-md"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
