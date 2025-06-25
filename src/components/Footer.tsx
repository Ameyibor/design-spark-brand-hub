
const Footer = () => {
  return (
    <footer className="px-6 py-16 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">DesignCo</div>
            <p className="text-gray-400">
              Bold, strategic graphic design for startups and growing brands.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-400 transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Packaging Design</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Digital Design</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Presentations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Contact</a></li>
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
          <p className="text-gray-400">© 2024 DesignCo. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
