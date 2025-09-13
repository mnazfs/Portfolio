import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Coffee } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <motion.h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>About Me</motion.h1>
        <motion.p className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
          Learn more about my journey, experience, and what drives me as a developer
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <motion.h2 className="text-2xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}>My Story</motion.h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              I am an aspiring computer engineer with a strong foundation in programming, data structures, and algorithms. 
              I enjoy solving problems and writing efficient code, and I thrive in environments where I can quickly adapt 
              and contribute to collaborative teams.
            </motion.p>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}>
              Over time, I have developed a diverse skill set that includes full-stack development, database management, 
              and problem-solving techniques. I am also passionate about exploring areas like intelligent systems and 
              embedded solutions, which allow me to combine creativity with technical expertise.
            </motion.p>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}>
              With a passion for continuous learning, I am driven to create impactful solutions through software development and innovative technologies.
            </motion.p>
          </div>
        </div>

        <div className="space-y-8">
          <motion.div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}>
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Education</h3>
            </div>
            <motion.div className='mb-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <h4 className="font-semibold text-gray-800">B.Tech in Computer Science and Engineering</h4>
              <p className="text-gray-600">APJ Abdul Kalam University • 2022-2026</p>
              <p className="text-gray-600">Government Engineering College Idukki</p>
              <p className="text-sm text-gray-500 mt-2">CGPA: 8.34/10</p>
            </motion.div>
            <motion.div className='mb-4'
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <h4 className="font-semibold text-gray-800">Higher Secondary School</h4>
              <p className="text-gray-600">St.Mary's HSS Arakulam • 2018-2020</p>
              <p className="text-sm text-gray-500 mt-2">Percentage: 87</p>
            </motion.div>
            <motion.div className='mb-4'
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <h4 className="font-semibold text-gray-800">Technical High School</h4>
              <p className="text-gray-600">THSS of IHRD, Muttom • 2015-2018</p>
              <p className="text-sm text-gray-500 mt-2">Percentage: 98</p>
            </motion.div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}>
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
            </div>
            <motion.div className='mb-4'
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <h4 className="font-semibold text-gray-800">Intern</h4>
              <p className="text-gray-600">District Collectorate, Idukki • May-July 2025</p>
              <p className="text-sm text-gray-500 mt-2">
                Developed a comprehensive database with a frontend interface for retrievals and an efficient backend system.
              </p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <h4 className="font-semibold text-gray-800">Technical Team Member</h4>
              <p className="text-gray-600">μLearn GECI • 2025 - Present</p>
              <p className="text-sm text-gray-500 mt-2">
                I contribute by developing solutions, supporting projects, and ensuring smooth execution of technical tasks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fun Facts About Me</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="text-blue-600" size={28} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Coffee Lover</h3>
            <p className="text-sm text-gray-600">500+ cups of coffee consumed while coding</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-cyan-600" size={28} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Problem Solver</h3>
            <p className="text-sm text-gray-600">Love tackling complex algorithms and challenges</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">24/7</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Always Learning</h3>
            <p className="text-sm text-gray-600">Constantly exploring new technologies</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-cyan-600 text-2xl font-bold">∞</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Open Source</h3>
            <p className="text-sm text-gray-600">Contributing to the developer community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;