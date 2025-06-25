
import React from 'react';

interface AppScreensProps {
  activeTab: string;
}

const AppScreens = ({ activeTab }: AppScreensProps) => {
  const renderHomeScreen = () => (
    <div className="screen-container">
      <div className="screen-header">
        <h2 className="text-lg font-semibold text-white">Good morning, Alex! 👋</h2>
      </div>
      
      <div className="balance-card">
        <div className="text-2xl font-bold text-white">₹12,450</div>
        <div className="text-sm text-gray-400">remaining this month</div>
      </div>

      <div className="quick-actions">
        <button className="action-btn">Add Expense</button>
        <button className="action-btn">View Goals</button>
      </div>

      <div className="transactions-list">
        <h3 className="text-sm font-medium text-gray-300 mb-2">Recent Transactions</h3>
        <div className="transaction-item">
          <span className="emoji">🍕</span>
          <div className="flex-1">
            <div className="text-sm text-white">Pizza Palace</div>
            <div className="text-xs text-gray-400">Food & Dining</div>
          </div>
          <div className="text-sm text-red-400">-₹340</div>
        </div>
        <div className="transaction-item">
          <span className="emoji">🚗</span>
          <div className="flex-1">
            <div className="text-sm text-white">Uber Ride</div>
            <div className="text-xs text-gray-400">Transport</div>
          </div>
          <div className="text-sm text-red-400">-₹180</div>
        </div>
      </div>

      <div className="xp-progress">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-300">Level 3</span>
          <span className="text-electric-blue">750/1000 XP</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '75%' }}></div>
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
        <div className="avatar">A</div>
        <div className="ml-3">
          <div className="text-lg font-semibold text-white">Alex_Trader_21</div>
          <div className="text-sm text-electric-blue">Finance Ninja - Level 3</div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="text-lg font-bold text-white">7 🔥</div>
          <div className="text-xs text-gray-400">Day Streak</div>
        </div>
        <div className="stat-card">
          <div className="text-lg font-bold text-white">450</div>
          <div className="text-xs text-gray-400">XP This Week</div>
        </div>
      </div>

      <div className="achievements">
        <div className="text-sm text-gray-300 mb-2">Achievements</div>
        <div className="achievement-bar">
          <div className="text-xs text-white">Savings Master</div>
          <div className="progress-bar small">
            <div className="progress-fill" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="achievement-bar">
          <div className="text-xs text-white">Web3 Explorer</div>
          <div className="progress-bar small">
            <div className="progress-fill" style={{ width: '45%' }}></div>
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
