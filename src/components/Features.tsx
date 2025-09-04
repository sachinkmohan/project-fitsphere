import React from 'react';
import { Brain, Users, DollarSign, Camera, Smartphone, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t.features.aiPose.title,
      description: t.features.aiPose.description,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Users,
      title: t.features.social.title,
      description: t.features.social.description,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: DollarSign,
      title: t.features.monetization.title,
      description: t.features.monetization.description,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
            <Camera className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="font-semibold text-gray-800">Computer Vision</h4>
              <p className="text-sm text-gray-600">Advanced pose detection</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
            <Smartphone className="w-8 h-8 text-purple-600" />
            <div>
              <h4 className="font-semibold text-gray-800">Mobile First</h4>
              <p className="text-sm text-gray-600">Works on any device</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl sm:col-span-2 lg:col-span-1">
            <TrendingUp className="w-8 h-8 text-orange-600" />
            <div>
              <h4 className="font-semibold text-gray-800">Progress Tracking</h4>
              <p className="text-sm text-gray-600">Data-driven insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;