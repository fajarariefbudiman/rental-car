import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('EN');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">P</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Pede Clean Shoes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : isScrolled
                    ? 'text-foreground'
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'EN' ? 'ID' : 'EN')}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              <Globe className="h-4 w-4" />
              {language}
              <ChevronDown className="h-3 w-3" />
            </button>

            {/* Book Now Button */}
            <Link to="/booking" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-20 border-t bg-white shadow-lg lg:hidden">
            <div className="container-custom py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex items-center gap-4 border-t pt-4">
                <button
                  onClick={() => setLanguage(language === 'EN' ? 'ID' : 'EN')}
                  className="flex items-center gap-1 text-sm font-medium text-foreground"
                >
                  <Globe className="h-4 w-4" />
                  {language}
                </button>
                <Link to="/booking" className="btn-primary flex-1 text-center">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
