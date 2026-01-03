import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Music } from "lucide-react";
import { Button } from "../components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="2"
                fill="currentColor"
                className="text-primary-foreground"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#dots)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Logo/Mascot */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-24 h-24 md:w-28 md:h-28 bg-primary-foreground rounded-full flex items-center justify-center mb-6 shadow-lg"
            >
              <span className="text-4xl md:text-5xl font-heading font-bold text-primary">M</span>
            </motion.div>

            <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground mb-2">PT. Junyi Jaya Indonesia</h3>

            <div className="flex items-start gap-3 text-primary-foreground/90 mb-6">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p className="text-base leading-relaxed">
                Jl. Contoh Alamat No. 123,
                <br />
                Jakarta Selatan, Indonesia 12345
              </p>
            </div>

            {/* Hotline Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-4 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-primary-foreground/20"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-foreground rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-primary-foreground/80 uppercase tracking-wider">Hotline Kemitraan</p>
                <p className="text-2xl md:text-3xl font-heading font-extrabold text-primary-foreground">0813-9888-8568</p>
              </div>
            </motion.div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Phone, label: "WhatsApp", href: "https://wa.me/6281398888568", bg: "bg-success" },
                { icon: Instagram, label: "Instagram", href: "#", bg: "bg-gradient-instagram" },
                { icon: Music, label: "TikTok", href: "#", bg: "bg-foreground" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 md:w-14 md:h-14 ${social.bg} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-right"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-display-xl font-heading font-extrabold text-primary-foreground mb-4"
            >
              JOIN
              <br />
              MOMOYO!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground/90 mb-8"
            >
              NEW STORE, NEW OPPORTUNITY
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="hero"
                size="xl"
                className="text-lg md:text-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami Sekarang
              </Button>
            </motion.div>

            {/* QR Codes Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center lg:justify-end gap-4 mt-8"
            >
              {["WhatsApp", "Instagram", "TikTok"].map((platform) => (
                <div
                  key={platform}
                  className="text-center"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-foreground rounded-xl p-2 shadow-lg">
                    <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">QR</span>
                    </div>
                  </div>
                  <p className="text-xs text-primary-foreground/70 mt-2">{platform}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
