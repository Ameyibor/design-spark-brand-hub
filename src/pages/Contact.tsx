
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">DesignCo</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-red-400 transition-colors">Home</a>
            <a href="/services" className="hover:text-red-400 transition-colors">Services</a>
            <a href="/portfolio" className="hover:text-red-400 transition-colors">Portfolio</a>
            <a href="/about" className="hover:text-red-400 transition-colors">About</a>
            <a href="/blog" className="hover:text-red-400 transition-colors">Blog</a>
            <a href="/pricing" className="hover:text-red-400 transition-colors">Pricing</a>
            <a href="/contact" className="text-red-400">Contact</a>
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
            Let's Create Something <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Brilliant</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to transform your brand? We'd love to hear about your project and discuss how we can help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-gray-800/50 border-gray-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input 
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input 
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-400 transition-colors">
                        <option value="">Select project type</option>
                        <option value="logo">Logo Design</option>
                        <option value="branding">Full Branding</option>
                        <option value="packaging">Packaging Design</option>
                        <option value="digital">Digital Design</option>
                        <option value="presentation">Presentation Design</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-400 transition-colors">
                        <option value="">Select budget range</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors resize-none"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0 py-3">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Calendar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-gray-800/50 border-gray-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-300">hello@designco.com</p>
                      <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-400">Quick questions and updates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9AM - 6PM EST</p>
                      <p className="text-sm text-gray-400">Weekend support available for urgent projects</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-700 mt-8">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Dribbble</a>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Behance</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Call Booking */}
            <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Prefer to Talk?</h2>
                <p className="text-gray-300 mb-6">
                  Book a free 15-minute intro call to discuss your project and see if we're a good fit.
                </p>
                <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
                  Book Intro Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-400 mt-4">
                  No sales pressure - just a friendly chat about your goals
                </p>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-gray-800/50 border-gray-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Quick Answers</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">How quickly can you start?</h3>
                    <p className="text-gray-300 text-sm">Most projects can begin within 1-2 weeks of contract signing.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Do you work internationally?</h3>
                    <p className="text-gray-300 text-sm">Yes! We work with clients worldwide and are experienced with remote collaboration.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What files will I receive?</h3>
                    <p className="text-gray-300 text-sm">All source files, multiple formats (PNG, JPG, SVG, PDF), and comprehensive brand guidelines.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="py-20"></div>
    </div>
  );
};

export default Contact;
