
import { useState } from 'react';
import { ArrowRight, Filter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Import generated images
import graphicDesign1 from '@/assets/graphic-design-1.jpg';
import graphicDesign2 from '@/assets/graphic-design-2.jpg';
import digitalArt1 from '@/assets/digital-art-1.jpg';
import digitalArt2 from '@/assets/digital-art-2.jpg';
import photography1 from '@/assets/photography-1.jpg';
import photography2 from '@/assets/photography-2.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Logos', 'Packaging', 'Digital', 'Presentations', 'Graphic Design', 'Digital Art', 'Photography'];
  const industries = ['All Industries', 'Beauty', 'Tech', 'Food', 'Events', 'Art', 'Gaming', 'Business', 'Tourism'];

  const projects = [
    {
      title: "TechFlow Startup Rebrand",
      category: "Logos",
      industry: "Tech",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      brief: "A growing SaaS startup needed a modern identity that would appeal to enterprise clients while maintaining approachability.",
      solution: "We created a clean, professional logo system with a tech-forward color palette and comprehensive brand guidelines.",
      result: "40% increase in qualified leads and successful Series A funding round within 6 months."
    },
    {
      title: "Artisan Coffee Co. Packaging",
      category: "Packaging", 
      industry: "Food",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
      brief: "Local coffee roaster wanted premium packaging to compete with national brands in retail stores.",
      solution: "Designed elegant packaging with storytelling elements highlighting their artisan process and local sourcing.",
      result: "300% increase in retail placement and 25% premium pricing achieved."
    },
    {
      title: "Bella Beauty Brand Campaign",
      category: "Digital",
      industry: "Beauty", 
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      brief: "Beauty brand needed cohesive social media presence to launch new product line to Gen Z audience.",
      solution: "Created vibrant, trend-aware social templates and digital campaign assets with strong brand consistency.",
      result: "200% increase in social engagement and 150% boost in online sales during launch period."
    },
    {
      title: "Investment Pitch Deck Design",
      category: "Presentations",
      industry: "Tech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      brief: "Fintech startup needed compelling pitch deck to secure Series B funding from top-tier VCs.",
      solution: "Transformed complex financial data into clear, compelling visual narratives with consistent branding throughout.",
      result: "Successfully raised $15M Series B funding, with investors praising the clear presentation of data."
    },
    {
      title: "Farm-to-Table Restaurant Identity",
      category: "Logos",
      industry: "Food",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      brief: "New restaurant concept needed authentic brand identity reflecting their farm-to-table philosophy.",
      solution: "Developed organic logo design with earthy color palette and hand-crafted typography system.",
      result: "Fully booked opening month and featured in local food publications for distinctive brand presentation."
    },
    {
      title: "EventPro Product Launch Kit",
      category: "Digital",
      industry: "Events",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      brief: "Event management software needed comprehensive digital assets for major product launch campaign.",
      solution: "Created multi-channel digital campaign including web banners, social assets, and email templates.",
      result: "Achieved 500% increase in demo requests and 25% conversion rate during launch quarter."
    },
    {
      title: "Corporate Identity System",
      category: "Graphic Design",
      industry: "Tech",
      image: graphicDesign1,
      brief: "Global tech company needed unified visual identity system for international expansion.",
      solution: "Developed comprehensive brand guidelines with modular logo system and cohesive design language.",
      result: "Streamlined brand implementation across 12 countries and 85% brand recognition increase."
    },
    {
      title: "Festival Poster Campaign",
      category: "Graphic Design", 
      industry: "Events",
      image: graphicDesign2,
      brief: "Music festival required eye-catching promotional materials to attract diverse audience demographics.",
      solution: "Created dynamic poster series with bold typography and vibrant color schemes matching festival energy.",
      result: "Sold out event in 2 weeks and 300% increase in social media shares."
    },
    {
      title: "Surreal Landscape Series",
      category: "Digital Art",
      industry: "Art",
      image: digitalArt1,
      brief: "Gallery exhibition needed original digital artworks exploring themes of nature and technology.",
      solution: "Created immersive digital paintings blending organic and synthetic elements with dramatic lighting.",
      result: "Featured in 5 international galleries and acquired by private collectors worldwide."
    },
    {
      title: "Cyberpunk Character Design",
      category: "Digital Art",
      industry: "Gaming",
      image: digitalArt2,
      brief: "Indie game studio needed character designs for futuristic action RPG set in dystopian city.",
      solution: "Developed detailed character concepts with cyberpunk aesthetics and rich backstory elements.",
      result: "Game trailer reached 2M views and secured publisher deal worth $500K."
    },
    {
      title: "Executive Portrait Session",
      category: "Photography",
      industry: "Business",
      image: photography1,
      brief: "Fortune 500 company needed professional headshots for C-suite executives and annual report.",
      solution: "Conducted on-location portrait sessions with professional lighting and corporate styling.",
      result: "Used across all corporate communications and contributed to 95% stakeholder approval rating."
    },
    {
      title: "Mountain Landscape Collection",
      category: "Photography",
      industry: "Tourism",
      image: photography2,
      brief: "Tourism board needed stunning landscape photography for national park promotion campaign.",
      solution: "Captured dramatic mountain vistas during golden hour with expert composition and timing.",
      result: "Campaign generated 40% increase in park visitors and won National Tourism Photography Award."
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">Hexatech</div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="hover:text-red-400 transition-colors">Home</a>
            <a href="/services" className="hover:text-red-400 transition-colors">Services</a>
            <a href="/portfolio" className="text-red-400">Portfolio</a>
            <a href="/about" className="hover:text-red-400 transition-colors">About</a>
            <a href="/blog" className="hover:text-red-400 transition-colors">Blog</a>
            <a href="/pricing" className="hover:text-red-400 transition-colors">Pricing</a>
            <a href="/contact" className="hover:text-red-400 transition-colors">Contact</a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-red-400 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
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
            Work That Speaks <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Louder Than Words</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A showcase of bold, results-driven design work.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 py-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={activeFilter === filter 
                  ? "bg-gradient-to-r from-red-500 to-orange-500 border-0" 
                  : "border-gray-600 text-gray-300 hover:bg-gray-700"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-600 overflow-hidden hover:bg-gray-800 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-red-400 text-sm font-medium">{project.category}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{project.industry}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Brief</h4>
                      <p className="text-sm">{project.brief}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Solution</h4>
                      <p className="text-sm">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Result</h4>
                      <p className="text-sm text-green-400">{project.result}</p>
                    </div>
                  </div>
                  
                  <Button className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
                    Start a Project Like This
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your brand achieve similar results.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
