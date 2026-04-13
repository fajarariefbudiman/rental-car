import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import BackToTop from '../components/shared/BackToTop';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shoeType: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', phone: '', shoeType: '', service: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920)' }}
          />
          <div className="overlay-dark" />
          <div className="container-custom relative z-10 text-center text-white">
            <h1 className="heading-1 mb-4">Contact Us</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Have questions? We're here to help. Reach out anytime!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Form */}
              <div>
                <h2 className="heading-3 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+62 8xx xxxx xxxx"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Shoe Type</label>
                      <select
                        value={formData.shoeType}
                        onChange={(e) => setFormData({ ...formData, shoeType: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select shoe type</option>
                        <option value="sneakers">Sneakers</option>
                        <option value="leather">Leather Shoes</option>
                        <option value="boots">Boots</option>
                        <option value="canvas">Canvas</option>
                        <option value="suede">Suede/Nubuck</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select service</option>
                      <option value="quick-fresh">Quick Fresh</option>
                      <option value="deep-clean">Deep Clean Pro</option>
                      <option value="premium-care">Premium Care Plus</option>
                      <option value="not-sure">Not Sure - Need Advice</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your shoes..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="heading-3 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 rounded-xl bg-card p-4 shadow-md">
                    <Phone className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Phone</h4>
                      <p className="text-muted-foreground">+62 812 3456 7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl bg-card p-4 shadow-md">
                    <MessageCircle className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">WhatsApp</h4>
                      <a href="https://wa.me/6281234567890" className="text-primary hover:underline">
                        +62 812 3456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl bg-card p-4 shadow-md">
                    <Mail className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Email</h4>
                      <a href="mailto:hello@pedecleanshoes.com" className="text-primary hover:underline">
                        hello@pedecleanshoes.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl bg-card p-4 shadow-md">
                    <MapPin className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Workshop</h4>
                      <p className="text-muted-foreground">
                        Jl. Sudirman No. 123, Senayan<br />
                        Jakarta Selatan 12190, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl bg-card p-4 shadow-md">
                    <Clock className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 09:00 - 18:00<br />
                        Saturday: 09:00 - 15:00<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/6281234567890?text=Hi,%20I%20want%20to%20book%20a%20shoe%20cleaning%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-4 font-semibold text-white transition-colors hover:bg-[#20ba5a]"
                >
                  <MessageCircle className="h-6 w-6" />
                  Book Directly via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-96 bg-secondary">
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="mx-auto mb-4 h-12 w-12 text-primary" />
              <p>Map showing service area coverage</p>
              <p className="text-sm">Jakarta, Tangerang, Bekasi, Depok, Bogor</p>
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

export default Contact;
