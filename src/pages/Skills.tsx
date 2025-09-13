import { Code, Database, Wrench, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import Assembly from '../assets/assembly-svgrepo-com.svg';
import API from '../assets/api-app-svgrepo-com.svg';
import Render from '../assets/render-community-large-icon.svg';
import ML from '../assets/machine-learning-svgrepo-com.svg';
import DL from '../assets/deep-learning-svgrepo-com.svg';

// Type definitions
type Skill = {
  name: string;
  svg: string;
};

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
};

// All skill categories
const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'cyan',
    skills: [
      { name: 'C', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Java', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Assembly', svg: Assembly },
      { name: 'HTML', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Javascript', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Typescript', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
    ]
  },
  {
    title: 'Frameworks, Libraries & Databases',
    icon: Globe,
    color: 'blue',
    skills: [
      { name: 'React.js', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Tailwind CSS', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'REST APIs', svg: API },
      { name: 'MySQL', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
    ]
  },
  {
    title: 'Specialized Domains',
    icon: Cpu,
    color: 'purple',
    skills: [
      { name: 'Machine Learning', svg: ML },
      { name: 'Deep Learning', svg: DL },
      { name: 'Microcontroller Programming', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    color: 'indigo',
    skills: [
      { name: 'Git', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'VS Code', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Vercel', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Render', svg: Render }
    ]
  }
];

// Utility: color classes
const getColorClasses = (color: string): string => {
  const colors: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600',
    cyan: 'from-cyan-500 to-cyan-600 bg-cyan-100 text-cyan-600',
    indigo: 'from-indigo-500 to-indigo-600 bg-indigo-100 text-indigo-600',
    green: 'from-green-500 to-green-600 bg-green-100 text-green-600',
    purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600'
  };
  return colors[color] || colors.blue;
};

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          An overview of my technical and non-technical skills
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          const colorClasses = getColorClasses(category.color);

          return (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${colorClasses.split(' ').slice(2).join(' ')}`}>
                  <Icon size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={skill.svg} alt={skill.name} className="w-12 h-12 mb-2" />
                    <span className="font-medium text-gray-800">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Core Competencies */}
      <motion.div 
        className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Problem Solving',
            'Agile Development',
            'System Design',
            'Code Review',
            'Team Spirit',
            'Technical Writing',
            'Performance Optimization',
            'Security Best Practices',
            'Continuous Integration'
          ].map((competency, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow border border-gray-200 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-semibold text-gray-800">{competency}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
