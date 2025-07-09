
import React from 'react';

const Stats = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
    { number: '800+', label: 'Satisfied Customers', color: 'from-purple-500 to-pink-500' },
    { number: '150+', label: 'Design Awards', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our expertise and dedication have made us the preferred choice for luxury interior design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
