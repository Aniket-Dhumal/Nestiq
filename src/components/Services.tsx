
import React from 'react';
import { Lightbulb, Palette, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Brighten your space with our custom lighting solutions.',
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Transform your space with our interior design expertise.',
    },
    {
      icon: Home,
      title: 'Office Design',
      description: 'Professional office spaces that inspire productivity.',
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
