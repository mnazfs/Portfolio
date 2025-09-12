 import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-gray-600 text-sm">
          <p>&copy; 2025 Computer Engineering & Fullstack Developer. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="p-2 text-gray-400 hover:text-cyan-600 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;