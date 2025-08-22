import React from 'react';
import { Brain, BarChart3, Zap, Shield, Palette, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart AI Assistant',
    description: 'Advanced AI that learns your preferences and automates repetitive tasks with intelligent suggestions.',
    details: ['Natural language processing', 'Predictive task management', 'Contextual recommendations'],
    gradient: 'from-emerald-50 to-emerald-100',
    iconColor: 'text-emerald-600'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive insights into your productivity patterns with beautiful, actionable dashboards.',
    details: ['Real-time performance metrics', 'Trend analysis and forecasting', 'Custom reporting tools'],
    gradient: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: RefreshCw,
    title: 'Seamless Integration',
    description: 'Connect with 500+ apps and services to create a unified productivity ecosystem.',
    details: ['One-click app connections', 'Real-time data synchronization', 'Custom workflow automation'],
    gradient: 'from-purple-50 to-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and compliance certifications.',
    details: ['SOC 2 Type II certified', 'GDPR compliant', 'Advanced threat protection'],
    gradient: 'from-orange-50 to-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second response times and 99.9% uptime guarantee.',
    details: ['Global CDN network', 'Intelligent caching', 'Real-time synchronization'],
    gradient: 'from-yellow-50 to-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    icon: Palette,
    title: 'Customizable Interface',
    description: 'Personalize your workspace with themes, layouts, and widgets that match your style.',
    details: ['Drag-and-drop customization', 'Multiple theme options', 'Responsive design'],
    gradient: 'from-pink-50 to-pink-100',
    iconColor: 'text-pink-600'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools that will revolutionize your productivity and streamline your daily workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div className={`${feature.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}