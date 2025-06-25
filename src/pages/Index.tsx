
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <PortfolioSection />
      <TestimonialsSection />
      <LeadMagnetSection />
      <Footer />
    </div>
  );
};

export default Index;
