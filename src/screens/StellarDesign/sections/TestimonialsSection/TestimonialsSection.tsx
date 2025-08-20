import React from "react";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-red-50/5 to-white py-16 lg:py-24 overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 left-20 w-56 h-56 lg:w-112 lg:h-112 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-20 w-64 h-64 lg:w-128 lg:h-128 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 lg:px-8 gap-8 lg:gap-16">
        <div className="relative flex-shrink-0 order-2 lg:order-1 z-10 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <img
            className="w-[320px] lg:w-[500px] h-auto object-contain rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl border border-white/30 hover:scale-110 hover:shadow-3xl transition-all duration-700 hover:rotate-1"
            alt="Calendar Scheduling Interface"
            src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </div>

        <div className="flex-1 max-w-[550px] lg:ml-16 order-1 lg:order-2 text-center lg:text-left z-10 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-rose-500 text-sm lg:text-base tracking-wide uppercase drop-shadow-sm animate-fade-in opacity-0 hover:text-rose-600 transition-colors duration-500" style={{ animationDelay: '0.6s' }}>
                Get Started
              </div>

              <h2 className="[font-family:'Inter',Helvetica] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-3xl lg:text-5xl tracking-tight leading-tight drop-shadow-sm animate-fade-up opacity-0 hover:scale-105 transition-transform duration-700" style={{ animationDelay: '0.8s' }}>
                Start Your Sentinel Journey Today
              </h2>
            </div>

            <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg lg:text-xl leading-relaxed drop-shadow-sm animate-fade-up opacity-0 hover:text-gray-700 transition-colors duration-500" style={{ animationDelay: '1s' }}>
              Download Sentinel and experience effortless organisation. With
              powerful integrations and AI-driven productivity, your day runs
              smoother than ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};