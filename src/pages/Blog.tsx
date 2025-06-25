
import { ArrowRight, Search, Tag, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  const articles = [
    {
      title: "5 Mistakes Startups Make With Branding",
      excerpt: "Avoid these common branding pitfalls that can hurt your startup's growth and credibility.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      tags: ["Branding", "Startups"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    },
    {
      title: "How to Brief a Designer (Free Template)",
      excerpt: "Get better design results with our proven briefing template and communication strategies.",
      author: "Marcus Rodriguez", 
      date: "Dec 10, 2024",
      readTime: "8 min read",
      tags: ["Design Process", "Templates"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      title: "Top Typography Trends in 2025",
      excerpt: "Discover the typography trends that will define brand design in the coming year.",
      author: "Emma Foster",
      date: "Dec 8, 2024", 
      readTime: "6 min read",
      tags: ["Typography", "Trends"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop"
    },
    {
      title: "Why Your Logo Isn't Working (And How to Fix It)",
      excerpt: "Common logo design mistakes and practical solutions for better brand recognition.",
      author: "Sarah Chen",
      date: "Dec 5, 2024",
      readTime: "7 min read", 
      tags: ["Logo Design", "Branding"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
      title: "The Psychology of Color in Brand Design",
      excerpt: "How color choices influence customer perception and buying decisions.",
      author: "Emma Foster",
      date: "Dec 1, 2024",
      readTime: "9 min read",
      tags: ["Color Theory", "Psychology"],
      image: "https://images.unsplash.com/photo-1541557435327-1c4b90df6b30?w=400&h=250&fit=crop"
    },
    {
      title: "Building a Brand Style Guide That Actually Gets Used",
      excerpt: "Create brand guidelines that your team will follow and clients will love.",
      author: "Marcus Rodriguez",
      date: "Nov 28, 2024",
      readTime: "10 min read",
      tags: ["Brand Guidelines", "Design Systems"],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop"
    }
  ];

  const tags = ["Branding", "Logo Design", "Typography", "Color Theory", "Design Process", "Startups", "Packaging", "Social Media"];

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
            <a href="/blog" className="text-red-400">Blog</a>
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
            Design Tips, Trends & <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Freebies</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Learn from our experience and boost your brand with creative insights.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-600 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 hover:text-red-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" className="text-red-400 hover:text-red-300 p-0">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Newsletter Signup */}
            <Card className="bg-gray-800/50 border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
                <p className="text-gray-300 mb-4">Get weekly design tips and resources delivered to your inbox.</p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-400"
                  />
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Search */}
            <Card className="bg-gray-800/50 border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search for articles..."
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-400"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-gray-800/50 border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button key={index} className="px-3 py-1 bg-gray-700 hover:bg-red-500 text-sm rounded-full text-gray-300 hover:text-white transition-colors">
                      {tag}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Free Resources */}
            <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Free Design Assets</h3>
                <p className="text-gray-300 mb-4">Download our exclusive design templates and resources.</p>
                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
                  Download Freebies
                </Button>
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

export default Blog;
