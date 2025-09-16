import { Download } from 'lucide-react';
import Profile from '../images/Naseef.jpg'
import { motion } from 'framer-motion';
import useTyped from '../hooks/useTyped';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Intro = () => {
  const typedRef = useTyped(["Computer Engineer", "Fullstack Developer"]);

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
                viewport={{ once: true }}
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                Hi, I'm
                
              </motion.h1>
                <motion.h1 className="font-exo text-4xl lg:text-6xl font-bold mb-6 block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}>
                  Muhammed Naseef
                </motion.h1>
              
              <motion.h2 
                className="font-montserrat text-xl lg:text-2xl text-gray-600 mb-6 font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span ref={typedRef}></span>
              </motion.h2>
              
              {/* <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}>
                Aspiring Computer Engineer and Fullstack Developer passionate about building efficient solutions with strong foundations in algorithms and problem-solving.
              </motion.p> */}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                href="/Resume.pdf"
                download="Naseef_Resume.pdf"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 sm:from-gray-600 sm:to-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-colors duration-300 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}>
                    <Download size={20} className="mr-2" />
                    Resume
                </motion.a>
                <div className="flex space-x-4 lg:ml-10">
                  <a 
                    href="mailto:mnaseef2k02@gmail.com"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                    aria-label="Email"
                  >
                    <SiGmail size={30} />
                  </a>
                  <a 
                    href="https://github.com/mnazfs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-gray-900 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub size={30} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/v-s-muhammed-naseef-03b90221b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a 
                    href="https://api.whatsapp.com/send?phone=916238062964"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-green-500 transition-colors duration-300"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;