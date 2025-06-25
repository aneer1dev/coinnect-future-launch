
import React from 'react';
import AppPreview from './AppPreview';

const AppPreviewSection = () => {
  return (
    <section id="app-preview" className="py-20 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-white mb-6">
            Experience Coinnect
            <span className="block gradient-text">In Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our interactive app preview. Tap through different sections 
            to see how Coinnect makes finance tracking addictive and educational.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Interactive iPhone Mockup */}
          <div className="flex-1 flex justify-center">
            <AppPreview className="interactive-demo" />
          </div>

          {/* Feature Highlights */}
          <div className="flex-1 space-y-8">
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Finance Hub</h3>
                  <p className="text-sm text-gray-400">Your financial overview at a glance</p>
                </div>
              </div>
              <p className="text-gray-300">
                See your monthly budget, recent transactions, and XP progress all in one place. 
                Level up your financial journey with every smart decision.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Smart Tracking</h3>
                  <p className="text-sm text-gray-400">Effortless expense logging</p>
                </div>
              </div>
              <p className="text-gray-300">
                Quick categorization, intelligent insights, and gamified goals 
                make tracking your expenses feel like playing a game.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-deep-purple/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Web3 Learning</h3>
                  <p className="text-sm text-gray-400">Risk-free crypto education</p>
                </div>
              </div>
              <p className="text-gray-300">
                Learn blockchain, DeFi, and NFTs with zero financial risk. 
                Earn badges and build real Web3 knowledge with testnet practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
