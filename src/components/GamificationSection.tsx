
import React from 'react';

const GamificationSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-white mb-6 animate-slide-up">
            Level Up Your <span className="gradient-text">Financial Game</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up delay-100">
            Transform learning into an adventure. Earn XP, unlock achievements, 
            and compete with friends while mastering your financial future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Progress Dashboard */}
          <div className="space-y-8 animate-slide-up delay-200">
            {/* XP Progress */}
            <div className="glass-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Your Progress</h3>
                <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm font-semibold">
                  Level 7
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Experience Points</span>
                  <span className="text-neon-green font-bold">2,847 / 3,200 XP</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-electric-blue via-neon-green to-coinnect-amber h-3 rounded-full" style={{ width: '89%' }}></div>
                </div>
                <p className="text-sm text-gray-400">353 XP until Level 8</p>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="glass-card">
              <h3 className="text-xl font-bold text-white mb-6">Recent Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: '🎯', name: 'Goal Setter', desc: 'Set 5 financial goals' },
                  { emoji: '📈', name: 'Trend Spotter', desc: 'Analyzed market data' },
                  { emoji: '🔥', name: 'Streak Master', desc: '30-day learning streak' },
                  { emoji: '💡', name: 'Wisdom Sharer', desc: 'Helped 10 community members' }
                ].map((achievement, index) => (
                  <div key={achievement.name} className="text-center p-4 border border-gray-700 rounded-lg hover:border-electric-blue/30 transition-colors duration-300">
                    <div className="text-3xl mb-2">{achievement.emoji}</div>
                    <h4 className="text-white font-semibold text-sm">{achievement.name}</h4>
                    <p className="text-gray-400 text-xs">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Streak Counter */}
            <div className="glass-card">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Learning Streak</h3>
                  <p className="text-gray-300">Keep it going!</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🔥</div>
                  <div className="text-2xl font-bold text-coinnect-amber">47</div>
                  <div className="text-sm text-gray-400">days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Leaderboard */}
          <div className="animate-slide-up delay-400">
            <div className="glass-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Community Leaderboard</h3>
                <span className="text-sm text-gray-400">This Week</span>
              </div>

              <div className="space-y-4">
                {[
                  { rank: 1, name: 'Alex Chen', xp: '3,247', avatar: '🏆', change: '+2' },
                  { rank: 2, name: 'Sarah M.', xp: '3,198', avatar: '🥈', change: '-1' },
                  { rank: 3, name: 'You', xp: '2,847', avatar: '🥉', change: '+5', isUser: true },
                  { rank: 4, name: 'Mike R.', xp: '2,651', avatar: '👤', change: '-2' },
                  { rank: 5, name: 'Emma L.', xp: '2,543', avatar: '👤', change: '0' }
                ].map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      user.isUser ? 'bg-electric-blue/10 border border-electric-blue/30' : 'hover:bg-glass-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{user.avatar}</span>
                      <div>
                        <p className={`font-semibold ${user.isUser ? 'text-electric-blue' : 'text-white'}`}>
                          #{user.rank} {user.name}
                        </p>
                        <p className="text-gray-400 text-sm">{user.xp} XP</p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-semibold ${
                      user.change.startsWith('+') ? 'text-neon-green bg-neon-green/10' :
                      user.change.startsWith('-') ? 'text-red-400 bg-red-400/10' :
                      'text-gray-400 bg-gray-400/10'
                    }`}>
                      {user.change}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <button className="w-full glass border border-neon-green/30 text-neon-green font-semibold py-3 rounded-lg hover:bg-neon-green/10 transition-all duration-300">
                  View Full Leaderboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
