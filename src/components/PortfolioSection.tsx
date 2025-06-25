
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
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

  return (
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
            View Full Portfolio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
