
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      {/* Background Gradient Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500 to-purple-600 rounded-full opacity-20 blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500 to-red-500 rounded-full opacity-15 blur-3xl transform -translate-x-32 translate-y-32"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <p className="text-sm text-gray-400 tracking-wider uppercase">
            custom graphic design • creative branding agency • startup design services
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Design That Turns
            <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Heads, and Converts
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We help startups, brands, and creators bring their vision to life with bold, strategic graphic design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0 text-lg px-8 py-4">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-4">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
