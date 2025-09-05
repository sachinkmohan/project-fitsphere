import React from "react";
import { Play, Smartphone, Users, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-orange-400 to-pink-600 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
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
          <div className="relative h-full w-full">
            <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl w-full h-full overflow-hidden flex">
              {/* Wonder Image Placeholder - replace src with your image */}
              {/* Hero Visual */}
              <div className="relative h-full w-full">
                <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl w-full h-full overflow-hidden flex">
                  {/* SVG Stick Figure with Pose Detection Points */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl border-4 border-white shadow-xl overflow-hidden flex items-center justify-center relative">
                    {/* AI Tag - flashy animated badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        <span className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                          <span>AI</span>
                        </span>
                      </div>
                    </div>

                    {/* Stick Figure SVG with Pose Detection Points - Tree Pose */}
                    <svg
                      viewBox="0 0 300 400"
                      className="w-64 h-96 text-gray-700"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Stick figure body lines - Tree Pose */}
                      <g
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      >
                        {/* Head */}
                        <circle cx="150" cy="50" r="25" fill="none" />

                        {/* Body */}
                        <line x1="150" y1="75" x2="150" y2="200" />

                        {/* Arms raised up (prayer position) */}
                        <line x1="150" y1="110" x2="120" y2="80" />
                        <line x1="150" y1="110" x2="180" y2="80" />
                        <line x1="120" y1="80" x2="115" y2="60" />
                        <line x1="180" y1="80" x2="185" y2="60" />

                        {/* Standing leg (left leg straight down) */}
                        <line x1="150" y1="200" x2="150" y2="300" />

                        {/* Bent leg (right leg bent and resting on standing leg) */}
                        <line x1="150" y1="200" x2="190" y2="240" />
                        <line x1="190" y1="240" x2="160" y2="260" />

                        {/* Standing foot */}
                        <line x1="150" y1="300" x2="140" y2="310" />
                        <line x1="150" y1="300" x2="160" y2="310" />
                      </g>

                      {/* Pose Detection Points - All same color (blue) */}
                      <g>
                        {/* Head point */}
                        <circle
                          cx="150"
                          cy="50"
                          r="6"
                          fill="#3B82F6"
                          className="animate-pulse"
                        >
                          <animate
                            attributeName="r"
                            values="6;8;6"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Shoulder center */}
                        <circle
                          cx="150"
                          cy="110"
                          r="5"
                          fill="#3B82F6"
                          className="animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        >
                          <animate
                            attributeName="r"
                            values="5;7;5"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Left elbow */}
                        <circle
                          cx="120"
                          cy="80"
                          r="5"
                          fill="#3B82F6"
                          className="animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        >
                          <animate
                            attributeName="r"
                            values="5;7;5"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Right elbow */}
                        <circle
                          cx="180"
                          cy="80"
                          r="5"
                          fill="#3B82F6"
                          className="animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        >
                          <animate
                            attributeName="r"
                            values="5;7;5"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Left wrist */}
                        <circle
                          cx="115"
                          cy="60"
                          r="4"
                          fill="#3B82F6"
                          className="animate-pulse"
                          style={{ animationDelay: "0.6s" }}
                        >
                          <animate
                            attributeName="r"
                            values="4;6;4"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Right wrist */}
                        <circle
                          cx="185"
                          cy="60"
                          r="4"
                          fill="#3B82F6"
                          className="animate-pulse"
                          style={{ animationDelay: "0.6s" }}
                        >
                          <animate
                            attributeName="r"
                            values="4;6;4"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Hip center */}
                        <circle
                          cx="150"
                          cy="200"
                          r="5"
                          fill="#3B82F6"
                          className="animate-pulse"
                          style={{ animationDelay: "0.8s" }}
                        >
                          <animate
                            attributeName="r"
                            values="5;7;5"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Standing leg knee */}
                        <circle
                          cx="150"
                          cy="250"
                          r="5"
                          fill="#3B82F6"
                          className="animate-pulse"
                          style={{ animationDelay: "1s" }}
                        >
                          <animate
                            attributeName="r"
                            values="5;7;5"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Bent leg knee */}
                        <circle
                          cx="190"
                          cy="240"
                          r="5"
                          fill="#3B82F6"
                          className="animate-pulse"
                          style={{ animationDelay: "1s" }}
                        >
                          <animate
                            attributeName="r"
                            values="5;7;5"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Bent leg ankle */}
                        <circle
                          cx="160"
                          cy="260"
                          r="4"
                          fill="#3B82F6"
                          className="animate-pulse"
                          style={{ animationDelay: "1.2s" }}
                        >
                          <animate
                            attributeName="r"
                            values="4;6;4"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Standing ankle */}
                        <circle
                          cx="150"
                          cy="300"
                          r="5"
                          fill="#3B82F6"
                          className="animate-pulse"
                          style={{ animationDelay: "1.2s" }}
                        >
                          <animate
                            attributeName="r"
                            values="5;7;5"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>

                      {/* Connecting lines between detection points - subtle animation */}
                      <g
                        stroke="#3B82F6"
                        strokeWidth="1"
                        opacity="0.3"
                        strokeDasharray="3,3"
                      >
                        <line
                          x1="150"
                          y1="50"
                          x2="150"
                          y2="110"
                          className="animate-pulse"
                        />
                        <line
                          x1="150"
                          y1="110"
                          x2="120"
                          y2="80"
                          className="animate-pulse"
                        />
                        <line
                          x1="150"
                          y1="110"
                          x2="180"
                          y2="80"
                          className="animate-pulse"
                        />
                        <line
                          x1="120"
                          y1="80"
                          x2="115"
                          y2="60"
                          className="animate-pulse"
                        />
                        <line
                          x1="180"
                          y1="80"
                          x2="185"
                          y2="60"
                          className="animate-pulse"
                        />
                        <line
                          x1="150"
                          y1="110"
                          x2="150"
                          y2="200"
                          className="animate-pulse"
                        />
                        <line
                          x1="150"
                          y1="200"
                          x2="150"
                          y2="250"
                          className="animate-pulse"
                        />
                        <line
                          x1="150"
                          y1="200"
                          x2="190"
                          y2="240"
                          className="animate-pulse"
                        />
                        <line
                          x1="190"
                          y1="240"
                          x2="160"
                          y2="260"
                          className="animate-pulse"
                        />
                        <line
                          x1="150"
                          y1="250"
                          x2="150"
                          y2="300"
                          className="animate-pulse"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
