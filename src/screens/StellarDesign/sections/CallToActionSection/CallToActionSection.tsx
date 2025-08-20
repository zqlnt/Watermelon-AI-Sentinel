import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  const features = [
    {
      icon: "https://i.postimg.cc/gLnnNF4H/Chat-GPT-Image-Aug-20-2025-02-09-33-AM.png",
      title: "Precision Analytics",
      description: "Track progress, time, and performance.",
    },
    {
      icon: "https://i.postimg.cc/gLnnNF4H/Chat-GPT-Image-Aug-20-2025-02-09-33-AM.png",
      title: "Smarter Tasks",
      description:
        "Prioritise intelligently with AI-driven task management that adapts to your workflow.",
    },
    {
      icon: "https://i.postimg.cc/gLnnNF4H/Chat-GPT-Image-Aug-20-2025-02-09-33-AM.png",
      title: "Chat Bots",
      description:
        "Sentinel can schedule and organise your events and book meetings",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-purple-50/5 to-white py-16 lg:py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 lg:w-144 lg:h-144 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 lg:w-160 lg:h-160 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-[1072px] px-4 lg:px-8">
        <div className="flex flex-col items-center mb-16 lg:mb-24 z-10 relative">
          <Badge
            variant="secondary"
            className="mb-6 lg:mb-8 bg-white/90 backdrop-blur-md text-purple-600 [font-family:'Inter',Helvetica] font-semibold text-sm px-6 py-3 rounded-full border border-purple-200/60 shadow-xl tracking-wide uppercase hover:scale-105 transition-transform duration-300"
          >
            Powerful Features
          </Badge>

          <div className="text-center mb-6 lg:mb-8">
            <h2 className="[font-family:'Inter',Helvetica] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-4xl lg:text-6xl tracking-tight leading-tight mb-4 drop-shadow-sm">
              Our product has
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4">
              <span className="[font-family:'Inter',Helvetica] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-4xl lg:text-6xl tracking-tight leading-tight drop-shadow-sm">
                these big
              </span>
              <Badge className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 rounded-full shadow-2xl border border-white/30 h-[70px] lg:h-[100px] px-6 lg:px-8 transform hover:scale-105 transition-all duration-300">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl lg:text-6xl tracking-tight leading-tight">
                  features
                </span>
              </Badge>
            </div>
          </div>
        </div>

        <div className="relative mb-16 lg:mb-24 z-10">
          <img
            className="w-full max-w-[800px] h-auto object-contain rounded-[2.5rem] shadow-2xl border border-white/30 mx-auto hover:scale-105 transition-transform duration-500"
            alt="Dashboard Analytics Interface"
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 z-10 relative">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-transparent border-none shadow-none hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center gap-4 p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-white/60 hover:bg-white/80 transition-all duration-300">
                  <img
                    className="w-8 h-8 flex-shrink-0 rounded-xl shadow-lg object-contain crisp-edges drop-shadow-sm"
                    alt={`${feature.title} icon`}
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
