
import React from 'react';
import { Camera, Target, Sparkles, Edit, ShoppingBag } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Snap Your Space',
      description: 'Take a photo of the empty room you want to design.',
    },
    {
      number: '02',
      icon: Target,
      title: 'Set Your Purpose',
      description: 'Choose the room type and style preferences.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Let AI Work Its Magic',
      description: 'Get a fully styled layout with paint, furniture, lighting, and decor suggestions.',
    },
    {
      number: '04',
      icon: Edit,
      title: 'Customize Your Way',
      description: 'Tell the AI to swap or adjust any item.',
    },
    {
      number: '05',
      icon: ShoppingBag,
      title: 'Shop What You Love',
      description: 'Click on any item to shop real products and bring your space to life.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Designing Your Dream in Simple Steps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From photo to finished design in minutes with our AI-powered process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto -mt-6 relative z-10">
                  <step.icon className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
