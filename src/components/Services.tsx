
import React from 'react';
import { Lightbulb, Palette, Home, Sofa, PaintBucket, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Create fully furnished, beautifully balanced spaces with our AI-powered design assistant. Every detail is tailored to your style.',
      features: ['Scaled furniture arrangements', 'Decor suggestions', 'Paint palettes and finishes', 'Real, purchasable products from trusted brands']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Discover lighting layouts that enhance mood, function, and style—suggested based on your space and purpose.',
      features: ['Fixture placements', 'Lighting types (warm, ambient, task, etc.)', 'Product links from partner brands', 'Customize based on existing decor']
    },
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Design stunning homes with ready-to-shop design plans. Just upload a photo, choose a goal, and we deliver the rest.',
      features: ['3D layouts', 'Product suggestions', 'Multiple design styles (Scandinavian, Modern, Boho, etc.)', 'Voice/text customization options']
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Transform offices, studios, or client spaces with layouts that balance aesthetics with productivity.',
      features: ['Efficient layouts based on team size', 'Brand-aligned decor', 'Acoustic, lighting, ergonomic suggestions', 'Shoppable B2B and retail recommendations']
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'AI-recommended furniture that fits your space, taste, and budget—sourced from top brands and ready to shop.',
      features: ['AI-curated sets', 'Product details (price, brand, availability)', 'Side-by-side alternatives', 'Theme compatibility with your paint and lighting choices']
    },
    {
      icon: PaintBucket,
      title: 'Colour Consultation',
      description: 'We suggest precise paint shades and combinations powered by leading paint brands.',
      features: ['Accurate color codes from top brands (e.g., Asian Paints, Nerolac)', 'Coordinated palettes', 'Mood-based suggestions (calm, bold, cozy)', 'Sample and finish compatibility with selected furniture']
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            AI-powered design solutions that connect your vision to real, shoppable products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors duration-300">
                <span className="text-sm">Learn More</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
