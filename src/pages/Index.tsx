import Header from "../components/Header";
import Hero from "../components/Hero";
import BrandStory from "../components/BrandStory";
import Products from "../components/Products";
import StoreGallery from "../components/StoreGallery";
import FranchiseProcess from "../components/FranchiseProcess";
import CTABanner from "../components/CTABanner";
import FloatingSocial from "../components/FloatingSocial";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BrandStory />
      <Products />
      <StoreGallery />
      <FranchiseProcess />
      <CTABanner />
      {/* <Footer /> */}
      <FloatingSocial />
    </main>
  );
};

export default Index;
