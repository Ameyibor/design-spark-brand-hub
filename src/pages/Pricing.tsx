
import { ArrowRight, Check, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "$500+",
      description: "Perfect for new businesses and startups",
      features: [
        "Custom logo design",
        "Brand color palette", 
        "Basic typography selection",
        "1 round of revisions",
        "Logo files in multiple formats",
        "Basic brand guidelines (PDF)"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Growth",
      price: "$1,200+",
      description: "Ideal for growing businesses ready to scale",
      features: [
        "Everything in Starter",
        "Complete brand identity kit",
        "Business card design",
        "3 social media templates",
        "Letterhead design",
        "2 rounds of revisions",
        "Comprehensive brand guidelines",
        "30-day support included"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Pro",
      price: "$2,000+",
      description: "For established businesses needing full brand systems",
      features: [
        "Everything in Growth",
        "Full brand identity system",
        "Packaging design concepts",
        "Social media kit (10+ templates)",
        "Email signature design",
        "Brand presentation template",
        "4 rounds of revisions",
        "60-day priority support",
        "Brand strategy consultation"
      ],
      cta: "Go Pro",
      popular: false
    }
  ];

  const addOns = [
    { service: "Business Cards", price: "$150" },
    { service: "Pitch Deck Design", price: "$800" },
    { service: "Website Design", price: "$2,500" },
    { service: "Packaging Design", price: "$600" },
    { service: "Social Media Kit", price: "$400" },
    { service: "Brand Photography Direction", price: "$300" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">Hexatech</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-red-400 transition-colors">Home</a>
            <a href="/services" className="hover:text-red-400 transition-colors">Services</a>
            <a href="/portfolio" className="hover:text-red-400 transition-colors">Portfolio</a>
            <a href="/about" className="hover:text-red-400 transition-colors">About</a>
            <a href="/blog" className="hover:text-red-400 transition-colors">Blog</a>
            <a href="/pricing" className="text-red-400">Pricing</a>
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
            Transparent Pricing That <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Fits Your Goals</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Choose the design support that suits your stage of growth.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative border-2 transition-all duration-300 hover:scale-105 ${
                pkg.popular 
                  ? 'border-red-500 bg-gradient-to-b from-red-500/10 to-orange-500/10' 
                  : 'border-gray-600 bg-gray-800/50 hover:border-red-400'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-gray-400">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0'
                      : 'border-gray-600 text-white hover:bg-gray-800'
                  }`} 
                  variant={pkg.popular ? "default" : "outline"}>
                    {pkg.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Add-On Services</h2>
            <p className="text-gray-300">Enhance your package with additional design services</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                <span className="font-medium">{addon.service}</span>
                <span className="text-red-400 font-semibold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Every business is unique. Let's discuss a custom package that fits your specific needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  <Download className="mr-2 h-5 w-5" />
                  Download Pricing Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-700/50 rounded-lg">
              <h3 className="font-semibold mb-2">What's included in the revision rounds?</h3>
              <p className="text-gray-300">Each revision round includes feedback implementation across all deliverables. We work with you to refine the designs until you're completely satisfied.</p>
            </div>
            <div className="p-6 bg-gray-700/50 rounded-lg">
              <h3 className="font-semibold mb-2">How long does each package take?</h3>
              <p className="text-gray-300">Starter: 1-2 weeks, Growth: 2-3 weeks, Pro: 3-4 weeks. Timeline may vary based on project complexity and feedback cycles.</p>
            </div>
            <div className="p-6 bg-gray-700/50 rounded-lg">
              <h3 className="font-semibold mb-2">Do you offer payment plans?</h3>
              <p className="text-gray-300">Yes! We offer flexible payment options including 50% upfront and 50% on completion for all packages over $1,000.</p>
            </div>
            <div className="p-6 bg-gray-700/50 rounded-lg">
              <h3 className="font-semibold mb-2">What if I need changes after the project is complete?</h3>
              <p className="text-gray-300">Minor tweaks are included within 30 days of completion. Larger changes can be handled through our support retainer or as separate projects.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
