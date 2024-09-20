'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TestimonialCard = ({ name, company, problem, solution, result, image, darkMode }) => (
  <div className={`max-w-3xl mx-auto p-8 text-center ${
    darkMode ? 'text-white' : 'text-gray-800'
  }`}>
    <div className="flex justify-center items-center mb-6">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-full"
      />
    </div>
    <h4 className="font-bold text-2xl mb-2">{name}</h4>
    <p className={`font-semibold text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{company}</p>
    <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      <strong>Challenge:</strong> {problem}
    </p>
    <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      <strong>Solution:</strong> {solution}
    </p>
    <p className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
      <strong>Result:</strong> {result}
    </p>
  </div>
);

const Testimonials = ({ darkMode }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const timeoutRef = useRef(null);
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechNova Solutions",
      problem: "We struggled to generate quality leads, often spending hours on manual prospecting with little return.",
      solution: "Cogleads' AI-powered lead generation tools allowed us to automate our prospecting process.",
      result: "We increased our quality leads from 50 to 500+ per week, revolutionizing our B2B sales approach.",
      image: "/api/placeholder/100/100?random=1"
    },
    {
      name: "Michael Chen",
      company: "GrowthX Marketing",
      problem: "Managing multiple marketing campaigns across various platforms was time-consuming and inefficient.",
      solution: "Cogleads provided a centralized dashboard to oversee all our Facebook, Google, and YouTube campaigns.",
      result: "Our campaign management efficiency improved by 70%, allowing us to scale our marketing efforts significantly.",
      image: "/api/placeholder/100/100?random=2"
    },
    {
      name: "Emma Rodriguez",
      company: "Swift Logistics",
      problem: "Our customer management was disorganized, leading to missed opportunities and poor retention rates.",
      solution: "We implemented Cogleads' all-in-one CRM to streamline our customer interactions and data management.",
      result: "We saw a 40% increase in customer retention and a 25% boost in upsells, dramatically improving our bottom line.",
      image: "/api/placeholder/100/100?random=3"
    },
    {
      name: "Alex Patel",
      company: "InnovateNow Startup",
      problem: "As a startup, we struggled with limited resources and needed cost-effective solutions for various business operations.",
      solution: "Cogleads offered an all-in-one platform, providing tools from email marketing to customer support at a startup-friendly price.",
      result: "We've grown 300% in 6 months, streamlining our operations without breaking the bank.",
      image: "/api/placeholder/100/100?random=4"
    },
    {
      name: "Olivia Thompson",
      company: "EcoGreen Products",
      problem: "We had difficulty identifying new market opportunities and developing products that resonated with eco-conscious consumers.",
      solution: "Cogleads' AI-powered market analysis helped us uncover untapped niches in the sustainable products market.",
      result: "We successfully launched 2 new product lines and increased our revenue by 150% in just one year.",
      image: "/api/placeholder/100/100?random=5"
    },
    {
      name: "David Müller",
      company: "GlobalTech Solutions",
      problem: "I was spending too much time on administrative tasks, reducing my capacity for strategic planning and client interactions.",
      solution: "We utilized Cogleads' personal assistant feature to automate scheduling, email management, and basic customer inquiries.",
      result: "I now save 3 hours daily on routine tasks, significantly boosting my productivity and allowing more time for high-value activities.",
      image: "/api/placeholder/100/100?random=6"
    },
    {
      name: "Sophia Williams",
      company: "BrightSpark Analytics",
      problem: "We were struggling to stay ahead of market trends and often found ourselves reacting to changes rather than anticipating them.",
      solution: "Cogleads' advanced analytics and predictive modeling capabilities allowed us to process and interpret market data more effectively.",
      result: "We now identify emerging trends quicker, helping us stay ahead of competitors. Our sales grew by 60% in just three months.",
      image: "/api/placeholder/100/100?random=7"
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Change testimonial every 8 seconds

    return () => {
      resetTimeout();
    };
  }, [currentTestimonial, testimonials.length]);

  const handleMouseEnter = () => {
    resetTimeout();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Real Stories, Real Results
        </h2>
        <p className={`text-xl text-center mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          See how Cogleads is solving real business challenges and driving growth
        </p>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <TestimonialCard {...testimonials[currentTestimonial]} darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;