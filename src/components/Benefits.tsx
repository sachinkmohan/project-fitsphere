import React from 'react';
import { Shield, Target, Heart, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const iconMap = [Shield, Target, Heart, Star];

  return (
    <section id="benefits" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {t.benefits.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.benefits.items.map((benefit, index) => {
            const Icon = iconMap[index];
            const gradients = [
              "from-blue-500 to-cyan-500",
              "from-purple-500 to-pink-500", 
              "from-green-500 to-emerald-500",
              "from-orange-500 to-red-500"
            ];
            
            return (
              <div 
                key={index}
                className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl">
            <div className="bg-white px-8 py-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Ready to Transform Your Fitness?
              </h3>
              <p className="text-gray-600 mb-4">
                Join thousands who've already improved their form and results
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                {t.hero.ctaPrimary}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;