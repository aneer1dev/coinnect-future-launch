
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: '💰',
      title: 'Finance Tracking',
      subtitle: 'Master your money with gamified budgeting',
      description: 'Track expenses, set goals, and watch your financial health improve with our intuitive and gamified approach to personal finance.',
      color: 'from-electric-blue to-blue-600',
      delay: 'delay-100'
    },
    {
      icon: '🎓',
      title: 'Web3 Education',
      subtitle: 'Learn crypto without the risk - 100% testnet',
      description: 'Explore DeFi, NFTs, and crypto trading in a completely safe environment. No real money at risk, just pure learning.',
      color: 'from-neon-green to-green-500',
      delay: 'delay-200'
    },
    {
      icon: '🤝',
      title: 'Social Learning',
      subtitle: 'Share wisdom, earn XP, build streaks',
      description: 'Learn from peers, share insights, and build learning streaks. Turn financial education into a social experience.',
      color: 'from-deep-purple to-purple-600',
      delay: 'delay-300'
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-white mb-6 animate-slide-up">
            Three Pillars of <span className="gradient-text">Financial Growth</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up delay-100">
            We've reimagined how Gen Z learns about money. Combining gamification, 
            community, and real-world application in one powerful platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass-card group hover:scale-105 transition-all duration-500 animate-slide-up ${feature.delay}`}
            >
              {/* Feature Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-electric-blue font-semibold text-sm uppercase tracking-wide">
                  {feature.subtitle}
                </p>
              </div>

              {/* Feature Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Feature Visual */}
              <div className="glass border border-gray-700 rounded-lg p-4 mb-6">
                {index === 0 && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Monthly Budget</span>
                      <span className="text-neon-green font-semibold">75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-electric-blue to-neon-green h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>$1,800 used</span>
                      <span>$2,400 total</span>
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-coinnect-amber rounded-lg flex items-center justify-center text-xs font-bold">
                          🏆
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold">DeFi Master</p>
                          <p className="text-gray-400 text-xs">Completed course</p>
                        </div>
                      </div>
                      <span className="text-neon-green text-sm">+500 XP</span>
                    </div>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-6 h-6 bg-electric-blue rounded border-2 border-gray-600"></div>
                      ))}
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-neon-green rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">Sarah shared: "Best savings tip ever!"</p>
                        <p className="text-gray-400 text-xs">2 min ago • 12 likes</p>
                      </div>
                    </div>
                    <div className="flex space-x-4 text-center">
                      <div>
                        <p className="text-coinnect-amber font-bold">127</p>
                        <p className="text-gray-400 text-xs">Day Streak</p>
                      </div>
                      <div>
                        <p className="text-neon-green font-bold">2.4k</p>
                        <p className="text-gray-400 text-xs">Total XP</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <button className="w-full glass border border-electric-blue/30 text-electric-blue font-semibold py-3 rounded-lg hover:bg-electric-blue/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
