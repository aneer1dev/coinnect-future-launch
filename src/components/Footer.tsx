
import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  return (
    <footer className="py-16 border-t border-glass-border">
      <div className="container-custom">
        <div className="glass-card">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Tagline */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold gradient-text mb-2">Coinnect</h2>
              <p className="text-gray-400">Connecting Gen Z to their financial future</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-8 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-electric-blue transition-colors duration-300 p-2"
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Coinnect. All rights reserved. Built for Gen Z, by Gen Z.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
