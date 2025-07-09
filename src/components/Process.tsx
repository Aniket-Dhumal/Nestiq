
import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We start with a detailed consultation to understand your vision, needs, and budget.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our team creates comprehensive design plans and 3D visualizations for your approval.',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We bring your design to life with careful project management and quality craftsmanship.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Designing Your Dream in Three Simple Steps
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Interior Process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
