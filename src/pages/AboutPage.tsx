
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Stats from '../components/Stats';
import { Brain, Zap, Target } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make professional interior design accessible to everyone through the power of AI, connecting imagination with real, actionable solutions.'
    },
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'We leverage cutting-edge artificial intelligence to understand your space, style, and needs, delivering personalized design solutions.'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'From photo upload to shoppable design plan in minutes—revolutionizing how people approach interior design.'
    },
  ];

  const milestones = [
    { year: '2023', event: 'NESTIQ Founded', description: 'Launched with a vision to democratize interior design through AI' },
    { year: '2023', event: 'AI Engine Launch', description: 'Released our first AI-powered design recommendation system' },
    { year: '2024', event: 'Brand Partnerships', description: 'Partnered with major furniture and home decor retailers' },
    { year: '2024', event: 'Mobile App', description: 'Launched mobile app for on-the-go design solutions' },
    { year: '2024', event: 'Global Expansion', description: 'Expanded AI design services to multiple countries' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  NESTIQ
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                NESTIQ is revolutionizing interior design with AI technology that makes professional design 
                accessible to everyone. We bridge the gap between inspiration and execution through intelligent 
                recommendations and seamless shopping integration.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-blue-600">AI</div>
                  <div className="text-gray-600">Powered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">1M+</div>
                  <div className="text-gray-600">Designs</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="NESTIQ AI Design Technology" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that drive our AI-powered approach to interior design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Key milestones in building the future of AI-powered interior design
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      <Footer />
    </div>
  );
};

export default AboutPage;
