import React from 'react';
import { Check, BarChart2, PieChart, TrendingUp } from 'lucide-react';

const MetricCard = ({ value, label }) => (
  <div className="text-center transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-5xl font-bold text-black mb-3">{value}</h3>
    <p className="text-xl text-gray-600">{label}</p>
  </div>
);

const FeatureSection = ({ title, description, features, image, imageAlt, reverse, icon: Icon }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between mb-32`}>
    <div className="w-full md:w-1/2 mb-12 md:mb-0 transform hover:scale-105 transition-transform duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={`https://picsum.photos/800/450?random=${Math.random()}`}
          alt={imageAlt}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
    <div className="w-full md:w-1/2 md:px-16">
      <div className="flex items-center mb-6">
        <Icon className="w-10 h-10 text-black-500 mr-4" />
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <p className="text-xl text-gray-600 mb-8">{description}</p>
      <ul className="space-y-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
            <span className="text-lg">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Results = () => {
  const metrics = [
    { value: "60+", label: "Integrations" },
    { value: "600%", label: "Return on investment" },
    { value: "4k+", label: "Global customers" }
  ];

  const sections = [
    {
      title: "Predict Tomorrow, Today",
      description: "Anticipate market shifts and customer behaviors with our predictive insights.",
      image: "/api/placeholder/800/450",
      imageAlt: "Predictive Analytics Dashboard",
      icon: TrendingUp,
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
      icon: BarChart2,
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
      icon: PieChart,
      features: [
        "Create customizable and interactive dashboards",
        "Communicate insights with appealing graphics",
        "Spot trends and opportunities at a glance"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Unleash the power of data</h2>
          <p className="text-2xl text-gray-600">Convert, engage, and retain more users with ease</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
        {sections.map((section, index) => (
          <FeatureSection key={index} {...section} reverse={index % 2 !== 0} />
        ))}
        <div className="text-center mt-20">
          <button className="bg-black text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-800 transition duration-300 transform hover:scale-105">
            Start Growing Your Business
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;