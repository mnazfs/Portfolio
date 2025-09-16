import { useState } from 'react';
import { Home, User, Code, FolderOpen, Mail, Award, Menu, X } from 'lucide-react';
// import { motion } from 'framer-motion';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { path: '#intro', label: 'Intro', icon: Home, index: 0 },
    { path: '#about', label: 'About', icon: User, index: 1 },
    { path: '#projects', label: 'Projects', icon: FolderOpen, index: 2 },
    { path: '#skills', label: 'Skills', icon: Code, index: 3 },
    { path: '#achievements', label: 'Achievements', icon: Award, index: 4 },
    { path: '#contact', label: 'Contact', icon: Mail, index: 5 },
  ];

  // const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      {/* Topbar for small screens (collapsed state) */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-center gap-6 p-3 shadow-md transition-colors duration-300
        ${isExpanded ? 'bg-black text-gray-200' : 'bg-white text-black'}`}
      >
        {/* Menu Toggle (top-right corner) */}
        {/* <button
          onClick={toggleExpand}
          className="absolute right-4 top-3 p-2 rounded-md"
        >
          {isExpanded ? <X size={24} /> : <Menu size={24} />}
        </button> */}

        {/* Collapsed nav icons row */}
        {!isExpanded && (
          <nav className="flex flex-row justify-between w-full scroll-smooth">
            {navItems.map(({ path, icon: Icon }) => (
              <a
                key={path}
                href={path}
                className="flex flex-col items-center text-xs px-3 py-2 rounded-lg text-black hover:text-gray-700 transition-colors duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Expanded full-screen overlay menu */}
      {/* {isExpanded && (
        <motion.div
          className="lg:hidden fixed inset-0 bg-black text-gray-200 z-40 flex flex-col mt-6 space-y-6 pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-6 text-lg scroll-smooth">
            {navItems.map(({ path, label, icon: Icon, index }) => (
              <a
                key={path}
                href={path}
                onClick={() => setIsExpanded(false)}
                className="flex items-center gap-3 px-6 py-3 rounded-lg transition-colors duration-300 text-gray-200 hover:bg-gray-700"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Icon size={24} />
                  <span>{label}</span>
                </motion.div>
              </a>
            ))}
          </nav>
        </motion.div>
      )} */}

      {/* Sidebar for large screens */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-black text-white z-40 flex-col">
        <nav className="mb-20 flex-1 p-4 space-y-2 scroll-smooth flex flex-col justify-around">
          {navItems.map(({ path, label, icon: Icon }) => (
            <a
              key={path}
              href={path}
              className="flex items-center p-3 rounded-lg transition-colors duration-300 hover:bg-gray-700 text-white"
            >
              <Icon size={20} />
              <span className="ml-3">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
