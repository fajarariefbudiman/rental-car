import { motion } from "framer-motion";
import img1 from "../assets/products/1.png";
import img2 from "../assets/products/2.png";
import img3 from "../assets/products/3.png";
import img4 from "../assets/products/4.png";
import img5 from "../assets/products/5.png";
import img6 from "../assets/products/6.png";
// Sample ice cream images (replace with your actual images)
const products = [
  {
    name: "Vanilla Dream",
    image: img1,
    badge: "Best Seller",
  },
  {
    name: "Chocolate Bliss",
    image: img2,
    badge: "Signature",
  },
  {
    name: "Strawberry Swirl",
    image: img3,
    badge: null,
  },
  {
    name: "Matcha Magic",
    image: img4,
    badge: "New",
  },
  {
    name: "Caramel Crunch",
    image: img5,
    badge: null,
  },
  {
    name: "Mint Cookie",
    image: img6,
    badge: "Popular",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="relative py-20 md:py-28 bg-gradient-to-b bg-[#C61E1E] overflow-hidden"
    >
      {/* Playful Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl animate-pulse delay-150"></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Fun Header Badge */}
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r bg-white text-[#C61E1E] rounded-full text-sm font-bold mb-6 shadow-lg"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            Menu Favorit
          </motion.span>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-[#C61E1E]"
            style={{
              fontFamily: "'Fredoka One', cursive",
              letterSpacing: "0.02em",
              WebkitTextStroke: "2px white",
            }}
          >
            Produk Kami
          </h2>

          <p
            className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500 }}
          >
            Nikmati kelezatan es krim premium yang dibuat dengan <span className="text-white font-bold">cinta</span> dan bahan{" "}
            <span
              className="text-[#C61E1E] font-bold"
              style={{
                WebkitTextStroke: "0.5px white",
              }}
            >
              berkualitas tinggi
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Badge */}
                {product.badge && (
                  <motion.div
                    initial={{ rotate: -15, scale: 0 }}
                    whileInView={{ rotate: -15, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="absolute -top-3 -right-3 z-20"
                  >
                    <span
                      className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-black rounded-full shadow-lg transform rotate-12"
                      style={{ fontFamily: "'Baloo 2', cursive" }}
                    >
                      {product.badge}
                    </span>
                  </motion.div>
                )}

                {/* Image Container with Playful Border */}
                <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />

                  {/* Decorative Drip Effect */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-pink-300 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Name */}
                <h3
                  className="text-2xl font-black text-gray-800 mb-2 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  {product.name}
                </h3>

                {/* Decorative Sparkles */}
                <div className="flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-yellow-400 text-xs">✨</span>
                  <span className="text-pink-400 text-xs">💫</span>
                  <span className="text-blue-400 text-xs">⭐</span>
                </div>
              </div>

              {/* Floating Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p
            className="text-white mb-6 text-lg"
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}
          >
            Dan masih banyak rasa lainnya yang menanti!
          </p>

          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-[#C61E1E] rounded-full font-black text-lg shadow-xl cursor-pointer"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            50+ Varian Menu Tersedia
          </motion.span>
        </motion.div>
      </div>

      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Baloo+2:wght@700;800&family=Quicksand:wght@500;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default Products;
