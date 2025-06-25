
import React, { useEffect } from 'react';
import AppPreview from './AppPreview';

const HeroSection = () => {
  useEffect(() => {
    // Scroll progress indicator
    const updateScrollProgress = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.transform = `scaleX(${progress / 100})`;
      }
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          entry.target.classList.remove('animate-out');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('animate-out');
      observer.observe(section);
    });

    window.addEventListener('scroll', updateScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden hero-section">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-electric-blue/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl floating delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-deep-purple/10 rounded-full blur-3xl floating delay-500"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-hero font-bold text-white mb-4 animate-fade-in">
              <span className="block">Track.</span>
              <span className="block gradient-text">Learn.</span>
              <span className="block">Grow.</span>
              <span className="block gradient-text">Connect.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body text-gray-300 mb-6 animate-slide-up delay-200 max-w-lg mx-auto lg:mx-0">
              The future of finance for Gen Z. Where crypto meets community, 
              and learning becomes addictive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center animate-slide-up delay-400">
              <a
                href="#waitlist"
                className="glow-button px-8 py-3"
              >
                Join the Waitlist
              </a>
              <a
                href="#app-preview"
                className="glass-card px-8 py-3 text-white font-semibold hover:border-electric-blue/50 transition-all duration-300 text-sm"
              >
                Try Interactive Demo
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-8 animate-fade-in delay-500">
              <p className="text-gray-400 mb-3 text-sm">Join 1,000+ Gen Z users already waiting</p>
              <div className="flex justify-center lg:justify-start items-center space-x-2">
                {/* Avatar Stack */}
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue to-neon-green border-2 border-rich-black flex items-center justify-center text-white font-semibold text-xs"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-electric-blue font-semibold ml-3 text-sm">+995 more</span>
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="flex justify-center lg:justify-end animate-slide-up delay-300">
            <AppPreview autoRotate={true} className="hero-phone" />
          </div>
        </div>
      </div>

      {/* Floating Elements - Removed the overlapping "Level 5 Achieved!" */}
      <div className="absolute top-16 left-8 glass-card p-3 floating delay-100 hidden xl:block">
        <div className="w-6 h-6 bg-neon-green rounded-lg mb-1"></div>
        <p className="text-xs text-gray-300">+12% this week</p>
      </div>

      <div className="absolute top-1/2 left-4 glass-card p-2 floating delay-400 hidden xl:block">
        <div className="text-center">
          <div className="text-coinnect-amber font-bold text-sm">1,250</div>
          <div className="text-xs text-gray-300">XP Points</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gradient-to-b from-electric-blue to-transparent rounded-full mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
