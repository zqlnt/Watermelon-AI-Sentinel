import React from "react";

export const DashboardSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-red-50/5 to-white py-16 lg:py-24 px-4 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 left-32 w-64 h-64 lg:w-128 lg:h-128 bg-gradient-to-br from-red-200 to-pink-300 rounded-full blur-3xl opacity-1 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-32 w-56 h-56 lg:w-112 lg:h-112 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full blur-3xl opacity-1 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 lg:mb-16 z-10 relative">
          <div className="[font-family:'Inter',Helvetica] font-semibold text-red-500 text-sm lg:text-base tracking-wide uppercase mb-6 lg:mb-8">
            Our Primary Integrations
          </div>

          <div className="space-y-2">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-3xl lg:text-5xl tracking-tight leading-tight">
              Make productivity easier
            </h2>

            <div className="[font-family:'Inter',Helvetica] font-bold text-3xl lg:text-5xl tracking-tight leading-tight">
              <span className="text-gray-900">with </span>
              <span className="text-transparent bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text">
                our Integrations
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-12 lg:mb-16 z-10 relative">
          <img
            className="w-full max-w-[800px] h-auto object-contain rounded-[2.5rem] shadow-2xl border border-white/20 crisp-edges"
            alt="Email Integration Dashboard"
            src="https://i.postimg.cc/67f2Qhyn/Chat-GPT-Image-Aug-20-2025-02-04-58-AM.png"
          />
        </div>

        <div className="max-w-[700px] mx-auto text-center px-4 z-10 relative">
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg lg:text-xl leading-relaxed bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            Sentinel connects with the tools you already use—Google Calendar,
            Slack, Outlook, and more—so you can manage everything from one hub.
          </p>
        </div>
      </div>
    </section>
  );
};
