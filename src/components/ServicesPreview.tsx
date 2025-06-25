
import { ArrowRight, Palette, Package, Globe, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ServicesPreview = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Logos, brand guides, and visual identity systems"
    },
    {
      icon: Package,
      title: "Packaging Design", 
      description: "Product packaging that stands out on shelves"
    },
    {
      icon: Globe,
      title: "Digital Design",
      description: "Social media graphics and web visuals"
    },
    {
      icon: Presentation,
      title: "Presentation Design",
      description: "Corporate and pitch deck presentations"
    }
  ];

  return (
    <section className="px-6 py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-300 text-lg">Comprehensive design solutions for your brand</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
            Explore Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
