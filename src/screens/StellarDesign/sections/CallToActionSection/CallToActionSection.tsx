import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  const features = [
    {
      icon: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop",
      title: "Precision Analytics",
      description: "Track progress, time, and performance.",
    },
    {
      icon: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop",
      title: "Smarter Tasks",
      description:
        "Prioritise intelligently with AI-driven task management that adapts to your workflow.",
    },
    {
      icon: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop",
      title: "Chat Bots",
      description:
        "Sentinel can schedule and organise your events and book meetings",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-purple-50/5 to-white py-16 lg:py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 lg:w-144 lg:h-144 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full blur-3xl opacity-1 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 lg:w-160 lg:h-160 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full blur-3xl opacity-1 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-[1072px] px-4 lg:px-8">
        <div className="flex flex-col items-center mb-16 lg:mb-24 z-10 relative">
          <Badge
            variant="secondary"
            className="mb-6 lg:mb-8 bg-white/80 backdrop-blur-sm text-purple-600 [font-family:'Inter',Helvetica] font-semibold text-sm px-4 py-2 rounded-full border border-purple-200/50 shadow-lg tracking-wide uppercase"
          >
            Powerful Features
          </Badge>

          <div className="text-center mb-6 lg:mb-8">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-4xl lg:text-6xl tracking-tight leading-tight mb-4">
              Our product has
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4">
              <span className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-4xl lg:text-6xl tracking-tight leading-tight">
                these big
              </span>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full shadow-2xl border border-white/20 h-[70px] lg:h-[100px] px-6 lg:px-8 transform hover:scale-105 transition-all duration-300">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl lg:text-6xl tracking-tight leading-tight">
                  features
                </span>
              </Badge>
            </div>
          </div>
        </div>

        <div className="relative mb-16 lg:mb-24 z-10">
          <img
            className="w-full max-w-[1000px] h-[300px] lg:h-[500px] object-cover rounded-[2.5rem] shadow-2xl border border-white/20"
            alt="Dashboard Analytics Interface"
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=324&fit=crop"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 z-10 relative">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-transparent border-none shadow-none"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <img
                    className="w-12 h-12 flex-shrink-0 rounded-xl shadow-md"
                    alt={`${feature.title} icon`}
                    src={feature.icon}
                  />
                  <div className="flex-1">
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-xl lg:text-2xl tracking-tight leading-tight mb-3">
                      {feature.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-base lg:text-lg leading-relaxed">
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
