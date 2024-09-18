'use client';

import React from 'react';
import {
  FaGoogle,
  FaMicrosoft,
  FaSlack,
  FaSalesforce,
  FaHubspot,
  FaTrello,
  FaDropbox,
  FaLinkedin,
  FaGithub,
  FaJira,
  FaShopify,
} from 'react-icons/fa';
import {
   SiZoom,
   SiAsana,
   SiNotion,
   SiAirtable,
  SiMicrosoftteams,
  SiGooglecalendar,
  SiMicrosoftoutlook,
  SiQuickbooks,
  SiZendesk
} from 'react-icons/si';

const IntegrationIcon = ({ Icon, name, darkMode }) => (
  <div className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-110">
    <Icon size={40} className={darkMode ? "text-white" : "text-black"} />
    <span className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{name}</span>
  </div>
);

const Integrations = ({ darkMode }) => {
  const integrations = [
    { Icon: FaGoogle, name: 'Google Workspace' },
    { Icon: FaMicrosoft, name: 'Microsoft 365' },
    { Icon: FaSlack, name: 'Slack' },
    { Icon: FaSalesforce, name: 'Salesforce' },
    { Icon: FaHubspot, name: 'HubSpot' },
    { Icon: FaTrello, name: 'Trello' },
    { Icon: FaDropbox, name: 'Dropbox' },
    { Icon: FaLinkedin, name: 'LinkedIn' },
    { Icon: SiZoom, name: 'Zoom' },
    { Icon: FaGithub, name: 'GitHub' },
    { Icon: SiAsana, name: 'Asana' },
    { Icon: SiNotion, name: 'Notion' },
    { Icon: SiAirtable, name: 'Airtable' },
    { Icon: SiMicrosoftteams, name: 'Microsoft Teams' },
    { Icon: SiGooglecalendar, name: 'Google Calendar' },
    { Icon: SiMicrosoftoutlook, name: 'Microsoft Outlook' },
    { Icon: SiQuickbooks, name: 'QuickBooks' },
    { Icon: SiZendesk, name: 'Zendesk' },
    { Icon: FaJira, name: 'Jira' },
    { Icon: FaShopify, name: 'Shopify' },
   ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Seamless Business Integrations</h2>
        <p className={`text-xl text-center mb-12 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Enhance your business workflow with our wide range of productivity integrations. Connect your essential tools effortlessly.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {integrations.map((integration, index) => (
            <IntegrationIcon key={index} Icon={integration.Icon} name={integration.name} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;