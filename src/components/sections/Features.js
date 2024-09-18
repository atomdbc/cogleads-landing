import React from 'react';
import { Sparkles, Target, Zap, Shield, Compass, Lightbulb } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, darkMode }) => (
  <div className={`flex flex-col items-center p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${
    darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
  }`}>
    <div className={`p-3 rounded-full mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <Icon className={`w-8 h-8 ${darkMode ? 'text-white' : 'text-black'}`} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
  </div>
);

const Features = ({ darkMode }) => {
  const features = [
    {
      icon: Sparkles,
      title: "Effortless Alignment",
      description: "Experience seamless coordination across your entire team, boosting productivity and ensuring everyone is on the same page."
    },
    {
      icon: Target,
      title: "Proactive Outreach",
      description: "Stay ahead of the curve with intelligent lead engagement, allowing you to focus on high-value interactions and relationship building."
    },
    {
      icon: Zap,
      title: "Streamlined Operations",
      description: "Eliminate time-consuming manual processes and redirect your energy towards strategic initiatives that drive growth."
    },
    {
      icon: Shield,
      title: "Enterprise-Ready Solution",
      description: "Leverage a robust platform designed to integrate seamlessly with your existing systems, ensuring a smooth transition and immediate value."
    },
    {
      icon: Compass,
      title: "Dedicated Guidance",
      description: "Navigate your journey with confidence, backed by round-the-clock expert support to maximize your success and overcome any challenges."
    },
    {
      icon: Lightbulb,
      title: "Strategic Foresight",
      description: "Gain a competitive edge with deep insights that empower you to make informed decisions and stay ahead in your industry."
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
          Streamline Your Path to Success
        </h2>
        <p className={`text-xl text-center mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Unlock your team's full potential with our innovative solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} darkMode={darkMode} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className={`px-8 py-3 rounded-full font-semibold mr-4 transition duration-300 ${
            darkMode 
              ? 'bg-white text-black hover:bg-gray-200' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}>
            Start Your Journey
          </button>
          <button className={`px-8 py-3 rounded-full font-semibold border-2 transition duration-300 ${
            darkMode
              ? 'bg-black text-white border-white hover:bg-gray-900'
              : 'bg-white text-black border-black hover:bg-gray-100'
          }`}>
            Explore Further
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;