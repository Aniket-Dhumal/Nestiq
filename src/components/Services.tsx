
import React from 'react';
import { Lightbulb, Palette, Home, Sofa, PaintBucket, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Complete interior transformation with modern aesthetics and functional layouts.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Illuminate your space with custom lighting solutions that create the perfect ambiance.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a personal sanctuary that reflects your lifestyle.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Professional office and commercial spaces that inspire productivity and success.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that perfectly complement your interior design vision.',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50'
    },
    {
      icon: PaintBucket,
      title: 'Color Consultation',
      description: 'Expert color schemes and palettes that bring harmony and style to your space.',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50'
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From concept to completion, we offer comprehensive design solutions tailored to your vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-8 w-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              
              <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors duration-300">
                <span className="text-sm">Learn More</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
