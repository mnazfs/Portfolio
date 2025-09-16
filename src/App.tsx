import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 overflow-x-hidden">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col pt-14 lg:pt-0 lg:ml-64 mt-10 lg:mt-0 transition-all duration-300">
          <main className="flex-1 p-4 lg:p-8 space-y-20">
            <motion.section id="intro"
              initial = {{ opacity: 0, y: 40 }}
              whileInView = {{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}><Intro /></motion.section>
            <motion.section id="about" className='transition-all duration-700'
              initial = {{ opacity: 0, y: 70 }}
              whileInView = {{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}><About /></motion.section>
            <motion.section id="projects" className='transition-all duration-700'
              initial = {{ opacity: 0, y: 70 }}
              whileInView = {{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}><Projects /></motion.section>
            <motion.section id="skills" className='transition-all duration-700'
              initial = {{ opacity: 0, y: 70 }}
              whileInView = {{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}><Skills /></motion.section>
            <motion.section id="achievements" className='transition-all duration-700'
              initial = {{ opacity: 0, y: 70 }}
              whileInView = {{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}><Achievements /></motion.section>
            <motion.section id="contact" className='transition-all duration-700'
              initial = {{ opacity: 0, y: 70 }}
              whileInView = {{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}><Contact /></motion.section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
