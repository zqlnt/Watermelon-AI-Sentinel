import React from "react";

export const DashboardSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-red-50/5 to-white py-16 lg:py-24 px-4 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 left-32 w-64 h-64 lg:w-128 lg:h-128 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-32 w-56 h-56 lg:w-112 lg:h-112 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 lg:mb-16 z-10 relative animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="[font-family:'Inter',Helvetica] font-semibold text-rose-500 text-sm lg:text-base tracking-wide uppercase mb-6 lg:mb-8 drop-shadow-sm animate-fade-in opacity-0 hover:text-rose-600 transition-colors duration-500" style={{ animationDelay: '0.4s' }}>
            Our Primary Integrations
          </div>

          <div className="space-y-2">
            <h2 className="[font-family:'Inter',Helvetica] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-3xl lg:text-5xl tracking-tight leading-tight drop-shadow-sm animate-fade-up opacity-0 hover:scale-105 transition-transform duration-700" style={{ animationDelay: '0.6s' }}>
              Make productivity easier
            </h2>

            <div className="[font-family:'Inter',Helvetica] font-bold text-3xl lg:text-5xl tracking-tight leading-tight animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-700 inline-block">with </span>
              <span className="text-transparent bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text drop-shadow-sm hover:scale-105 transition-transform duration-700 inline-block">
                our Integrations
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-12 lg:mb-16 z-10 relative animate-fade-up opacity-0" style={{ animationDelay: '1s' }}>
          <img
            className="w-full max-w-[800px] h-auto object-contain rounded-[2.5rem] shadow-2xl border border-white/30 hover:scale-110 hover:shadow-3xl transition-all duration-700 hover:-rotate-1"
            alt="Organization Dashboard"
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </div>

        <div className="max-w-[700px] mx-auto text-center px-4 z-10 relative animate-fade-up opacity-0" style={{ animationDelay: '1.2s' }}>
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg lg:text-xl leading-relaxed bg-white/75 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/60 drop-shadow-sm hover:bg-white/85 hover:shadow-2xl hover:text-gray-700 transition-all duration-500">
            Sentinel connects with the tools you already use—Google Calendar,
            Slack, Outlook, and more—so you can manage everything from one hub.
          </p>
        </div>
      </div>
    </section>
  );
};
