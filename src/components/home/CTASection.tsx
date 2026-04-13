import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="gradient-primary py-20">
      <div className="container-custom text-center">
        <h2 className="heading-2 mb-4 text-primary-foreground">
          Ready to Give Your Shoes New Life?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
          Book your shoe cleaning service today and enjoy free pick-up and delivery across Jakarta, Tangerang, Bekasi, Depok, and Bogor.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/booking" className="btn-white text-lg">
            Book Now
          </Link>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/80">
          <Phone className="h-5 w-5" />
          <span>Or call us at +62 812 3456 7890</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
