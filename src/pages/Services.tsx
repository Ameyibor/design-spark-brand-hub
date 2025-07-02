
import { ArrowRight, Camera, Palette, Globe, Monitor, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for all your creative and business needs",
      features: ["Event photography", "Portrait sessions", "Product photography", "Commercial shoots", "Creative photography"],
      ctaText: "See Photography Work"
    },
    {
      icon: Palette,
      title: "Resin Art",
      description: "Custom resin art pieces that bring color and life to any space",
      features: ["Custom resin pieces", "Decorative art", "Functional resin items", "Color mixing techniques", "Unique textures"],
      ctaText: "View Resin Art Gallery"
    },
    {
      icon: Globe,
      title: "Digital Art",
      description: "Digital illustrations and artwork created with modern design techniques",
      features: ["Digital illustrations", "Character design", "Concept art", "Digital paintings", "Graphic compositions"],
      ctaText: "Explore Digital Art"
    },
    {
      icon: Monitor,
      title: "Website Design",
      description: "Custom websites that showcase your brand and convert visitors",
      features: ["Custom web design", "Responsive layouts", "User experience", "Creative portfolios", "Business websites"],
      ctaText: "See Website Examples"
    },
    {
      icon: Gem,
      title: "Jewelry Design",
      description: "Unique jewelry pieces crafted with attention to detail and style",
      features: ["Custom jewelry", "Handcrafted pieces", "Design consultation", "Unique materials", "Personal accessories"],
      ctaText: "Browse Jewelry Collection"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">hexatech</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-red-400 transition-colors">Home</a>
            <a href="/services" className="text-red-400">Services</a>
            <a href="/portfolio" className="hover:text-red-400 transition-colors">Portfolio</a>
            <a href="/about" className="hover:text-red-400 transition-colors">About</a>
            <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">LinkedIn</a>
            <a href="/pricing" className="hover:text-red-400 transition-colors">Pricing</a>
            <a href="/contact" className="hover:text-red-400 transition-colors">Contact</a>
          </div>
          <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
            <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer">Book Appointment</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Creative Services Built to <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Inspire & Amaze</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            From photography to digital art, resin creations to jewelry design, our services bring your artistic vision to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-600 hover:bg-gray-800 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-400 flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
                        {service.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your creative project and find the perfect artistic solution for your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
              <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer">Book a Creative Consultation</a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <a href="/contact">Request a Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
