import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Code, FolderOpen, Mail, Menu, X, Award } from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { path: '/', label: 'Intro', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/skills', label: 'Skills', icon: Code },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/achievements', label: 'Achievements', icon: Award },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-lg shadow-lg transition-colors"
      >
        {isExpanded ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full ${
        isExpanded ? 'bg-black w-64 transition-all duration-500' : 'w-16'
      } lg:w-64 lg:bg-black transition-all duration-500 z-40`}>
        <div className="flex flex-col">
          {/* Navigation */}
          <nav className="mt-20 flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setIsExpanded(false)}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg transition-colors duration-300 hover:bg-gray-700 ${
                        isActive ? 'bg-gray-300 lg:bg-gray-500 text-white' : 'text-white'
                      } ${!isExpanded && window.innerWidth < 1024 ? 'justify-center' : 'justify-start'}`
                    }
                  >
                    <Icon
                      size={20}
                      className={`transition-colors duration-300 
                        ${isExpanded || window.innerWidth >= 1024 ? 'text-white' : 'text-black'}
                      `}
                    />
                    <span className={`ml-3 text-white ${!isExpanded && window.innerWidth < 1024 ? 'hidden' : 'block'}`}>
                      {label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isExpanded && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;