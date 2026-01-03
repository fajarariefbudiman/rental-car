import { motion } from "framer-motion";
import { Phone, Instagram, Music } from "lucide-react";

const socialLinks = [
  {
    icon: Phone,
    label: "WhatsApp",
    href: "https://wa.me/6281398888568",
    className: "bg-success hover:shadow-[0_0_20px_hsl(var(--success)/0.5)]",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/digiatid",
    className: "bg-gradient-instagram hover:shadow-[0_0_20px_rgba(228,64,95,0.5)]",
  },
  {
    icon: Music,
    label: "TikTok",
    href: "https://tiktok.com/@digiatid",
    className: "bg-foreground hover:shadow-[0_0_20px_hsl(var(--foreground)/0.3)]",
  },
];

const FloatingSocial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-40 flex flex-col gap-3"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative w-14 h-14 md:w-16 md:h-16 ${social.className} rounded-full flex items-center justify-center shadow-2xl transition-all duration-300`}
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-primary-foreground text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">{social.label}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingSocial;
