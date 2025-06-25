
import React, { useState } from 'react';
import { Check, Mail } from 'lucide-react';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-24 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 animate-slide-up">
            <h2 className="text-section font-bold text-white mb-6">
              Be Among the First to <span className="gradient-text">Coinnect</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 1,000+ Gen Z users waiting to revolutionize their financial journey
            </p>
          </div>

          {/* Waitlist Form */}
          <div className="glass-card max-w-2xl mx-auto animate-slide-up delay-200">
            {!isSubmitted ? (
              <>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="w-full glow-button py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Joining...</span>
                      </div>
                    ) : (
                      'Join the Waitlist'
                    )}
                  </button>
                </form>

                {/* Benefits */}
                <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
                  {[
                    '✨ Early access privileges',
                    '🎁 Exclusive launch bonuses',
                    '📢 Product updates & beta testing'
                  ].map((benefit, index) => (
                    <div key={index} className="text-gray-300 p-3 border border-gray-700 rounded-lg">
                      {benefit}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-rich-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">You're In!</h3>
                <p className="text-gray-300 mb-6">
                  Welcome to the Coinnect family! We'll keep you updated on our progress 
                  and let you know as soon as we're ready to launch.
                </p>
                <div className="glass border border-neon-green/30 rounded-lg p-4">
                  <p className="text-neon-green font-semibold">
                    🎉 You're #1,247 on the waitlist
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="mt-12 animate-slide-up delay-400">
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">1,000+</div>
                <div className="text-gray-400">Users waiting</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-400">Universities represented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                <div className="text-gray-400">Excitement rate</div>
              </div>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-sm text-gray-400 mt-8 animate-fade-in delay-500">
            We respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
