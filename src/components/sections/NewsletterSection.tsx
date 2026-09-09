import React, { useState } from 'react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-14 bg-[#1F382B] text-white px-6 border-t border-[#C9A96E]/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side */}
        <div className="space-y-1 text-center md:text-left">
          <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#E8D4A8] block leading-none">
            Get on the list
          </span>
          <p className="text-xs sm:text-sm text-white/90 font-sans font-normal tracking-wide">
            Stay in the know about new offerings, venue unveilings, and planning tips.
          </p>
        </div>

        {/* Right Side Input Form */}
        <div className="w-full md:w-auto min-w-[320px] sm:min-w-[420px]">
          {subscribed ? (
            <div className="bg-white/10 backdrop-blur-md px-6 py-3.5 rounded-full text-center text-xs font-sans font-semibold tracking-wider text-[#E8D4A8] border border-[#C9A96E]/40">
              ✓ Thank you for subscribing to Love Details Atelier!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-6 pr-36 py-3.5 bg-white text-[#212529] rounded-full text-xs font-sans font-normal placeholder-gray-400 focus:outline-none shadow-md"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C9A96E] hover:from-[#C9A96E] hover:to-[#9E7B45] text-[#111] rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-wider cursor-pointer shadow-sm hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
