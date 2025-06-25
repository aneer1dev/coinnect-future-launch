
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AppPreviewSection from '../components/AppPreviewSection';
import GamificationSection from '../components/GamificationSection';
import WaitlistSection from '../components/WaitlistSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-rich-black overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div id="scroll-progress" className="scroll-progress"></div>
      
      <Navigation />
      <HeroSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="app-preview">
        <AppPreviewSection />
      </section>
      <section id="gamification">
        <GamificationSection />
      </section>
      <section id="waitlist">
        <WaitlistSection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
