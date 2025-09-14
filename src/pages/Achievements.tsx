import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Certificate from '../animations/Certificate.json';
import Medal from '../animations/Medal.json';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      animation: Medal,
      title: 'First Runner Up Team',
      description: 'At the Open House Competition for LP201 - Practicum for Innovative Engineering held at GEC Idukki',
      issuer: 'LEAP, IITM Incubation Cell',
      date: '2025'
    },
    {
      id: 2,
      animation: Certificate,
      title: 'Programming, Data Structures and Algorithms Using Python',
      issuer: 'IIT Madras',
      date: '2024'
    },
    {
      id: 3,
      animation: Certificate,
      title: 'Introduction to Machine Learning',
      issuer: 'IIT Madras',
      date: '2024'
    },
    {
      id: 4,
      animation: Certificate,
      title: 'Deep Learning',
      issuer: 'IIT Kharagur',
      date: '2025'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Certifications & Awards
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A showcase of certifications and recognitions highlighting my skills,
          achievements, and contributions.
        </p>
      </motion.div>

      {/* Achievements List */}
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Enlarged Animation */}
            <Lottie
              animationData={achievement.animation}
              loop={true}
              className="w-25 h-25 mb-4"
            />

            {/* Title*/}
            <div className="flex items-center justify-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
            </div>

            {/* Description (only if exists) */}
            {achievement.description && (
              <p className="text-gray-700 mb-2 leading-relaxed">
                {achievement.description}
              </p>
            )}

            {/* Issuer */}
            <p className="text-sm font-medium text-gray-500">
              Issued by {achievement.issuer}
            </p>

            {/* Date */}
            <div className="flex items-center text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                {achievement.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
