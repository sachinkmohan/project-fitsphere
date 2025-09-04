import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {t.testimonials.stats.users.split(' ')[0]}
            </div>
            <div className="text-gray-600 font-medium">
              {t.testimonials.stats.users.split(' ').slice(1).join(' ')}
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {t.testimonials.stats.workouts.split(' ')[0]}
            </div>
            <div className="text-gray-600 font-medium">
              {t.testimonials.stats.workouts.split(' ').slice(1).join(' ')}
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              {t.testimonials.stats.trainers.split(' ')[0]}
            </div>
            <div className="text-gray-600 font-medium">
              {t.testimonials.stats.trainers.split(' ').slice(1).join(' ')}
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              {t.testimonials.stats.accuracy.split(' ')[0]}
            </div>
            <div className="text-gray-600 font-medium">
              {t.testimonials.stats.accuracy.split(' ').slice(1).join(' ')}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-500 mb-4 opacity-50" />
              
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  index === 0 ? 'from-blue-400 to-purple-500' :
                  index === 1 ? 'from-purple-400 to-pink-500' :
                  'from-green-400 to-emerald-500'
                } rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
            <div className="bg-white px-8 py-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Join Our Growing Community
              </h3>
              <p className="text-gray-600 mb-4">
                Start your fitness transformation today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Download App
                </button>
                <button className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;