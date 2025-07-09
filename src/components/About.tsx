
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Designing Your Dream With Brilliance
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our design team is passionate about creating beautiful, functional spaces that reflect your unique style and personality. We work closely with our clients to understand their vision and bring it to life through thoughtful design and careful attention to detail.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Innovative design solutions tailored to your lifestyle
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Expert project management from concept to completion
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Sustainable and eco-friendly design practices
                </p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More
            </Button>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Interior Design Studio" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-xs text-gray-600">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
