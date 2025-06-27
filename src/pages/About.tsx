
import { useState } from 'react';
import { ArrowRight, Target, Clock, Users, TrendingUp, Star, Camera, Palette, Monitor, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const benefits = [
    {
      icon: Target,
      title: "Creative + Strategic",
      description: "We combine creative vision with strategic thinking across all our artistic disciplines"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality or attention to detail"
    },
    {
      icon: Users,
      title: "One-on-One Collaboration",
      description: "Direct communication with our team throughout your project"
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Design",
      description: "Every creative decision is made with your goals and vision in mind"
    }
  ];

  const timeline = [
    { year: "2018", milestone: "Founded with a mission to help creators bring their artistic visions to life" },
    { year: "2020", milestone: "Expanded into photography and digital art services" },
    { year: "2022", milestone: "Added resin art and jewelry design to our creative offerings" },
    { year: "2023", milestone: "Launched website design services for creative professionals" },
    { year: "2024", milestone: "500+ creative projects completed across all disciplines" }
  ];

  const team = [
    {
      name: "Dela Ameyibor",
      role: "Creative Director & Founder",
      bio: "Multi-disciplinary artist specializing in photography, digital art, resin art, jewelry design, and web creation. Passionate about bringing unique creative visions to life.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face"
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
            <a href="/services" className="hover:text-red-400 transition-colors">Services</a>
            <a href="/portfolio" className="hover:text-red-400 transition-colors">Portfolio</a>
            <a href="/about" className="text-red-400">About</a>
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
            We Create With <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Purpose</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Hexatech is a creative studio specializing in photography, digital art, resin art, jewelry design, and website creation. Our mission is to transform your creative ideas into stunning reality through expert craftsmanship and artistic vision.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Creative Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{item.year}</span>
                </div>
                <div className="flex-1 pt-4">
                  <p className="text-gray-300 text-lg">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Hexatech</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Dela Ameyibor */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Creative Director</h2>
          <div className="flex justify-center">
            <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300 max-w-md">
              <CardContent className="p-6 text-center">
                <img 
                  src={team[0].image} 
                  alt={team[0].name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-semibold mb-2">{team[0].name}</h3>
                <p className="text-red-400 font-medium mb-4">{team[0].role}</p>
                <p className="text-gray-400">{team[0].bio}</p>
                <div className="flex justify-center mt-4">
                  <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
                    <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Creative Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Camera className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Photography</h3>
                <p className="text-gray-400">Professional photography for events, portraits, and products</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Palette className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Resin & Digital Art</h3>
                <p className="text-gray-400">Custom resin pieces and digital illustrations</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Monitor className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Website Design</h3>
                <p className="text-gray-400">Custom websites that showcase your creativity</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <Gem className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Jewelry Design</h3>
                <p className="text-gray-400">Unique jewelry pieces and custom designs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Bring Your Vision to Life?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
              <a href="/contact">Start a Project</a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <a href="https://linkedin.com/in/delaameyibor" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
