import { motion } from "framer-motion";
import { MapPin, CreditCard, FileText, Settings, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Apply Location",
    description: "Mengajukan permohonan dan mengirimkan lokasi toko untuk persetujuan tim kami.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Payment",
    description: "Lakukan pembayaran franchise fee sesuai paket yang dipilih dengan mudah.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Contract",
    description: "Penandatanganan kontrak kerjasama dan dokumen legal franchise resmi.",
  },
  {
    number: "04",
    icon: Settings,
    title: "Renovation",
    description: "Tim kami akan membantu renovasi dan setup toko hingga siap beroperasi.",
  },
];

const FranchiseProcess = () => {
  return (
    <section
      id="franchise"
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">Proses Mudah & Cepat</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-lg font-heading font-bold text-foreground mb-4">Proses Onboarding Franchisee</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">4 Langkah Mudah Menjadi Mitra SKrim dan mulai bisnis Anda dalam waktu singkat</p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-20 left-[12%] right-[12%] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative text-center group"
              >
                {/* Step Number Badge */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-lg font-heading font-bold text-primary">{step.number}</span>
                </motion.div>

                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="relative z-10 w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center shadow-elevated group-hover:shadow-glow transition-all duration-300"
                >
                  <step.icon
                    className="w-14 h-14 md:w-16 md:h-16 text-primary-foreground"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl md:text-heading-lg font-heading font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[280px] mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            variant="default"
            size="xl"
            className="group gap-2"
          >
            JOIN KEMITRAAN
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseProcess;
