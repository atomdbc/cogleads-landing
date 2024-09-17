"use client";  // Ensures this is treated as a client component

import React from 'react';
import {
  SiSalesforce, SiHubspot, SiPipedrive, SiZoho, SiMailchimp, SiMarketo, SiHootsuite, SiBuffer,
  SiIbm, SiGoogleanalytics, SiTableau, SiMicrosoftazure, SiZendesk, SiIntercom, SiFreshdesk,
  SiAsana, SiTrello, SiJira, SiNotion, SiAirtable, SiSlack, SiMicrosoftteams, SiZoom, SiDiscord,
  SiShopify, SiWoo, SiMagento, SiBigcommerce, SiStripe, SiPaypal, SiSquare, SiEtsy
} from 'react-icons/si';

const IntegrationIcon = ({ Icon }) => (
  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 transition-transform duration-300 hover:scale-110 hover:shadow-md">
    <Icon size={24} />
  </div>
);

const IntegrationCategory = ({ title, integrations }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4 text-gray-700">{title}</h3>
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
      {integrations.map((Integration, index) => (
        <IntegrationIcon key={index} Icon={Integration} />
      ))}
    </div>
  </div>
);

const Integrations = () => {
  const categories = [
    {
      title: "Sales & CRM",
      integrations: [SiSalesforce, SiHubspot, SiPipedrive, SiZoho]
    },
    {
      title: "Marketing",
      integrations: [SiMailchimp, SiMarketo, SiHootsuite, SiBuffer]
    },
    {
      title: "AI & Analytics",
      integrations: [SiIbm, SiGoogleanalytics, SiTableau, SiMicrosoftazure]
    },
    {
      title: "Customer Support",
      integrations: [SiZendesk, SiIntercom, SiFreshdesk]
    },
    {
      title: "Project Management",
      integrations: [SiAsana, SiTrello, SiJira, SiNotion, SiAirtable]
    },
    {
      title: "Communication",
      integrations: [SiSlack, SiMicrosoftteams, SiZoom, SiDiscord]
    },
    {
      title: "E-commerce",
      integrations: [SiShopify, SiWoo, SiMagento, SiBigcommerce, SiStripe, SiPaypal, SiSquare, SiEtsy]
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Get more value from your tools</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Connect your tools, connect your teams. With over 60 integrations available, your favorite tools are just a click away.
        </p>
        <div className="space-y-12">
          {categories.map((category, index) => (
            <IntegrationCategory key={index} title={category.title} integrations={category.integrations} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
