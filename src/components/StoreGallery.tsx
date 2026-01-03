import { motion } from "framer-motion";
import { MapPin, Star, Users } from "lucide-react";

const stores = [
  {
    name: "SKrim Grand Indonesia",
    location: "Jakarta Pusat",
    image: "🏪",
    rating: 4.9,
    reviews: 1250,
    status: "Flagship Store",
  },
  {
    name: "SKrim Senayan City",
    location: "Jakarta Selatan",
    image: "🏬",
    rating: 4.8,
    reviews: 980,
    status: "Premium",
  },
  {
    name: "SKrim Pakuwon Mall",
    location: "Surabaya",
    image: "🏢",
    rating: 4.9,
    reviews: 1100,
    status: "Premium",
  },
  {
    name: "SKrim Paris Van Java",
    location: "Bandung",
    image: "🏪",
    rating: 4.7,
    reviews: 850,
    status: "Standard",
  },
  {
    name: "SKrim Living World",
    location: "Tangerang",
    image: "🏬",
    rating: 4.8,
    reviews: 720,
    status: "Standard",
  },
  {
    name: "SKrim Hartono Mall",
    location: "Yogyakarta",
    image: "🏢",
    rating: 4.9,
    reviews: 650,
    status: "New",
  },
];

const stats = [
  { number: "150+", label: "Outlet Aktif", icon: MapPin },
  { number: "4.8", label: "Rating Rata-rata", icon: Star },
  { number: "500K+", label: "Pelanggan/Bulan", icon: Users },
];

const StoreGallery = () => {
  return (
    <section
      id="store"
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Jaringan Kami</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">Tampilan Toko</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Desain modern dan konsisten di seluruh outlet SKrim Indonesia</p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 bg-primary/5 rounded-2xl"
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl md:text-4xl font-bold text-foreground">{stat.number}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stores.map((store, index) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Store Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-8xl">{store.image}</div>

              {/* Status Badge */}
              <span
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  store.status === "Flagship Store" ? "bg-amber-400 text-amber-900" : store.status === "Premium" ? "bg-white text-primary" : store.status === "New" ? "bg-emerald-500 text-white" : "bg-white/80 text-foreground"
                }`}
              >
                {store.status}
              </span>

              {/* Store Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-1">{store.name}</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{store.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-white font-semibold">{store.rating}</span>
                  </div>
                  <span className="text-white/60 text-sm">({store.reviews} reviews)</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-muted-foreground mb-6">Ingin membuka outlet SKrim di kotamu?</p>
          <a
            href="#franchise"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MapPin className="w-5 h-5" />
            Lihat Lokasi Tersedia
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreGallery;
