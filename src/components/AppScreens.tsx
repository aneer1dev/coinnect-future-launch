import React from 'react';

interface AppScreensProps {
  activeTab: string;
}

const AppScreens = ({ activeTab }: AppScreensProps) => {
  const renderHomeScreen = () => (
    <div className="screen-container">
      <div className="screen-header">
        <h2 className="text-lg font-semibold text-white">Good morning, Ritika! 👋</h2>
      </div>
      
      {/* Clean Balance Display */}
      <div className="balance-showcase bg-gradient-to-r from-electric-blue/10 to-neon-green/10 rounded-xl p-4 mb-4 border border-electric-blue/20">
        <div className="text-center">
          <p className="text-gray-400 text-xs mb-1">Current Balance</p>
          <h2 className="text-white font-bold text-2xl mb-2">₹24,580.50</h2>
          <div className="flex justify-center items-center space-x-2">
            <span className="text-neon-green text-sm">+₹1,240</span>
            <span className="text-gray-400 text-xs">today</span>
          </div>
        </div>
      </div>

      {/* Clean Action Buttons */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <button className="bg-electric-blue/20 border border-electric-blue/30 rounded-lg p-3 flex flex-col items-center hover:bg-electric-blue/30 transition-colors">
          <div className="w-6 h-6 bg-electric-blue rounded-full mb-1 flex items-center justify-center">
            <span className="text-white text-xs">+</span>
          </div>
          <span className="text-white text-xs">Add Money</span>
        </button>
        
        <button className="bg-neon-green/20 border border-neon-green/30 rounded-lg p-3 flex flex-col items-center hover:bg-neon-green/30 transition-colors">
          <div className="w-6 h-6 bg-neon-green rounded-full mb-1 flex items-center justify-center">
            <span className="text-white text-xs">↗</span>
          </div>
          <span className="text-white text-xs">Send</span>
        </button>
        
        <button className="bg-deep-purple/20 border border-deep-purple/30 rounded-lg p-3 flex flex-col items-center hover:bg-deep-purple/30 transition-colors">
          <div className="w-6 h-6 bg-deep-purple rounded-full mb-1 flex items-center justify-center">
            <span className="text-white text-xs">📊</span>
          </div>
          <span className="text-white text-xs">Invest</span>
        </button>
        
        <button className="bg-coinnect-amber/20 border border-coinnect-amber/30 rounded-lg p-3 flex flex-col items-center hover:bg-coinnect-amber/30 transition-colors">
          <div className="w-6 h-6 bg-coinnect-amber rounded-full mb-1 flex items-center justify-center">
            <span className="text-white text-xs">🎯</span>
          </div>
          <span className="text-white text-xs">Goals</span>
        </button>
      </div>

      {/* Updated Transaction History */}
      <div className="space-y-2 mb-3">
        <h3 className="text-sm font-medium text-gray-300 mb-2">Recent Activity</h3>
        
        <div className="flex items-center justify-between bg-gray-800/30 rounded-lg p-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-neon-green/20 rounded-full flex items-center justify-center">
              <span className="text-xs">💰</span>
            </div>
            <div>
              <p className="text-white text-xs font-medium">Mutual Fund SIP</p>
              <p className="text-gray-400 text-xs">Today, 2:30 PM</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-neon-green text-xs font-bold">+₹2,500</p>
            <p className="text-gray-400 text-xs">Return</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between bg-gray-800/30 rounded-lg p-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-electric-blue/20 rounded-full flex items-center justify-center">
              <span className="text-xs">🛒</span>
            </div>
            <div>
              <p className="text-white text-xs font-medium">Online Shopping</p>
              <p className="text-gray-400 text-xs">Yesterday, 6:45 PM</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-red-400 text-xs font-bold">-₹1,299</p>
            <p className="text-gray-400 text-xs">Spent</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between bg-gray-800/30 rounded-lg p-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-coinnect-amber/20 rounded-full flex items-center justify-center">
              <span className="text-xs">🎯</span>
            </div>
            <div>
              <p className="text-white text-xs font-medium">Goal Achievement</p>
              <p className="text-gray-400 text-xs">2 days ago</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-coinnect-amber text-xs font-bold">+500 XP</p>
            <p className="text-gray-400 text-xs">Earned</p>
          </div>
        </div>
      </div>

      <div className="xp-progress">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-300">Level 5</span>
          <span className="text-electric-blue">2,480/3,000 XP</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '83%' }}></div>
        </div>
      </div>
    </div>
  );

  const renderTrackScreen = () => (
    <div className="screen-container">
      <div className="screen-header">
        <h2 className="text-lg font-semibold text-white">Add Expense</h2>
      </div>

      <div className="category-grid">
        <button className="category-btn active">
          <span className="text-2xl">🍕</span>
          <span className="text-xs">Food</span>
        </button>
        <button className="category-btn">
          <span className="text-2xl">🚗</span>
          <span className="text-xs">Transport</span>
        </button>
        <button className="category-btn">
          <span className="text-2xl">🛍️</span>
          <span className="text-xs">Shopping</span>
        </button>
        <button className="category-btn">
          <span className="text-2xl">🎮</span>
          <span className="text-xs">Entertainment</span>
        </button>
      </div>

      <div className="amount-input">
        <label className="text-sm text-gray-300">Amount</label>
        <div className="input-wrapper">
          <span className="currency">₹</span>
          <input type="number" value="250" className="amount-field" />
        </div>
      </div>

      <button className="primary-button">Log Expense</button>

      <div className="daily-total">
        <div className="text-sm text-gray-400">Today's total</div>
        <div className="text-lg font-semibold text-white">₹340 spent</div>
      </div>
    </div>
  );

  const renderFeedScreen = () => (
    <div className="screen-container">
      <div className="screen-header">
        <h2 className="text-lg font-semibold text-white">Wisdom Wall</h2>
      </div>

      <div className="wisdom-feed">
        <div className="wisdom-card">
          <div className="text-sm text-white">Save 20% before you spend 80% 💡</div>
          <div className="text-xs text-gray-400 mt-1">@finance_guru_21</div>
        </div>
        <div className="wisdom-card">
          <div className="text-sm text-white">Compound interest is the 8th wonder 📈</div>
          <div className="text-xs text-gray-400 mt-1">@investment_alex</div>
        </div>
        <div className="wisdom-card">
          <div className="text-sm text-white">Budget = Telling your money where to go 💸</div>
          <div className="text-xs text-gray-400 mt-1">@money_mentor</div>
        </div>
      </div>

      <button className="post-wisdom-btn">Share Wisdom +10 XP</button>
    </div>
  );

  const renderWeb3Screen = () => (
    <div className="screen-container">
      <div className="screen-header">
        <h2 className="text-lg font-semibold text-white">Learn Web3</h2>
      </div>

      <div className="progress-section">
        <div className="text-sm text-gray-300 mb-2">Blockchain Basics</div>
        <div className="progress-bar mb-4">
          <div className="progress-fill" style={{ width: '60%' }}></div>
        </div>
        <div className="text-xs text-electric-blue">60% complete</div>
      </div>

      <div className="lesson-cards">
        <div className="lesson-card">
          <div className="text-sm font-medium text-white">What is DeFi?</div>
          <div className="text-xs text-gray-400">15 min lesson</div>
        </div>
        <div className="lesson-card">
          <div className="text-sm font-medium text-white">NFT Explained</div>
          <div className="text-xs text-gray-400">20 min lesson</div>
        </div>
      </div>

      <div className="wallet-section">
        <div className="text-sm text-gray-300 mb-2">Mock Wallet (Testnet)</div>
        <div className="wallet-balance">0.05 ETH</div>
      </div>

      <div className="nft-badges">
        <div className="text-sm text-gray-300 mb-2">NFT Badges Earned</div>
        <div className="badge-grid">
          <div className="nft-badge">🏆</div>
          <div className="nft-badge">🎯</div>
          <div className="nft-badge">💎</div>
        </div>
      </div>
    </div>
  );

  const renderProfileScreen = () => (
    <div className="screen-container">
      <div className="profile-header">
        <div className="avatar">R</div>
        <div className="ml-3">
          <div className="text-lg font-semibold text-white">Ritika_Trader_21</div>
          <div className="text-sm text-electric-blue">Finance Ninja - Level 5</div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="text-lg font-bold text-white">12 🔥</div>
          <div className="text-xs text-gray-400">Day Streak</div>
        </div>
        <div className="stat-card">
          <div className="text-lg font-bold text-white">2,480</div>
          <div className="text-xs text-gray-400">XP This Week</div>
        </div>
      </div>

      <div className="achievements">
        <div className="text-sm text-gray-300 mb-2">Achievements</div>
        <div className="achievement-bar">
          <div className="text-xs text-white">Savings Master</div>
          <div className="progress-bar small">
            <div className="progress-fill" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="achievement-bar">
          <div className="text-xs text-white">Web3 Explorer</div>
          <div className="progress-bar small">
            <div className="progress-fill" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>

      <div className="nft-collection">
        <div className="text-sm text-gray-300 mb-2">NFT Collection</div>
        <div className="badge-grid">
          <div className="nft-badge large">🏆</div>
          <div className="nft-badge large">🎯</div>
          <div className="nft-badge large">💎</div>
        </div>
      </div>
    </div>
  );

  const screens = {
    home: renderHomeScreen,
    track: renderTrackScreen,
    feed: renderFeedScreen,
    web3: renderWeb3Screen,
    profile: renderProfileScreen,
  };

  return (
    <div className="screen-transition">
      {screens[activeTab as keyof typeof screens]()}
    </div>
  );
};

export default AppScreens;
