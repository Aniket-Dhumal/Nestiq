
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const ServicesPage = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Smart & Personal',
      description: 'Upload a photo, select your preferences, and our AI generates a layout optimized for size, function, and beauty.',
      features: ['Scaled furniture arrangements', 'Decor suggestions', 'Paint palettes and finishes', 'Real, purchasable products from trusted brands'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      step: '02',
      title: 'Intelligent Lighting',
      description: 'Set the mood with intelligent lighting recommendations that transform your space.',
      features: ['Fixture placements', 'Lighting types (warm, ambient, task, etc.)', 'Product links from partner brands', 'Customize suggestions based on existing decor'],
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      step: '03',
      title: 'Effortless Shopping',
      description: 'From AI recommendation to your doorstep with seamless shopping integration.',
      features: ['One-click shopping', 'Trusted brand partnerships', 'Real-time availability', 'Coordinated design packages'],
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200/30 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span className="text-blue-600 font-medium">AI-Powered Design Services</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Transform
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Any Space
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the future of interior design with intelligent solutions that bridge imagination and execution. 
              From concept to shopping, our AI delivers personalized results that match your style and budget.
            </p>
          </div>
          
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="AI Interior Design Services" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                AI-Generated Design Preview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Process Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              How NESTIQ Works
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
              Our AI-powered process makes interior design accessible, fast, and perfectly tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-4 shadow-lg`}>
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{step.description}</p>
                
                <ul className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Decorative bottom border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-blue-100 mb-10 text-xl max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who have revolutionized their spaces with AI-powered design. 
            Start your journey today and see your vision come to life.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            Start Your AI Design Journey
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
