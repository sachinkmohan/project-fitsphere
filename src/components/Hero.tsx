import React from 'react';
import { Activity, Play, Smartphone, Users, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-orange-400 to-pink-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
              <br />
              <span className="text-gray-800 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                {t.hero.subtitle}
              </span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <span>{t.hero.ctaPrimary}</span>
                  <Zap className="w-5 h-5 group-hover:animate-pulse" />
                </span>
              </button>
              
              <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
                <span className="flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                  <span>{t.hero.ctaSecondary}</span>
                </span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">50K+</div>
                <div className="text-sm text-gray-600">Users</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">98%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Smartphone className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">2M+</div>
                <div className="text-sm text-gray-600">Workouts</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                  <Activity className="w-16 h-16 text-white" />
                </div>
              </div>
              
              {/* Floating Feature Pills */}
              <div className="absolute -top-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg border">
                <span className="text-sm font-semibold text-gray-700">AI Powered</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border">
                <span className="text-sm font-semibold text-gray-700">Real-time</span>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border">
                <span className="text-sm font-semibold text-gray-700">Social</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;