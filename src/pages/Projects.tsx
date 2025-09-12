import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      date: '2024'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      date: '2024'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps using various weather APIs.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      date: '2023'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for social media metrics with data visualization, trend analysis, and automated reporting features.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'D3.js', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      date: '2023'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A collection of projects showcasing my skills in fullstack development, 
          system design, and problem-solving
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors"
                  aria-label="View Live Project"
                >
                  <ExternalLink size={18} className="text-gray-600" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors"
                  aria-label="View Source Code"
                >
                  <Github size={18} className="text-gray-600" />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              
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
              
              <div className="flex space-x-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
                >
                  View Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
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