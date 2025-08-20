import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const IntegrationSection = (): JSX.Element => {
  const features = [
    {
      icon: "https://i.postimg.cc/gLnnNF4H/Chat-GPT-Image-Aug-20-2025-02-09-33-AM.png",
      title: "Smart Scheduling",
      description:
        "Syncs with your calendar, prioritises tasks, and prevents double-booking.",
    },
    {
      icon: "https://i.postimg.cc/gLnnNF4H/Chat-GPT-Image-Aug-20-2025-02-09-33-AM.png",
      title: "AI Reminders",
      description:
        "Get proactive nudges for upcoming meetings, deadlines, and follow-ups.",
    },
    {
      icon: "https://i.postimg.cc/gLnnNF4H/Chat-GPT-Image-Aug-20-2025-02-09-33-AM.png",
      title: "Unified Dashboard",
      description:
        "View tasks, reminders, schedules, and notifications in one clean UI.",
    },
    {
      icon: "https://i.postimg.cc/gLnnNF4H/Chat-GPT-Image-Aug-20-2025-02-09-33-AM.png",
      title: "Faster Routine",
      description:
        "Tailor the dashboard, notifications, and categories to fit your routine.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-green-50/5 to-white py-16 lg:py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-60 h-60 lg:w-120 lg:h-120 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-20 w-52 h-52 lg:w-104 lg:h-104 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '3.5s' }}></div>
      </div>
      
      <div className="max-w-[1072px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2 space-y-8 z-10 relative">
            <header className="space-y-6">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-emerald-600 text-sm lg:text-base tracking-wide uppercase text-center lg:text-left drop-shadow-sm">
                Our Key Features
              </div>
              <h2 className="[font-family:'Inter',Helvetica] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-3xl lg:text-5xl tracking-tight leading-tight max-w-[550px] text-center lg:text-left mx-auto lg:mx-0 drop-shadow-sm">
                Build a faster online routine
              </h2>
            </header>
          </div>

          <div className="lg:col-span-3 z-10 relative">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-xl bg-white/75 backdrop-blur-md rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/85 hover:scale-105 border border-white/40"
                >
                  <CardContent className="p-0 space-y-4 text-center lg:text-left">
                    <img
                      className="w-8 h-8 flex-shrink-0 mx-auto lg:mx-0 rounded-xl shadow-lg object-contain crisp-edges drop-shadow-sm"
                      alt="Feature icon"
                      src={feature.icon}
                    />
                    <div className="flex-1">
                      <h3 className="[font-family:'Inter',Helvetica] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-xl lg:text-2xl tracking-tight leading-tight mb-3 drop-shadow-sm">
                        {feature.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-base lg:text-lg leading-relaxed drop-shadow-sm">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
