import React from 'react';
import { ArrowUpRight, Users, TrendingUp, BarChart2, PieChart } from 'lucide-react';
import Image from 'next/image';

const MetricCard = ({ value, label, icon: Icon, darkMode }) => (
  <div className={`p-6 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} flex flex-col items-center text-center`}>
    <Icon className={`w-8 h-8 mb-4 ${darkMode ? 'text-white' : 'text-black'}`} />
    <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{value}</p>
    <p className={`text-sm uppercase tracking-wide ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{label}</p>
  </div>
);

const FeatureItem = ({ title, description, darkMode }) => (
  <div className="flex items-start space-x-4 mb-4">
    <div className="flex-shrink-0 mt-1">
      <ArrowUpRight className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} />
    </div>
    <div>
      <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{title}</h4>
      <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
    </div>
  </div>
);

const AlternatingSection = ({ title, description, image, imageAlt, features, isImageLeft, darkMode }) => (
  <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-20`}>
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
        <Image
          src={image}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
    <div className={`w-full lg:w-1/2 ${isImageLeft ? 'lg:pl-12' : 'lg:pr-12'}`}>
      <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>{title}</h3>
      <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
      {features.map((feature, index) => (
        <FeatureItem key={index} title={feature} description="" darkMode={darkMode} />
      ))}
    </div>
  </div>
);

const Results = ({ darkMode }) => {
  const metrics = [
    { value: "500%", label: "Productivity Boost", icon: TrendingUp },
    { value: "1M+", label: "Tasks Automated", icon: BarChart2 },
    { value: "99.9%", label: "AI Accuracy", icon: Users },
  ];

  const sections = [
    {
      title: "Predict Tomorrow, Today",
      description: "Anticipate market shifts and customer behaviors with our predictive insights.",
      image: "/api/placeholder/800/450",
      imageAlt: "Predictive Analytics Dashboard",
      features: [
        "Leverage predictive modeling for preemptive actions",
        "Identify and mitigate potential risks",
        "Gain a competitive edge with data-driven decisions"
      ]
    },
    {
      title: "AI-Driven Analytics",
      description: "Uncover hidden insights with advanced AI-powered analysis tools.",
      image: "/api/placeholder/800/450",
      imageAlt: "AI Analytics Interface",
      features: [
        "Detect subtle relationships within your data",
        "Anticipate future trends with AI modeling",
        "Automate data analysis and pattern recognition"
      ]
    },
    {
      title: "Visualize Your Success",
      description: "Transform raw data into compelling, actionable visual insights.",
      image: "/api/placeholder/800/450",
      imageAlt: "Data Visualization Dashboard",
      features: [
        "Create customizable and interactive dashboards",
        "Communicate insights with appealing graphics",
        "Spot trends and opportunities at a glance"
      ]
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Transforming Businesses with AI</h2>
          <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Experience unprecedented growth and efficiency with our cutting-edge AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} darkMode={darkMode} />
          ))}
        </div>

        {sections.map((section, index) => (
          <AlternatingSection key={index} {...section} isImageLeft={index % 2 === 0} darkMode={darkMode} />
        ))}

        <div className="mt-16 text-center">
          <a href="#" className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md transition duration-300 ${
            darkMode 
              ? 'text-black bg-white hover:bg-gray-200' 
              : 'text-white bg-black hover:bg-gray-800'
          }`}>
            Start Your AI Journey
            <ArrowUpRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;