import React from 'react';
import AppPreview from './AppPreview';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden hero-section">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-green/10 rounded-full blur-3xl floating delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-deep-purple/10 rounded-full blur-3xl floating delay-500"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-hero font-bold text-white mb-6 animate-fade-in">
              <span className="block">Track.</span>
              <span className="block gradient-text">Learn.</span>
              <span className="block">Grow.</span>
              <span className="block gradient-text">Connect.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up delay-200">
              The future of finance for Gen Z. Where crypto meets community, 
              and learning becomes addictive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-slide-up delay-400">
              <a
                href="#waitlist"
                className="glow-button text-lg px-10 py-5"
              >
                Join the Waitlist
              </a>
              <a
                href="#app-preview"
                className="glass-card px-10 py-5 text-white font-semibold hover:border-electric-blue/50 transition-all duration-300"
              >
                Try Interactive Demo
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-12 animate-fade-in delay-500">
              <p className="text-gray-400 mb-4">Join 1,000+ Gen Z users already waiting</p>
              <div className="flex justify-center lg:justify-start items-center space-x-2">
                {/* Avatar Stack */}
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-neon-green border-2 border-rich-black flex items-center justify-center text-white font-semibold text-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-electric-blue font-semibold ml-4">+995 more</span>
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="flex justify-center lg:justify-end animate-slide-up delay-300">
            <AppPreview autoRotate={true} className="hero-phone" />
          </div>
        </div>
      </div>

      {/* Floating Elements - Keep existing code */}
      <div className="absolute top-20 left-10 glass-card p-4 floating delay-100 hidden xl:block">
        <div className="w-8 h-8 bg-neon-green rounded-lg mb-2"></div>
        <p className="text-xs text-gray-300">+12% this week</p>
      </div>

      <div className="absolute bottom-32 right-10 glass-card p-4 floating delay-200 hidden xl:block">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-electric-blue rounded-full"></div>
          <span className="text-xs text-white">Level 5 Achieved!</span>
        </div>
      </div>

      <div className="absolute top-1/2 left-5 glass-card p-3 floating delay-400 hidden xl:block">
        <div className="text-center">
          <div className="text-coinnect-amber font-bold text-lg">1,250</div>
          <div className="text-xs text-gray-300">XP Points</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-electric-blue to-transparent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
