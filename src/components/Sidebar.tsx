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
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
      >
        {isExpanded ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-black text-white transition-all duration-300 z-40 ${
        isExpanded ? 'w-64' : 'w-16'
      } lg:w-64`}>
        <div className="flex flex-col">
          {/* Logo/Brand */}
          <div className="p-4">
            <div className={`flex items-center ${isExpanded || window.innerWidth >= 1024 ? 'justify-start' : 'justify-center'}`}>
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center font-bold text-white">
                N
              </div>
              <span className={`ml-3 text-lg font-bold ${!isExpanded && window.innerWidth < 1024 ? 'hidden' : 'lg:block'}`}>
                Naseef
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
                      `flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-700 ${
                        isActive ? 'bg-gray-500 text-white' : 'text-blue-100'
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