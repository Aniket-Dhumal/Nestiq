
import React from 'react';
import { Lightbulb, Palette, Home, Sofa, PaintBucket, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Create fully furnished, beautifully balanced spaces with our AI-powered design assistant. Every detail is tailored to your style.',
      features: ['Scaled furniture arrangements', 'Decor suggestions', 'Paint palettes and finishes', 'Real, purchasable products from trusted brands'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Discover lighting layouts that enhance mood, function, and style—suggested based on your space and purpose.',
      features: ['Fixture placements', 'Lighting types (warm, ambient, task, etc.)', 'Product links from partner brands', 'Customize based on existing decor'],
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Design stunning homes with ready-to-shop design plans. Just upload a photo, choose a goal, and we deliver the rest.',
      features: ['3D layouts', 'Product suggestions', 'Multiple design styles (Scandinavian, Modern, Boho, etc.)', 'Voice/text customization options'],
      gradient: 'from-green-400 to-teal-500'
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Transform offices, studios, or client spaces with layouts that balance aesthetics with productivity.',
      features: ['Efficient layouts based on team size', 'Brand-aligned decor', 'Acoustic, lighting, ergonomic suggestions', 'Shoppable B2B and retail recommendations'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'AI-recommended furniture that fits your space, taste, and budget—sourced from top brands and ready to shop.',
      features: ['AI-curated sets', 'Product details (price, brand, availability)', 'Side-by-side alternatives', 'Theme compatibility with your paint and lighting choices'],
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      icon: PaintBucket,
      title: 'Colour Consultation',
      description: 'We suggest precise paint shades and combinations powered by leading paint brands.',
      features: ['Accurate color codes from top brands (e.g., Asian Paints, Nerolac)', 'Coordinated palettes', 'Mood-based suggestions (calm, bold, cozy)', 'Sample and finish compatibility with selected furniture'],
      gradient: 'from-cyan-400 to-blue-500'
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Our Premium Services
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl mt-6 leading-relaxed">
            AI-powered design solutions that connect your vision to real, shoppable products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Icon container with gradient background */}
              <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                <service.icon className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors duration-300"></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2.5 flex-shrink-0`}></div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Decorative bottom border */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Start your AI-powered design journey today and see your vision come to life.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
