
import React from 'react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const tabs = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'track', icon: '📊', label: 'Track' },
    { id: 'feed', icon: '📱', label: 'Feed' },
    { id: 'web3', icon: '🔮', label: 'Web3' },
    { id: 'profile', icon: '👤', label: 'Profile' },
  ];

  return (
    <div className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
        >
          <span className="text-lg">{tab.icon}</span>
          <span className="text-xs">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavigation;
