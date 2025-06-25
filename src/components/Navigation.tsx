
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Live Demo', href: '#app-preview' },
    { name: 'Gamification', href: '#gamification' },
    { name: 'Community', href: '#waitlist' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className={`glass-nav transition-all duration-500 ${
        isScrolled ? 'glass-nav-scrolled' : ''
      }`}>
        <div className="flex items-center justify-between h-12 px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={scrollToTop}
              className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer"
            >
              Coinnect
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-xs font-medium text-gray-300 hover:text-electric-blue transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#waitlist"
              onClick={(e) => handleSmoothScroll(e, '#waitlist')}
              className="nav-cta-button text-xs"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus-ring p-2"
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-glass-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-xs font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={(e) => handleSmoothScroll(e, '#waitlist')}
                className="block w-full mt-4 nav-cta-button text-center text-xs"
              >
                Get Early Access
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
