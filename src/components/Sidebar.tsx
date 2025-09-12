import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Code, FolderOpen, Mail, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Intro', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/skills', label: 'Skills', icon: Code },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
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
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
      >
        {isExpanded ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-blue-900 text-white transition-all duration-300 z-40 ${
        isExpanded ? 'w-64' : 'w-16'
      } lg:w-64`}>
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="p-4 border-b border-blue-800">
            <div className={`flex items-center ${isExpanded || window.innerWidth >= 1024 ? 'justify-start' : 'justify-center'}`}>
              <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center font-bold text-blue-900">
                D
              </div>
              <span className={`ml-3 text-lg font-bold ${!isExpanded && window.innerWidth < 1024 ? 'hidden' : 'lg:block'}`}>
                Developer
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setIsExpanded(false)}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-blue-800 ${
                        isActive ? 'bg-cyan-600 text-white' : 'text-blue-100'
                      } ${!isExpanded && window.innerWidth < 1024 ? 'justify-center' : 'justify-start'}`
                    }
                  >
                    <Icon size={20} />
                    <span className={`ml-3 ${!isExpanded && window.innerWidth < 1024 ? 'hidden' : 'lg:block'}`}>
                      {label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Info */}
          <div className={`p-4 border-t border-blue-800 ${!isExpanded && window.innerWidth < 1024 ? 'hidden' : 'lg:block'}`}>
            <p className="text-sm text-blue-200 text-center">
              © 2025 Portfolio
            </p>
          </div>
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