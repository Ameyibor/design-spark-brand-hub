import { useState } from 'react';
import { ArrowRight, Palette, Package, Globe, Presentation, Star, Download, ChevronLeft, ChevronRight, Camera, Gem, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ThreeAnimation from '@/components/ThreeAnimation';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography for events, portraits, and products"
    },
    {
      icon: Palette,
      title: "Resin Art", 
      description: "Custom resin art pieces and decorative designs"
    },
    {
      icon: Globe,
      title: "Digital Art",
      description: "Digital illustrations and creative artwork"
    },
    {
      icon: Monitor,
      title: "Website Design",
      description: "Custom website design and development"
    },
    {
      icon: Gem,
      title: "Jewelry Design",
      description: "Unique jewelry pieces and custom designs"
    }
  ];

  const portfolioProjects = [
    {
      title: "Tech Startup Rebrand",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
      title: "Artisan Coffee Packaging",
      category: "Packaging Design", 
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
    },
    {
      title: "Fashion Brand Campaign",
      category: "Digital Design",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      title: "Investment Pitch Deck",
      category: "Presentation Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      title: "Restaurant Identity",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
    },
    {
      title: "Product Launch Kit",
      category: "Digital Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      quote: "Their design work completely transformed our brand. Sales increased 40% after the rebrand launch.",
      name: "Sarah Chen",
      position: "CEO, TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face"
    },
    {
      quote: "Professional, creative, and delivered exactly what we envisioned. Highly recommend!",
      name: "Marcus Rodriguez", 
      position: "Founder, Urban Eats",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      quote: "Fast turnaround without compromising quality. They truly understand business needs.",
      name: "Emily Foster",
      position: "Marketing Director, GreenTech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
              <img 
                src="/lovable-uploads/69ea8358-5e8f-443e-9dc3-851b5a40b654.png" 
                alt="Hexatech Logo" 
                className="relative h-12 w-12 object-contain drop-shadow-2xl"
              />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">hexatech</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/services" className="hover:text-red-400 transition-colors">Services</a>
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
      <section className="relative px-6 py-20 overflow-hidden min-h-screen">
        {/* Realistic Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop" 
            alt="Professional Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>
        </div>
        
        {/* 3D Animation Overlay */}
        <div className="absolute inset-0 z-10 opacity-30">
          <ThreeAnimation />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto z-20 flex items-center min-h-[80vh]">
          <div className="text-center space-y-8 w-full">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl opacity-40 animate-pulse scale-150"></div>
                <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl"></div>
                <img 
                  src="/lovable-uploads/69ea8358-5e8f-443e-9dc3-851b5a40b654.png" 
                  alt="Hexatech Logo" 
                  className="relative h-24 w-24 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <p className="text-sm text-gray-300 tracking-wider uppercase">
              creative design • photography • digital art • jewelry • websites
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Creative Design That
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Brings Ideas to Life
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We specialize in photography, digital art, resin art, jewelry design, and website creation to help bring your creative vision to reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0 text-lg px-8 py-4 shadow-2xl">
                <a href="/contact">Start Your Project</a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm">
                <a href="/portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 py-20 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-300 text-lg">Creative solutions across multiple artistic disciplines</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <a href="/services">Explore Services</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-300 text-lg">A showcase of our best design projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-800 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-red-400 text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
              <a href="/portfolio">View Full Portfolio</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="relative">
            <Card className="bg-gray-700/50 border-gray-600">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-200 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardContent className="p-12">
              <Download className="h-16 w-16 text-red-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Get Our Free Branding Checklist</h2>
              <p className="text-gray-300 text-lg mb-8">
                Start strong with our pro-approved design essentials. Perfect for startups and growing businesses.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0 text-lg px-8 py-4">
                Download Now
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-md opacity-40"></div>
                  <img 
                    src="/lovable-uploads/69ea8358-5e8f-443e-9dc3-851b5a40b654.png" 
                    alt="Hexatech Logo" 
                    className="relative h-8 w-8 object-contain"
                  />
                </div>
                <div className="text-2xl font-bold">hexatech</div>
              </div>
              <p className="text-gray-400">
                Creative design solutions across photography, digital art, resin art, jewelry, and websites.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services" className="hover:text-red-400 transition-colors">Photography</a></li>
                <li><a href="/services" className="hover:text-red-400 transition-colors">Resin Art</a></li>
                <li><a href="/services" className="hover:text-red-400 transition-colors">Digital Art</a></li>
                <li><a href="/services" className="hover:text-red-400 transition-colors">Website Design</a></li>
                <li><a href="/services" className="hover:text-red-400 transition-colors">Jewelry Design</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/portfolio" className="hover:text-red-400 transition-colors">Portfolio</a></li>
                <li><a href="/about" className="hover:text-red-400 transition-colors">About</a></li>
                <li><a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">LinkedIn</a></li>
                <li><a href="/contact" className="hover:text-red-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-gray-400">© 2024 hexatech. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Dribbble</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
