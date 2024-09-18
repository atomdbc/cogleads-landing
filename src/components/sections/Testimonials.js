'use client'

import React from 'react';
import Image from 'next/image';

const TestimonialCard = ({ name, company, testimonial, image, darkMode }) => (
  <div className={`rounded-lg shadow-lg p-6 mx-4 flex-shrink-0 w-80 border text-center transform transition-all duration-300 hover:scale-105 ${
    darkMode 
      ? 'bg-gray-800 border-gray-700 text-white' 
      : 'bg-white border-gray-200 text-black'
  }`}>
    <div className="flex justify-center items-center mb-4">
      <Image
        src={image || "https://picsum.photos/100/100"}
        alt={name}
        width={80}
        height={80}
        className={`rounded-full border-4 ${darkMode ? 'border-white' : 'border-black'}`}
      />
    </div>
    <h4 className="font-bold text-xl mb-1">{name}</h4>
    <p className={`font-semibold text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{company}</p>
    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      {testimonial}
    </p>
  </div>
);

const Testimonials = ( { darkMode } ) => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechNova Solutions",
      testimonial: "Cogleads transformed our lead generation. We went from 50 to 500+ quality leads per week using their AI prospecting. It's been a game-changer for our B2B sales.",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      name: "Michael Chen",
      company: "GrowthX Marketing",
      testimonial: "Managing campaigns across platforms was a nightmare until Cogleads. Now we oversee all our Facebook, Google, and YouTube campaigns in one dashboard. Efficiency up by 70%! Highly recommend it.",
      image: "https://picsum.photos/100/100?random=2"
    },
    {
      name: "Emma Rodriguez",
      company: "Swift Logistics",
      testimonial: "Cogleads' all-in-one CRM revolutionized our customer management. We've seen a 40% increase in customer retention and a 25% boost in upsells. Simply incredible.",
      image: "https://picsum.photos/100/100?random=3"
    },
    {
      name: "Alex Patel",
      company: "InnovateNow Startup",
      testimonial: "As a startup, we needed cost-effective solutions. Cogleads provided everything from email marketing to customer support tools. We've grown 300% in 6 months! Highly recommended for startups.",
      image: "https://picsum.photos/100/100?random=4"
    },
    {
      name: "Olivia Thompson",
      company: "EcoGreen Products",
      testimonial: "Cogleads' AI-powered market analysis helped us identify untapped niches. We've launched 2 successful product lines and increased revenue by 150% in just one year.",
      image: "https://picsum.photos/100/100?random=5"
    },
    {
      name: "David Müller",
      company: "GlobalTech Solutions",
      testimonial: "The personal assistant feature in Cogleads saves me 3 hours daily on scheduling and emails. It's like having an extra team member. Productivity has soared!",
      image: "https://picsum.photos/100/100?random=6"
    },
    {
      name: "Sophia Williams",
      company: "BrightSpark Analytics",
      testimonial: "Cogleads' advanced analytics allowed us to identify market trends quicker, helping us stay ahead of competitors. Our sales grew by 60% in just three months.",
      image: "https://picsum.photos/100/100?random=7"
    },
    {
      name: "James Anderson",
      company: "Cloudify Technologies",
      testimonial: "The integration capabilities of Cogleads have been exceptional. Our teams can now track leads, manage tasks, and collaborate seamlessly across departments.",
      image: "https://picsum.photos/100/100?random=8"
    },
    {
      name: "Maria Garcia",
      company: "Blue Horizon Ventures",
      testimonial: "Cogleads enabled us to streamline our investment outreach. We've doubled our portfolio and improved client engagement significantly.",
      image: "https://picsum.photos/100/100?random=9"
    },
    {
      name: "Liam Carter",
      company: "DataPulse Insights",
      testimonial: "With Cogleads' AI-powered suggestions, we’ve been able to optimize our marketing campaigns in real-time. The result has been a 45% increase in campaign effectiveness.",
      image: "https://picsum.photos/100/100?random=10"
    },
    {
      name: "Zara Patel",
      company: "GreenLeaf Organics",
      testimonial: "Cogleads made it easier for us to track our sustainability projects. We've improved our workflow and cut down on administrative work by 35%.",
      image: "https://picsum.photos/100/100?random=11"
    },
    {
      name: "William Zhang",
      company: "Synergy AI",
      testimonial: "As an AI-focused company, we needed a CRM that understood automation. Cogleads is by far the most efficient solution we've encountered. Our lead response times are down by 50%.",
      image: "https://picsum.photos/100/100?random=12"
    },
    {
      name: "Ethan Brown",
      company: "Peak Performance Sports",
      testimonial: "The AI integration in Cogleads helps us tailor content for each customer. This has led to an amazing increase in client retention, helping us grow our sports business.",
      image: "https://picsum.photos/100/100?random=13"
    },
    {
      name: "Isabella Martinez",
      company: "Global Health Innovations",
      testimonial: "Using Cogleads has helped us organize our outreach efforts. We’ve improved our health awareness campaigns and seen a 70% boost in engagement.",
      image: "https://picsum.photos/100/100?random=14"
    }
  ];

  return (
    <section className={`py-20 overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-b from-blue-50 via-white to-blue-50'
    }`}>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll {
          animation: scroll 40s linear infinite;
        }
        .scroll-reverse {
          animation: scroll 40s linear infinite reverse;
        }
        .testimonial-track {
          display: flex;
          width: 200%;
        }
        .testimonial-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Trusted by Businesses Worldwide
        </h2>
        <p className={`text-xl text-center mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          See how Cogleads is transforming businesses across industries
        </p>
        <div className="mb-12 overflow-hidden">
          <div className="testimonial-track scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`upper-${index}`} {...testimonial} darkMode={darkMode} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="testimonial-track scroll-reverse">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`lower-${index}`} {...testimonial} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;