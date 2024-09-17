import React from 'react';
import { Clock, User, BarChart2, Zap, Phone, PieChart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
    <div className="p-3 bg-gray-100 rounded-full mb-4">
      <Icon className="w-8 h-8 text-black" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Always in Sync",
      description: "Real-time updates across all your devices, keeping your team aligned."
    },
    {
      icon: User,
      title: "AI Calling Agent",
      description: "Automatically reach out to leads, leaving more time for closing deals."
    },
    {
      icon: BarChart2,
      title: "Task Automation",
      description: "Automate repetitive tasks so you can focus on what really matters."
    },
    {
      icon: Zap,
      title: "Production-ready",
      description: "Seamlessly integrate Cogleads into your existing workflow."
    },
    {
      icon: Phone,
      title: "Supreme Support",
      description: "24/7 expert assistance to ensure your success with Cogleads."
    },
    {
      icon: PieChart,
      title: "Business Insights",
      description: "Data-driven insights to optimize your sales and marketing strategies."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">No more complicated workflows.</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Work smarter, not harder with AI-powered solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold mr-4 hover:bg-gray-800 transition duration-300">
            Join the Waitlist
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold border-2 border-black hover:bg-gray-100 transition duration-300">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;