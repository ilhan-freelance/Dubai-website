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
    <section className="py-14 bg-[#A65B6F] text-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side */}
        <div className="space-y-1 text-center md:text-left">
          <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#F7ECEE] block leading-none">
            Get on the list
          </span>
          <p className="text-xs sm:text-sm text-white/90 font-sans font-normal tracking-wide">
            Stay in the know about new offerings, venue unveilings, and planning tips.
          </p>
        </div>

        {/* Right Side Input Form */}
        <div className="w-full md:w-auto min-w-[320px] sm:min-w-[420px]">
          {subscribed ? (
            <div className="bg-white/20 backdrop-blur-md px-6 py-3.5 rounded-full text-center text-xs font-sans font-semibold tracking-wider text-white border border-white/40">
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
                className="w-full pl-6 pr-36 py-3.5 bg-white text-[#2A2226] rounded-full text-xs font-sans font-normal placeholder-[#2A2226]/50 focus:outline-none shadow-md"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-6 py-2.5 bg-[#7A8864] hover:bg-[#6B7956] text-white rounded-full transition-colors text-xs font-sans font-semibold uppercase tracking-wider cursor-pointer shadow-sm"
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


