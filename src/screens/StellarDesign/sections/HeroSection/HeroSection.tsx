import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Mail, CheckSquare, Calendar, Bell, Users, MessageCircle, Clock, Star } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-purple-50/5 to-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="relative z-50 w-full px-3 lg:px-8 py-3 lg:py-6 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 lg:gap-3">
              <img 
                src="https://i.postimg.cc/kDfQs7MK/logo.png" 
                alt="Watermelon AI Sentinel Logo" 
                className="w-6 h-6 lg:w-10 lg:h-10 object-contain drop-shadow-sm"
              />
              <div className="[font-family:'Inter',Helvetica] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-base lg:text-2xl">
                Watermelon AI - Sentinel
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Glowing blurred orbs - kept in background with very low opacity */}
      
      {/* Glowing blurred orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 lg:w-144 lg:h-144 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 lg:w-160 lg:h-160 bg-gradient-to-br from-pink-100 to-rose-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 lg:w-192 lg:h-192 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Email Icons */}
        <div className="absolute top-24 left-2 md:top-40 md:left-32 animate-pulse" style={{ animationDelay: '0s' }}>
          <div className="w-6 h-6 md:w-16 md:h-16 bg-white/90 backdrop-blur-md rounded-xl md:rounded-3xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <Mail className="w-3 h-3 md:w-8 md:h-8 text-red-500" />
          </div>
        </div>
        
        <div className="absolute top-32 right-2 md:top-80 md:right-24 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="w-5 h-5 md:w-14 md:h-14 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <Mail className="w-2.5 h-2.5 md:w-7 md:h-7 text-red-400" />
          </div>
        </div>

        {/* To-Do Icons */}
        <div className="absolute top-20 right-8 md:top-60 md:right-40 animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 md:w-16 md:h-16 bg-white/90 backdrop-blur-md rounded-xl md:rounded-3xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <CheckSquare className="w-3 h-3 md:w-8 md:h-8 text-green-500" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-2 md:bottom-60 md:left-24 animate-pulse" style={{ animationDelay: '3s' }}>
          <div className="w-5 h-5 md:w-14 md:h-14 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <CheckSquare className="w-2.5 h-2.5 md:w-7 md:h-7 text-green-400" />
          </div>
        </div>

        {/* Calendar Icons */}
        <div className="absolute top-40 left-6 md:top-96 md:left-16 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <div className="w-5 h-5 md:w-15 md:h-15 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <Calendar className="w-2.5 h-2.5 md:w-7 md:h-7 text-purple-500" />
          </div>
        </div>
        
        <div className="absolute bottom-24 right-6 md:bottom-40 md:right-32 animate-pulse" style={{ animationDelay: '4s' }}>
          <div className="w-6 h-6 md:w-16 md:h-16 bg-white/90 backdrop-blur-md rounded-xl md:rounded-3xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <Calendar className="w-3 h-3 md:w-8 md:h-8 text-purple-400" />
          </div>
        </div>

        {/* Additional Productivity Icons */}
        <div className="absolute top-48 right-12 md:top-[28rem] md:right-16 animate-pulse" style={{ animationDelay: '2.5s' }}>
          <div className="w-5 h-5 md:w-14 md:h-14 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <Bell className="w-2.5 h-2.5 md:w-7 md:h-7 text-indigo-500" />
          </div>
        </div>
        
        <div className="absolute bottom-40 left-8 md:bottom-96 md:left-40 animate-pulse" style={{ animationDelay: '3.5s' }}>
          <div className="w-5 h-5 md:w-15 md:h-15 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <MessageCircle className="w-2.5 h-2.5 md:w-7 md:h-7 text-green-600" />
          </div>
        </div>
        
        <div className="absolute top-56 left-12 md:top-[24rem] md:left-64 animate-pulse" style={{ animationDelay: '4.5s' }}>
          <div className="w-4 h-4 md:w-12 md:h-12 bg-white/90 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <Clock className="w-2 h-2 md:w-6 md:h-6 text-red-600" />
          </div>
        </div>
        
        <div className="absolute bottom-48 right-10 md:bottom-80 md:right-64 animate-pulse" style={{ animationDelay: '5s' }}>
          <div className="w-5 h-5 md:w-14 md:h-14 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <Star className="w-2.5 h-2.5 md:w-7 md:h-7 text-yellow-500" />
          </div>
        </div>
        
        {/* Additional mobile-friendly icons around text */}
        <div className="absolute top-36 left-10 md:hidden animate-pulse" style={{ animationDelay: '6s' }}>
          <div className="w-4 h-4 bg-white/90 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <Users className="w-2 h-2 text-purple-500" />
          </div>
        </div>
        
        <div className="absolute top-44 right-4 md:hidden animate-pulse" style={{ animationDelay: '7s' }}>
          <div className="w-5 h-5 bg-white/90 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-center border border-white/60 hover:scale-110 transition-transform duration-300">
            <Bell className="w-2.5 h-2.5 text-red-400" />
          </div>
        </div>
      </div>
      
      <div className="relative z-30 flex items-center justify-center min-h-[calc(100vh-120px)] px-6 py-12">
        <div className="text-center max-w-4xl mx-auto space-y-6 lg:space-y-8 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <Badge
            variant="secondary"
            className="bg-white/90 backdrop-blur-md text-purple-600 text-sm font-semibold px-6 py-3 rounded-full border border-purple-200/60 shadow-xl tracking-wide uppercase [font-family:'Inter',Helvetica] hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in opacity-0" 
            style={{ animationDelay: '0.4s' }}
          >
            Watermelon AI
          </Badge>

          <div className="space-y-4 lg:space-y-6 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-2 lg:space-y-4">
              {/* Mobile: Stack each part on separate lines, Desktop: Keep original layout */}
              <div className="block lg:hidden">
                <h1 className="[font-family:'Inter',Helvetica] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-4xl tracking-tight leading-tight drop-shadow-sm hover:scale-105 transition-transform duration-700 text-center">
                  Save time &
                </h1>
                <h1 className="[font-family:'Inter',Helvetica] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-4xl tracking-tight leading-tight drop-shadow-sm hover:scale-105 transition-transform duration-700 text-center mt-2">
                  Organise better with
                </h1>
                <div className="flex justify-center mt-4">
                  <Badge className="inline-flex items-center justify-center h-[60px] px-6 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-full shadow-2xl border border-white/30 transform hover:scale-110 hover:shadow-3xl transition-all duration-500 hover:rotate-1">
                    <span className="text-2xl [font-family:'Inter',Helvetica] font-bold text-white tracking-tight leading-tight">
                      Sentinel
                    </span>
                  </Badge>
                </div>
              </div>

              {/* Desktop: Original layout */}
              <div className="hidden lg:block">
                <h1 className="[font-family:'Inter',Helvetica] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-7xl tracking-tight leading-tight drop-shadow-sm hover:scale-105 transition-transform duration-700">
                  Save time & Organise
                </h1>
                <div className="[font-family:'Inter',Helvetica] font-bold text-6xl tracking-tight leading-tight mt-4">
                  <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-700 inline-block">better with </span>
                  <Badge className="inline-flex items-center justify-center h-[100px] px-8 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-full shadow-2xl border border-white/30 transform hover:scale-110 hover:shadow-3xl transition-all duration-500 hover:rotate-1">
                    <span className="text-6xl [font-family:'Inter',Helvetica] font-bold text-white tracking-tight leading-tight">
                      Sentinel
                    </span>
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto px-4 drop-shadow-sm animate-fade-up opacity-0 hover:text-gray-700 transition-colors duration-500" style={{ animationDelay: '0.8s' }}>
            Your all-in-one productivity assistant that simplifies scheduling, notifications, and communication, powered by AI.
          </p>
        </div>
      </div>
    </section>
  );
};