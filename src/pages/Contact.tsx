import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Have a project in mind or want to discuss opportunities? 
          I'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in new opportunities, whether it's a freelance project, 
              full-time position, or just a chat about technology and development.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
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
            </div>

            <div className="flex items-start">
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
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">Thodupuzha, India</p>
                <p className="text-sm text-gray-500">Available for remote work</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mnazfs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20}/>
              </a>
              <a
                href="https://www.linkedin.com/in/v-s-muhammed-naseef-03b90221b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20}/>
              </a>
              <a
                href="https://instagram.com/mnazfs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-100 rounded-lg hover:bg-cyan-200 transition-colors"
                aria-label="Twitter"
              >
                <FaInstagram size={20}/>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
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
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center"
            >
              <Send size={20} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;