import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import AIFeature from './components/AIFeature';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <AIFeature />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;