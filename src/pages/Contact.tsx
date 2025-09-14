import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_rad9nt2', // Service ID
        'template_trsps1e', // Template ID
        formData,
        'FLiVHzrAKVqlIYlxx' // Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Thank you for your message! I'll get back to you soon.");
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <motion.h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>Let's Connect</motion.h1>
        <motion.p className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            I'm always interested in new opportunities, whether it's a
            freelance project, full-time position, or just a chat about
            technology and development.
        </motion.p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="space-y-6">
            {/* Email */}
            <motion.div
              className="flex items-start"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">mnaseef2k02@gmail.com</p>
                <a
                  href="mailto:mnaseef2k02@gmail.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Send a message
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-start"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="text-cyan-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+91 6238 062 964</p>
                <a
                  href="tel:+916238062964"
                  className="text-cyan-600 hover:text-cyan-700 transition-colors"
                >
                  Give me a call
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-start"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">Thodupuzha, India</p>
                <p className="text-sm text-gray-500">Available for remote work</p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/mnazfs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-[#333333] hover:text-white transition-colors duration-500"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/v-s-muhammed-naseef-03b90221b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-[#0077B5] hover:text-white transition-colors duration-500"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com/mnazfs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white transition-colors duration-500"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="What's this about?"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} className="mr-2" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
