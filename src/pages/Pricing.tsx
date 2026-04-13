import { Link } from 'react-router-dom';
import { Check, Calculator } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import BackToTop from '../components/shared/BackToTop';

const shoeTypes = [
  { name: 'Sneakers', basic: 75000, standard: 150000, premium: 250000 },
  { name: 'Leather Shoes', basic: 100000, standard: 175000, premium: 300000 },
  { name: 'Boots', basic: 125000, standard: 200000, premium: 350000 },
  { name: 'Canvas Shoes', basic: 65000, standard: 125000, premium: 200000 },
  { name: 'Suede/Nubuck', basic: 100000, standard: 185000, premium: 275000 },
  { name: 'Sports Shoes', basic: 80000, standard: 160000, premium: 260000 },
];

const packageDeals = [
  { name: '3 Pairs Bundle', discount: '10% Off', description: 'Clean 3 pairs and save' },
  { name: '5 Pairs Bundle', discount: '15% Off', description: 'Clean 5 pairs and save more' },
  { name: 'Monthly Plan', discount: '20% Off', description: '4 cleans per month' },
];

const formatPrice = (price: number) => `Rp ${price.toLocaleString('id-ID')}`;

const Pricing = () => {
  const [selectedShoe, setSelectedShoe] = useState('Sneakers');
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [pairs, setPairs] = useState(1);

  const shoe = shoeTypes.find((s) => s.name === selectedShoe) || shoeTypes[0];
  const basePrice = shoe[selectedPlan as keyof typeof shoe] as number;
  const totalPrice = basePrice * pairs;

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1920&q=80)' }}
          />
          <div className="overlay-dark" />
          <div className="container-custom relative z-10 text-center text-white">
            <h1 className="heading-1 mb-4">Pricing</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Transparent pricing for all shoe types and service levels.
            </p>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="heading-2 mb-8 text-center">Pricing by Shoe Type</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] rounded-xl bg-card shadow-lg">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-semibold text-card-foreground">Shoe Type</th>
                    <th className="p-4 text-center font-semibold text-card-foreground">Basic</th>
                    <th className="p-4 text-center font-semibold text-primary">Standard</th>
                    <th className="p-4 text-center font-semibold text-card-foreground">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {shoeTypes.map((type) => (
                    <tr key={type.name} className="border-b last:border-0 hover:bg-secondary/50">
                      <td className="p-4 font-medium text-card-foreground">{type.name}</td>
                      <td className="p-4 text-center text-muted-foreground">{formatPrice(type.basic)}</td>
                      <td className="p-4 text-center font-semibold text-primary">{formatPrice(type.standard)}</td>
                      <td className="p-4 text-center text-muted-foreground">{formatPrice(type.premium)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl rounded-2xl bg-card p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <Calculator className="h-8 w-8 text-primary" />
                <h2 className="heading-3">Calculate Your Order</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-card-foreground">Shoe Type</label>
                  <select
                    value={selectedShoe}
                    onChange={(e) => setSelectedShoe(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {shoeTypes.map((type) => (
                      <option key={type.name} value={type.name}>{type.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-card-foreground">Service Level</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['basic', 'standard', 'premium'].map((plan) => (
                      <button
                        key={plan}
                        onClick={() => setSelectedPlan(plan)}
                        className={`rounded-lg border-2 p-3 text-center font-medium capitalize transition-colors ${selectedPlan === plan
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                          }`}
                      >
                        {plan}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-card-foreground">Number of Pairs</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={pairs}
                    onChange={(e) => setPairs(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="rounded-lg bg-primary-light p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-foreground">Estimated Total:</span>
                    <span className="text-2xl font-bold text-primary">{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <Link to="/booking" className="btn-primary w-full text-center">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Package Deals */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="heading-2 mb-8 text-center">Package Deals</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {packageDeals.map((deal) => (
                <div key={deal.name} className="card-hover rounded-2xl bg-card p-6 text-center shadow-lg">
                  <span className="mb-2 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    {deal.discount}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{deal.name}</h3>
                  <p className="text-muted-foreground">{deal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-primary py-16">
          <div className="container-custom text-center">
            <h2 className="heading-2 mb-4 text-primary-foreground">Questions About Pricing?</h2>
            <p className="mb-6 text-primary-foreground/90">Contact us for custom quotes or bulk orders.</p>
            <Link to="/contact" className="btn-white">
              Contact Us
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

export default Pricing;
