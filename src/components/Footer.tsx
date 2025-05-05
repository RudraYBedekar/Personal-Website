import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <a href="#home" className="text-2xl font-bold mb-6">
            <span className="text-teal-400">Port</span>folio
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            
           
          </div>
          
          <div className="text-gray-400 text-sm">
            <p className="flex items-center justify-center">
              Made with <Heart size={16} className="text-red-500 mx-1 animate-pulse" /> in {currentYear}
            </p>
            <p className="mt-2">
              &copy; All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;