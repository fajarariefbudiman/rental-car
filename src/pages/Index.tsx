import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import ServicesCarousel from '../components/home/ServicesCarousel';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import VideoSection from '../components/home/VideoSection';
import BeforeAfterGallery from '../components/home/BeforeAfterGallery';
import PricingSection from '../components/home/PricingSection';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import BrandsCarousel from '../components/home/BrandsCarousel';
import BlogCarousel from '../components/home/BlogCarousel';
import CTASection from '../components/home/CTASection';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import BackToTop from '../components/shared/BackToTop';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BeforeAfterGallery />
        <PricingSection />
        {/* <ServicesCarousel /> */}
        <WhyChooseUs />
        <HowItWorks />
        <VideoSection />
        <TestimonialsCarousel />
        <BrandsCarousel />
        <BlogCarousel />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
};

export default Index;
