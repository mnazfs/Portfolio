 import { ChevronDown, Download } from 'lucide-react';
 import Profile from '../images/Naseef.jpg'
 import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className="min-h-full flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 md:order-1">
              <motion.div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                <img
                  src={Profile}
                  alt="Professional Developer"
                  className="rounded-full w-full h-full object-cover shadow-2xl border-4 border-white"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 text-left">
              <motion.h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                Hi, I'm
                
              </motion.h1>
                <motion.h1 className="text-4xl lg:text-6xl font-bold mb-6 block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}>
                  Muhammed Naseef
                </motion.h1>
              
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-6 font-medium">
                Computer Engineer | Fullstack Developer
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Passionate about creating innovative solutions through code. 
                Specializing in modern web technologies, system design, and 
                building scalable applications that make a difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center">
                  <Download size={20} className="mr-2" />
                  Download Resume
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;