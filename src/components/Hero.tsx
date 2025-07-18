
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI for the Aesthetically Inclined
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Transform Any Space
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                with Intelligent Design
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Welcome to a new era of design—where your vision meets AI precision. 
              Reimagine any room with the power of AI. Capture your space with a photo 
              and instantly generate a complete interior design plan.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Snap it.</span>
                </div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Design it.</span>
                </div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <ArrowRight className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Shop it.</span>
                </div>
              </div>
              <p className="text-center mt-2 text-sm text-gray-600 font-medium">All in one app.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Designing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                See How It Works
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="AI Generated Interior Design" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl transform -rotate-2 hover:-rotate-3 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Smart Bedroom Design" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-xl transform rotate-2 hover:rotate-3 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="AI Kitchen Design" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Smart Living Space" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-80 animate-bounce delay-500"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-80 animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
