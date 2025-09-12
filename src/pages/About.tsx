 
import { GraduationCap, Briefcase, Award, Coffee } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn more about my journey, experience, and what drives me as a developer
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I'm a passionate Computer Engineering graduate turned Fullstack Developer with a deep 
              love for creating innovative digital solutions. My journey began with curiosity about 
              how things work, which led me to pursue computer engineering and discover the world 
              of software development.
            </p>
            <p>
              With expertise spanning both frontend and backend technologies, I enjoy building 
              complete solutions from conception to deployment. I believe in writing clean, 
              maintainable code and creating user experiences that truly make a difference.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers in the community.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Education</h3>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Bachelor of Computer Engineering</h4>
              <p className="text-gray-600">University Name • 2020-2024</p>
              <p className="text-sm text-gray-500 mt-2">GPA: 3.8/4.0 • Magna Cum Laude</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Fullstack Developer</h4>
              <p className="text-gray-600">Tech Company • 2024-Present</p>
              <p className="text-sm text-gray-500 mt-2">
                Developing scalable web applications using modern technologies
              </p>
            </div>
          </div>
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