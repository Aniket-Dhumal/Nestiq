
import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Zap, ShoppingCart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Smarter Design. Real Results.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              NestIQ is a first-of-its-kind interior design assistant that bridges the gap between imagination and execution. 
              Using advanced AI, we help you visualize your perfect space and connect you to real products to build it—no designers, no confusion, no delays.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you're setting up your first office or revamping your bedroom, NestIQ makes it effortless, fast, and uniquely yours.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Brain className="w-6 h-6 text-blue-600 mt-1" />
                <p className="text-gray-600">
                  AI-powered design solutions tailored to your space and style
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-purple-600 mt-1" />
                <p className="text-gray-600">
                  Instant visualization with real, shoppable products
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <ShoppingCart className="w-6 h-6 text-green-600 mt-1" />
                <p className="text-gray-600">
                  Direct connection to trusted brands and retailers
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
                alt="AI Interior Design Technology" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">AI</div>
                <div className="text-xs text-gray-600">Powered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
