
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Our Services',
      links: ['Interior Design', 'Lighting Design', 'Residential Design', 'Commercial Spaces', 'Furniture Selection', 'Color Consultation'],
    },
    {
      title: 'Company',
      links: ['About NESTIQ', 'Our Team', 'Portfolio', 'Awards', 'Careers', 'Press'],
    },
    {
      title: 'Support',
      links: ['Contact Us', 'FAQ', 'Design Process', 'Terms of Service', 'Privacy Policy', 'Warranty'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', color: 'from-blue-500 to-cyan-500' },
    { icon: Mail, text: 'hello@nestiq.com', color: 'from-purple-500 to-pink-500' },
    { icon: MapPin, text: '123 Design Street, Creative City', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NESTIQ
              </h3>
              <p className="text-gray-300 mt-2 text-lg leading-relaxed">
                Creating extraordinary spaces that inspire and transform lives. Your vision, our expertise.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className={`w-8 h-8 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-bold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 NESTIQ Interior Design Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
