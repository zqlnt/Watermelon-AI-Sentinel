import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Mail, CheckSquare, Calendar, Bell, Users, MessageCircle, Clock, Star } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-purple-50/5 to-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="relative z-50 w-full px-4 lg:px-8 py-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.postimg.cc/kDfQs7MK/logo.png" 
                alt="Watermelon AI Sentinel Logo" 
                className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
              />
              <div className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-xl lg:text-2xl">
                Watermelon AI - Sentinel
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="[font-family:'Inter',Helvetica] font-medium text-gray-600 hover:text-purple-600 transition-colors">Features</a>
              <a href="#" className="[font-family:'Inter',Helvetica] font-medium text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
              <a href="#" className="[font-family:'Inter',Helvetica] font-medium text-gray-600 hover:text-purple-600 transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Glowing blurred orbs - kept in background with very low opacity */}
      
      {/* Glowing blurred orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 lg:w-144 lg:h-144 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 lg:w-160 lg:h-160 bg-gradient-to-br from-pink-200 to-red-300 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 lg:w-192 lg:h-192 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Email Icons */}
        <div className="absolute top-24 left-2 md:top-40 md:left-32 animate-pulse" style={{ animationDelay: '0s' }}>
          <div className="w-6 h-6 md:w-16 md:h-16 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50">
            <Mail className="w-3 h-3 md:w-8 md:h-8 text-red-500" />
          </div>
        </div>
        
        <div className="absolute top-32 right-2 md:top-80 md:right-24 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="w-5 h-5 md:w-14 md:h-14 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg flex items-center justify-center border border-white/50">
            <Mail className="w-2.5 h-2.5 md:w-7 md:h-7 text-red-400" />
          </div>
        </div>

        {/* To-Do Icons */}
        <div className="absolute top-20 right-8 md:top-60 md:right-40 animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 md:w-16 md:h-16 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50">
            <CheckSquare className="w-3 h-3 md:w-8 md:h-8 text-green-500" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-2 md:bottom-60 md:left-24 animate-pulse" style={{ animationDelay: '3s' }}>
          <div className="w-5 h-5 md:w-14 md:h-14 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg flex items-center justify-center border border-white/50">
            <CheckSquare className="w-2.5 h-2.5 md:w-7 md:h-7 text-green-400" />
          </div>
        </div>

        {/* Calendar Icons */}
        <div className="absolute top-40 left-6 md:top-96 md:left-16 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <div className="w-5 h-5 md:w-15 md:h-15 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg flex items-center justify-center border border-white/50">
            <Calendar className="w-2.5 h-2.5 md:w-7 md:h-7 text-purple-500" />
          </div>
        </div>
        
        <div className="absolute bottom-24 right-6 md:bottom-40 md:right-32 animate-pulse" style={{ animationDelay: '4s' }}>
          <div className="w-6 h-6 md:w-16 md:h-16 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-2xl shadow-lg flex items-center justify-center border border-white/50">
            <Calendar className="w-3 h-3 md:w-8 md:h-8 text-purple-400" />
          </div>
        </div>

        {/* Additional Productivity Icons */}
        <div className="absolute top-48 right-12 md:top-[28rem] md:right-16 animate-pulse" style={{ animationDelay: '2.5s' }}>
          <div className="w-5 h-5 md:w-14 md:h-14 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg flex items-center justify-center border border-white/50">
            <Bell className="w-2.5 h-2.5 md:w-7 md:h-7 text-indigo-500" />
          </div>
        </div>
        
        <div className="absolute bottom-40 left-8 md:bottom-96 md:left-40 animate-pulse" style={{ animationDelay: '3.5s' }}>
          <div className="w-5 h-5 md:w-15 md:h-15 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg flex items-center justify-center border border-white/50">
            <MessageCircle className="w-2.5 h-2.5 md:w-7 md:h-7 text-green-600" />
          </div>
        </div>
        
        <div className="absolute top-56 left-12 md:top-[24rem] md:left-64 animate-pulse" style={{ animationDelay: '4.5s' }}>
          <div className="w-4 h-4 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center border border-white/50">
            <Clock className="w-2 h-2 md:w-6 md:h-6 text-red-600" />
          </div>
        </div>
        
        <div className="absolute bottom-48 right-10 md:bottom-80 md:right-64 animate-pulse" style={{ animationDelay: '5s' }}>
          <div className="w-5 h-5 md:w-14 md:h-14 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg flex items-center justify-center border border-white/50">
            <Star className="w-2.5 h-2.5 md:w-7 md:h-7 text-yellow-500" />
          </div>
        </div>
        
        {/* Additional mobile-friendly icons around text */}
        <div className="absolute top-36 left-10 md:hidden animate-pulse" style={{ animationDelay: '6s' }}>
          <div className="w-4 h-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center border border-white/50">
            <Users className="w-2 h-2 text-purple-500" />
          </div>
        </div>
        
        <div className="absolute top-44 right-4 md:hidden animate-pulse" style={{ animationDelay: '7s' }}>
          <div className="w-5 h-5 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center border border-white/50">
            <Bell className="w-2.5 h-2.5 text-red-400" />
          </div>
        </div>
      </div>
      
      <div className="relative z-30 flex items-center justify-center min-h-[calc(100vh-120px)] px-6 py-12">
        <div className="text-center max-w-4xl mx-auto space-y-6 lg:space-y-8">
          <Badge
            variant="secondary"
            className="bg-white/80 backdrop-blur-sm text-purple-600 text-sm font-semibold px-4 py-2 rounded-full border border-purple-200/50 shadow-lg tracking-wide uppercase [font-family:'Inter',Helvetica]"
          >
            AI-Powered Assistant
          </Badge>

          <div className="space-y-4 lg:space-y-6">
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-4xl lg:text-7xl tracking-tight leading-tight">
              Save time & Organise
            </h1>

            <div className="[font-family:'Inter',Helvetica] font-bold text-4xl lg:text-6xl tracking-tight leading-tight">
              <span className="text-gray-900">better with </span>
              <Badge className="inline-flex items-center justify-center h-[60px] lg:h-[100px] px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-300">
                <span className="text-2xl lg:text-6xl [font-family:'Inter',Helvetica] font-bold text-white tracking-tight leading-tight">
                  Sentinel
                </span>
              </Badge>
            </div>
          </div>

          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto px-4">
            Your all-in-one productivity assistant that simplifies scheduling, notifications, and communication, powered by AI.
          </p>
        </div>
      </div>
    </section>
  );
};