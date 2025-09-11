import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Gamepad2 } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Logo from "../images/NSF.png"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={ Logo } alt='Logo' className='w-20 h-auto'/>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 dark:text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/skills" className="text-gray-400 dark:text-gray-400 hover:text-white transition-colors">Skills</Link></li>
              <li><Link to="/projects" className="text-gray-400 dark:text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 dark:text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3" 
                onClick={() => { navigator.clipboard.writeText("mnaseef2k02@gmail.com"); alert("Email address copied to clipboard!"); }}>
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 dark:text-gray-400 text-sm">mnaseef2k02@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-3" 
                onClick={() => { navigator.clipboard.writeText("+916238062964"); alert("Phone number copied to clipboard!"); }}>
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 dark:text-gray-400 text-sm">+91 6238 062 964</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/v-s-muhammed-naseef-03b90221b" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin size={20}/></a>
              <a href="https://www.github.com/mnazfs" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaGithub size={20}/></a>
              <a href="https://www.instagram.com/mnazfs" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram size={20}/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}