
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Process />
      <Gallery />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
