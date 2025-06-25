
import { ArrowRight, Palette, FileText, Globe, Presentation, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete brand systems that tell your story and connect with your audience",
      features: ["Logo creation", "Brand guides", "Typography selection", "Color palettes", "Brand voice & tone"],
      ctaText: "See Examples"
    },
    {
      icon: FileText,
      title: "Print Design",
      description: "Physical marketing materials that make a lasting impression",
      features: ["Flyers & brochures", "Business cards", "Posters & banners", "Packaging design", "Print advertising"],
      ctaText: "Explore Our Print Work"
    },
    {
      icon: Globe,
      title: "Digital Design",
      description: "Digital assets optimized for online engagement and conversion",
      features: ["Social media templates", "Email graphics", "Banner ads", "Web graphics", "Digital campaigns"],
      ctaText: "Get Digital Designs"
    },
    {
      icon: Presentation,
      title: "Presentation Design",
      description: "Professional presentations that captivate and convince",
      features: ["Corporate presentations", "Pitch decks", "Sales presentations", "Training materials", "Template creation"],
      ctaText: "See Before/After Slides"
    },
    {
      icon: Headphones,
      title: "Custom Projects & Retainers",
      description: "Ongoing design support tailored to your growing business needs",
      features: ["Monthly design hours", "Priority support", "Brand consistency", "Quick turnarounds", "Dedicated designer"],
      ctaText: "Learn More"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">DesignCo</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-red-400 transition-colors">Home</a>
            <a href="/services" className="text-red-400">Services</a>
            <a href="/portfolio" className="hover:text-red-400 transition-colors">Portfolio</a>
            <a href="/about" className="hover:text-red-400 transition-colors">About</a>
            <a href="/blog" className="hover:text-red-400 transition-colors">Blog</a>
            <a href="/pricing" className="hover:text-red-400 transition-colors">Pricing</a>
            <a href="/contact" className="hover:text-red-400 transition-colors">Contact</a>
          </div>
          <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
            Start Project
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Design Services Built to <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Elevate Your Brand</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            From logo design to full-scale brand systems, our services are tailored to help you stand out.
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
            Let's discuss your project and find the perfect design solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
              Book a Free Design Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
