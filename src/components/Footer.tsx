 import { FaGithub, FaLinkedin } from 'react-icons/fa';
 import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-gray-600 text-sm">
          <p>&copy; V S Muhammed Naseef 2025</p>
        </div>
        
        <div className="flex space-x-4">
          <a 
            href="https://github.com/mnazfs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-black transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/v-s-muhammed-naseef-03b90221b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-black transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="mailto:mnaseef2k02@gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-black transition-colors duration-300"
            aria-label="Email"
          >
            <SiGmail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;