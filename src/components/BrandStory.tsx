import { motion } from "framer-motion";
import { TrendingUp, Users, Eye, MessageCircle } from "lucide-react";
import imgSignature from "../assets/1.png";
import imgInterior from "../assets/2.png";
import imgOpening from "../assets/3.png";

const metrics = [
  { icon: TrendingUp, value: "500M+", label: "Video Views" },
  { icon: Users, value: "10M+", label: "Followers" },
  { icon: Eye, value: "1B+", label: "Impressions" },
  { icon: MessageCircle, value: "50M+", label: "Engagements" },
];

const gridImages = [
  { id: 1, image: imgSignature, label: "Signature Drinks" },
  { id: 2, image: imgInterior, label: "Store Interior" },
  { id: 3, image: imgOpening, label: "Grand Opening" },
];

const carouselImages = [
  { id: 1, placeholder: "🧋", label: "Brown Sugar Boba" },
  { id: 2, placeholder: "🥤", label: "Fresh Milk Tea" },
  { id: 3, placeholder: "🍓", label: "Strawberry Cheese" },
  { id: 4, placeholder: "🍵", label: "Matcha Latte" },
  { id: 5, placeholder: "🍠", label: "Taro Delight" },
  { id: 6, placeholder: "🍪", label: "Oreo Smoothie" },
];

const BrandStory = () => {
  return (
    <section
      id="brand"
      className="bg-background"
    >
      {/* Main Content */}
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Red Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-hero rounded-3xl p-8 md:p-12 lg:p-16 text-primary-foreground relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
              </div>

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-display-md font-heading font-bold mb-6"
                >
                  Merek F&B Paling Banyak Dibicarakan di Media Sosial
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-full font-bold text-sm md:text-base mb-6"
                >
                  #1 dalam Volume Konten di TikTok
                </motion.div>

                <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">Dari influencer hingga UGC, setiap postingan membawa trafik besar ke outlet SKrim. Bergabung sekarang dan rasakan viralitas brand kami!</p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 text-center border border-primary-foreground/20"
                    >
                      <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary-foreground/80" />
                      <div className="text-2xl md:text-3xl font-heading font-extrabold">{metric.value}</div>
                      <div className="text-sm text-primary-foreground/70 mt-1">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Platform Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Phone Mockups */}
              <div className="relative flex justify-center items-center min-h-[400px] md:min-h-[500px]">
                {/* Phone 1 - Left */}
                <motion.div
                  initial={{ rotate: -10, x: -20 }}
                  whileInView={{ rotate: -5, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  className="absolute left-0 md:left-8 top-8 w-40 md:w-48 bg-background rounded-3xl p-2 border border-border"
                >
                  <div className="bg-gradient-to-b from-green-400 to-green-600 rounded-2xl p-4 h-72 md:h-80">
                    <div className="text-primary-foreground text-xs font-bold mb-2">Grab Food</div>
                    <div className="bg-primary-foreground/20 rounded-xl p-3 mb-2">
                      <div className="w-full h-16 bg-primary-foreground/30 rounded-lg mb-2" />
                      <div className="text-primary-foreground text-xs">SKrim Cheese Tea</div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-300">★</span>
                        <span className="text-primary-foreground text-xs">4.9</span>
                      </div>
                    </div>
                    <div className="bg-primary-foreground/20 rounded-xl p-3">
                      <div className="w-full h-16 bg-primary-foreground/30 rounded-lg mb-2" />
                      <div className="text-primary-foreground text-xs">Brown Sugar Boba</div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone 2 - Center */}
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-48 md:w-56 bg-background rounded-3xl p-2 border border-border"
                >
                  <div className="bg-gradient-to-b from-primary to-primary-dark rounded-2xl p-4 h-80 md:h-96">
                    <div className="text-primary-foreground text-xs font-bold mb-2">TikTok Shop</div>
                    <div className="bg-primary-foreground/20 rounded-xl p-3 mb-3">
                      <div className="w-full h-24 bg-primary-foreground/30 rounded-lg mb-2" />
                      <div className="text-primary-foreground text-sm font-semibold">MOMOYO Gift Set</div>
                      <div className="text-primary-foreground/80 text-xs mt-1">Rp 99.000</div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-primary-foreground text-primary text-xs px-2 py-1 rounded-full font-bold">50% OFF</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-primary-foreground/20 rounded-xl p-2">
                        <div className="w-full h-12 bg-primary-foreground/30 rounded-lg" />
                      </div>
                      <div className="flex-1 bg-primary-foreground/20 rounded-xl p-2">
                        <div className="w-full h-12 bg-primary-foreground/30 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone 3 - Right */}
                <motion.div
                  initial={{ rotate: 10, x: 20 }}
                  whileInView={{ rotate: 5, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  className="absolute right-0 md:right-8 top-8 w-40 md:w-48 bg-background rounded-3xl p-2 border border-border"
                >
                  <div className="bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl p-4 h-72 md:h-80">
                    <div className="text-primary-foreground text-xs font-bold mb-2">Shopee Food</div>
                    <div className="bg-primary-foreground/20 rounded-xl p-3 mb-2">
                      <div className="w-full h-16 bg-primary-foreground/30 rounded-lg mb-2" />
                      <div className="text-primary-foreground text-xs">Taro Fresh Milk</div>
                      <div className="text-primary-foreground/80 text-xs">15rb+ Terjual</div>
                    </div>
                    <div className="bg-primary-foreground text-center py-2 rounded-full">
                      <span className="text-orange-500 text-xs font-bold">Best Seller 🔥</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Platform Logos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex justify-center items-center gap-8 mt-8"
              >
                {["Grab", "Gojek", "Shopee"].map((platform) => (
                  <div
                    key={platform}
                    className="bg-muted px-6 py-3 rounded-xl text-muted-foreground font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {platform}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3 Grid Images - No spacing, full width */}
      <div className="w-full grid grid-cols-3">
        {gridImages.map((img) => (
          <div
            key={img.id}
            className="aspect-square bg-muted flex items-center justify-center text-6xl md:text-8xl relative group overflow-hidden"
          >
            <img
              src={img.image}
              alt={img.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-background font-bold text-sm md:text-lg">{img.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel - Full width, no margin, no shadow */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-[scroll_20s_linear_infinite]">
          {[...carouselImages, ...carouselImages].map((img, index) => (
            <div
              key={`${img.id}-${index}`}
              className="flex-shrink-0 w-48 md:w-64 aspect-square bg-primary/10 flex items-center justify-center text-5xl md:text-7xl"
            >
              {img.placeholder}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
