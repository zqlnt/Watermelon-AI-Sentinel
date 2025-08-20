import React from "react";

export const FeaturesSection = (): JSX.Element => {
  const features = [
    "Smart scheduling with calendar integration",
    "Centralized dashboard for tasks, events, and contacts", 
    "AI-driven insights to optimise your workflow",
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-green-50/5 to-white py-16 lg:py-24 overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-48 h-48 lg:w-96 lg:h-96 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full blur-3xl opacity-1 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 lg:w-80 lg:h-80 bg-gradient-to-br from-red-200 to-pink-300 rounded-full blur-3xl opacity-1 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="[font-family:'Inter',Helvetica] font-semibold text-purple-600 text-sm lg:text-base tracking-wide uppercase">
                  Meet Sentinel
                </div>

                <h2 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-3xl lg:text-5xl tracking-tight leading-tight">
                  Provide Powerful Solutions at All Times
                </h2>
              </div>

              <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg lg:text-xl leading-relaxed">
                Stay on top of your day with real-time reminders, AI-powered
                task management, and seamless communication tools. Sentinel
                integrates everything you need into one intelligent assistant.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-7 h-7 flex-shrink-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-medium text-gray-800 text-base lg:text-lg leading-relaxed">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              className="w-full max-w-[600px] h-auto object-contain rounded-[2rem] shadow-2xl border border-white/20 mx-auto"
              alt="Task Management Dashboard"
              src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
