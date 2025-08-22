import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">AI-Powered</span>
              <br />
              Productivity Sentinel
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your workflow with intelligent automation, smart insights, and seamless integration across all your favorite tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Dashboard Preview */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-800 mb-2">Smart Analytics</h3>
                <p className="text-sm text-gray-600">Real-time insights into your productivity patterns</p>
                <div className="mt-4 bg-emerald-500 h-2 rounded-full"></div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-gray-800 mb-2">AI Assistant</h3>
                <p className="text-sm text-gray-600">Intelligent automation that learns your preferences</p>
                <div className="mt-4 bg-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🔗</div>
                <h3 className="font-semibold text-gray-800 mb-2">Integrations</h3>
                <p className="text-sm text-gray-600">Connect with 500+ apps seamlessly</p>
                <div className="mt-4 bg-purple-500 h-2 rounded-full w-5/6"></div>
              </div>
            </div>
            
            {/* Mini Chart */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Productivity Overview</h4>
              <div className="flex items-end space-x-2 h-20">
                {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                  <div
                    key={index}
                    className="bg-emerald-500 rounded-t flex-1 transition-all duration-500 hover:bg-emerald-600"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
}