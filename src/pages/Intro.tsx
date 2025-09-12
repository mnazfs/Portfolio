 import { Download } from 'lucide-react';
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
              
              <motion.h2 className="text-xl lg:text-2xl text-gray-600 mb-6 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                Computer Engineer | Fullstack Developer
              </motion.h2>
              
              <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}>
                Passionate about creating innovative solutions through code. 
                Specializing in modern web technologies, system design, and 
                building scalable applications that make a difference.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                href="/Resume.pdf"
                download="Naseef_Resume.pdf"
                className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-colors duration-300 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}>
                    <Download size={20} className="mr-2" />
                    Download Resume
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;