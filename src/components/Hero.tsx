
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Interior Design
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Step into a world of style with our top-notch interior design services. Whether you're looking to transform your home, office, or commercial space, our team of talented designers will work with you to create a space that reflects your personality and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                Start Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/3b4342f6-6b42-4970-a42b-bc89ee42d110.png" 
                  alt="Interior Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-32 bg-gray-200 rounded-lg"></div>
              <div className="h-48 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
