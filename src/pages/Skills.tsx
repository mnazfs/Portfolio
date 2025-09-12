import { Database, Wrench, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'blue',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'cyan',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'indigo',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Linux', level: 80 },
        { name: 'Webpack', level: 70 },
        { name: 'Jest', level: 75 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'green',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 60 },
        { name: 'Mobile UI/UX', level: 80 },
        { name: 'App Store Deploy', level: 70 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600',
      cyan: 'from-cyan-500 to-cyan-600 bg-cyan-100 text-cyan-600',
      indigo: 'from-indigo-500 to-indigo-600 bg-indigo-100 text-indigo-600',
      green: 'from-green-500 to-green-600 bg-green-100 text-green-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          const colorClasses = getColorClasses(category.color);
          
          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${colorClasses.split(' ').slice(2).join(' ')}`}>
                  <Icon size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Competencies */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Agile Development',
            'System Design',
            'Code Review',
            'Team Leadership',
            'Problem Solving',
            'Technical Writing',
            'Performance Optimization',
            'Security Best Practices',
            'Continuous Integration'
          ].map((competency, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200 text-center">
              <span className="font-semibold text-gray-800">{competency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;