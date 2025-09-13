import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import Mulearn from '../images/MuLearn GECI.png';
import CBMS from '../images/BusPass.png';
import LEAP from '../images/Leap.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'μLearn GECI Community Website',
      description:
        'A community website for μLearn GECI built with the MERN stack to connect students, share resources, and organize campus activities.',
      image: Mulearn,
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://mulearngeci.vercel.app',
      date: '2025'
    },
    {
      id: 2,
      title: 'College Bus Management System',
      description:
        'A MERN stack-based web application developed to digitize and streamline college bus management operations.',
      image: CBMS,
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      liveUrl: 'https://cbms.vercel.app',
      githubUrl: 'https://github.com/mnazfs/cbms',
      date: '2024'
    },
    {
      id: 3,
      title: 'Retracing Wheelchair',
      description:
        'An interdisciplinary team project, where I contributed as the microcontroller programmer ensuring accurate path detection and control.',
      image: LEAP,
      technologies: ['ESP32', 'Arduino IDE'],
      githubUrl: 'https://github.com',
      date: '2025'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A collection of projects showcasing my skills in fullstack development, system design, and
          problem-solving
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const hasLive = Boolean(project.liveUrl);
          const hasCode = Boolean(project.githubUrl);
          const buttonCount = [hasLive, hasCode].filter(Boolean).length;

          return (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {hasLive && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors"
                      aria-label="View Live Project"
                    >
                      <ExternalLink size={18} className="text-gray-600" />
                    </a>
                  )}
                  {hasCode && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors"
                      aria-label="View Source Code"
                    >
                      <Github size={18} className="text-gray-600" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      <Tag size={12} className="mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                  {hasLive && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        buttonCount === 1 ? 'w-full' : 'flex-1'
                      } bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300`}
                    >
                      View Live
                    </a>
                  )}
                  {hasCode && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        buttonCount === 1 ? 'w-full' : 'flex-1'
                      } bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300`}
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Working Together?</h2>
          <p className="text-lg text-gray-600 mb-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
