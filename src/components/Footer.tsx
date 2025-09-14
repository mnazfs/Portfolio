 import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
 import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black px-4 lg:px-8 py-6 z-50 bottom-0 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-white text-sm">
          <p>&copy; V S Muhammed Naseef 2025 <span className='text-gray-400'>| Design by V S Muhammed Naseef</span></p>
        </div>
        
        <div className="flex space-x-4">
          <a 
            href="mailto:mnaseef2k02@gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <SiGmail size={20} />
          </a>
          <a 
            href="https://github.com/mnazfs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/v-s-muhammed-naseef-03b90221b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=916238062964"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;