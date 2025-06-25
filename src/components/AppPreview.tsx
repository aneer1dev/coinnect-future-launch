
import React, { useState, useEffect } from 'react';
import AppScreens from './AppScreens';
import BottomNavigation from './BottomNavigation';

interface AppPreviewProps {
  autoRotate?: boolean;
  className?: string;
}

const AppPreview = ({ autoRotate = false, className = '' }: AppPreviewProps) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isPaused, setIsPaused] = useState(false);

  const tabs = ['home', 'track', 'feed', 'web3', 'profile'];

  useEffect(() => {
    if (!autoRotate || isPaused) return;

    const interval = setInterval(() => {
      setActiveTab(current => {
        const currentIndex = tabs.indexOf(current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [autoRotate, isPaused, tabs]);

  return (
    <div 
      className={`iphone-mockup ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* iPhone Frame */}
      <div className="iphone-screen">
        {/* Status Bar */}
        <div className="status-bar">
          <span className="text-xs text-white font-medium">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="signal-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="battery">
              <div className="battery-level"></div>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="screen-content">
          <AppScreens activeTab={activeTab} />
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default AppPreview;
