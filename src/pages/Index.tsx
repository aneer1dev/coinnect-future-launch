
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import GamificationSection from '../components/GamificationSection';
import WaitlistSection from '../components/WaitlistSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-rich-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <GamificationSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
