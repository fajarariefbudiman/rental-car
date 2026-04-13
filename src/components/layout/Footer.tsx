import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">P</span>
              </div>
              <span className="text-xl font-bold">Pede Clean Shoes</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Professional shoe cleaning and care services. We restore your favorite footwear to perfect condition with expert techniques and premium products.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Deep Clean Pro', 'Quick Fresh', 'Premium Care Plus', 'Sneaker Restore', 'Leather Revival', 'Suede Specialist'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="transition-colors hover:text-primary">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'How It Works', path: '/how-it-works' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Terms & Conditions', path: '/terms' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="mb-6 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +62 812 3456 7890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                hello@pedecleanshoes.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Jl. Sudirman No. 123, Jakarta Selatan, Indonesia
              </li>
            </ul>

            <h5 className="mb-3 text-sm font-semibold">Newsletter</h5>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg bg-gray-800 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="rounded-lg bg-primary p-2 transition-colors hover:bg-primary-dark">
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-400 md:flex-row">
          <p>© 2024 Pede Clean Shoes. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
