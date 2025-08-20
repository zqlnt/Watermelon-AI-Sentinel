import React from "react";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-red-50/5 to-white py-16 lg:py-24 overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 left-20 w-56 h-56 lg:w-112 lg:h-112 bg-gradient-to-br from-red-200 to-pink-300 rounded-full blur-3xl opacity-1 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-20 w-64 h-64 lg:w-128 lg:h-128 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full blur-3xl opacity-1 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 lg:px-8 gap-8 lg:gap-16">
        <div className="relative flex-shrink-0 order-2 lg:order-1 z-10">
          <img
            className="w-[320px] lg:w-[500px] h-auto object-contain rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl border border-white/20 crisp-edges"
            alt="Email Management Interface"
            src="https://i.postimg.cc/S2QXYzM5/Chat-GPT-Image-Aug-20-2025-01-59-35-AM.png"
          />
        </div>

        <div className="flex-1 max-w-[550px] lg:ml-16 order-1 lg:order-2 text-center lg:text-left z-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-red-500 text-sm lg:text-base tracking-wide uppercase">
                Get Started
              </div>

              <h2 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-3xl lg:text-5xl tracking-tight leading-tight">
                Start Your Sentinel Journey Today
              </h2>
            </div>

            <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg lg:text-xl leading-relaxed">
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