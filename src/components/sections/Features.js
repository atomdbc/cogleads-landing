import React from 'react';
import { Target, Clock, Zap, MessageCircle, Headphones, UserPlus } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, darkMode }) => (
  <div className={`flex flex-col items-center p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
    <div className={`p-3 rounded-full mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <Icon className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
    </div>
    <h3 className={`text-xl font-semibold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
    <p className={`text-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
  </div>
);

const Features = ({ darkMode }) => {
  const features = [
    {
      icon: Target,
      title: "More Leads, Less Work",
      description: "Leads come to you. Our AI works to identify potential customers so you can focus on closing deals."
    },
    {
      icon: Clock,
      title: "Engage at the Right Time",
      description: "We alert you when it's the perfect time to follow up to ensure timely and effective customer engagement."
    },
    {
      icon: Zap,
      title: "Automate, Don't Complicate",
      description: "Cogleads keeps your leads, ads, and sales organized in one place, making management easy and stress-free."
    },
    {
      icon: MessageCircle,
      title: "Your Sales, Your Voice",
      description: "Our AI adapts to your style for every message to feel uniquely personal and aligned with your brand."
    },
    {
      icon: Headphones,
      title: "Smart Customer Support",
      description: "Provide instant help through intuitive chatbots. Integrate directly into your webpage with no coding required."
    },
    {
      icon: UserPlus,
      title: "Effortless Lead Collection",
      description: "Capture more leads with smart tags designed to collect information at precisely the right moment."
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          What Cogleads Does for You
        </h2>
        <p className={`text-lg text-center mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Cogleads makes business easy by handling the details for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;