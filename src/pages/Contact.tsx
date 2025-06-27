
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">hexatech</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-red-400 transition-colors">Home</a>
            <a href="/services" className="hover:text-red-400 transition-colors">Services</a>
            <a href="/portfolio" className="hover:text-red-400 transition-colors">Portfolio</a>
            <a href="/about" className="hover:text-red-400 transition-colors">About</a>
            <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">LinkedIn</a>
            <a href="/pricing" className="hover:text-red-400 transition-colors">Pricing</a>
            <a href="/contact" className="text-red-400">Contact</a>
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
            Let's Create Something <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Amazing</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to bring your creative vision to life? We'd love to hear about your project and discuss how we can help.
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
                      <label className="block text-sm font-medium mb-2">Service Type</label>
                      <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-400 transition-colors">
                        <option value="">Select service type</option>
                        <option value="photography">Photography</option>
                        <option value="resin-art">Resin Art</option>
                        <option value="digital-art">Digital Art</option>
                        <option value="website">Website Design</option>
                        <option value="jewelry">Jewelry Design</option>
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
                      placeholder="Tell us about your creative vision, goals, timeline, and any specific requirements..."
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
                      <p className="text-gray-300">delaameyibor@gmail.com</p>
                      <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-300">0595388389</p>
                      <p className="text-sm text-gray-400">Quick questions and updates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-300">9 okugamah lane</p>
                      <p className="text-sm text-gray-400">Available for local meetings</p>
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
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Portfolio</a>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Gallery</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Call Booking */}
            <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Schedule a Creative Consultation</h2>
                <p className="text-gray-300 mb-6">
                  Book a free consultation to discuss your creative project and explore possibilities together.
                </p>
                <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
                  <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer">Book on LinkedIn</a>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-400 mt-4">
                  No pressure - just a friendly chat about your creative vision
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
                    <p className="text-gray-300 text-sm">Most creative projects can begin within 1-2 weeks of agreement.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Do you work internationally?</h3>
                    <p className="text-gray-300 text-sm">Yes! We work with clients worldwide and are experienced with remote collaboration.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What will I receive?</h3>
                    <p className="text-gray-300 text-sm">High-quality deliverables in multiple formats, source files, and detailed documentation as needed.</p>
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
