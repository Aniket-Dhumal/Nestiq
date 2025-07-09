
import React from 'react';

const Stats = () => {
  const stats = [
    { number: '400+', label: 'Project Completed' },
    { number: '600+', label: 'Satisfied Customers' },
    { number: '100+', label: 'Unique Styles' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
