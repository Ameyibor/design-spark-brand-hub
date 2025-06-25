
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">DesignCo</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-red-400 transition-colors">Services</a>
          <a href="#" className="hover:text-red-400 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-red-400 transition-colors">About</a>
          <a href="#" className="hover:text-red-400 transition-colors">Contact</a>
        </div>
        <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
          Start Project
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
