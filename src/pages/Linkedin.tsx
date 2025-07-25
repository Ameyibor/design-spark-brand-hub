
import { ArrowRight, Search, Tag, Calendar, User, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Linkedin = () => {
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
            <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer" className="text-red-400">LinkedIn</a>
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
            Connect With Us on <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">LinkedIn</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Follow our journey, see our latest work, and connect with us professionally on LinkedIn for updates, insights, and creative inspiration.
          </p>
        </div>
      </section>

      {/* LinkedIn CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Follow Dela Ameyibor on LinkedIn</h2>
              <p className="text-gray-300 text-lg mb-8">
                Stay updated with our latest creative projects, behind-the-scenes content, industry insights, and professional updates. Connect with us to explore collaboration opportunities and see our portfolio highlights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
                  <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer">Visit LinkedIn Profile</a>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  <a href="/contact">Get in Touch</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What You'll Find Section */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What You'll Find on Our LinkedIn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Latest Projects</h3>
                <p className="text-gray-400">See our newest photography, art, and design work as we complete them</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Behind the Scenes</h3>
                <p className="text-gray-400">Creative process insights and the story behind our artistic works</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry Updates</h3>
                <p className="text-gray-400">Creative industry trends, tips, and professional insights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prefer Direct Contact?</h2>
          <p className="text-xl text-gray-300 mb-8">
            While LinkedIn is great for staying connected, you can always reach out directly for project inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
              <a href="/contact">Contact Us Directly</a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <a href="/portfolio">View Our Portfolio</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="py-20"></div>
    </div>
  );
};

export default Linkedin;
