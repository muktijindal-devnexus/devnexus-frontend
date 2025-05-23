import React from 'react';
import { FaClipboardList, FaLaptopCode, FaSearch } from 'react-icons/fa';

const cardData = [
  {
    icon: <FaClipboardList size={24} />,
    title: 'Project Requirements',
    description:
      'We start by having a conversation with our client through virtual or live meetings to get an idea about their project requirements.',
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: 'Website Analysis',
    description:
      'Then our experts come into the game and analyze their website to identify where we need to do some work and what can be done to enhance its visibility digitally.',
  },
  {
    icon: <FaSearch size={24} />,
    title: 'Market & Keyword Research',
    description:
      'Once we have gone through your website, we perform rigorous market and keyword research according to your niche to boost SEO performance.',
  },
  {
    icon: <FaSearch size={24} />,
    title: 'Market & Keyword Research',
    description:
      'Once we have gone through your website, we perform rigorous market and keyword research according to your niche to boost SEO performance.',
  },
    {
    icon: <FaSearch size={24} />,
    title: 'Market & Keyword Research',
    description:
      'Once we have gone through your website, we perform rigorous market and keyword research according to your niche to boost SEO performance.',
  },
    {
    icon: <FaSearch size={24} />,
    title: 'Market & Keyword Research',
    description:
      'Once we have gone through your website, we perform rigorous market and keyword research according to your niche to boost SEO performance.',
  },
    {
    icon: <FaSearch size={24} />,
    title: 'Market & Keyword Research',
    description:
      'Once we have gone through your website, we perform rigorous market and keyword research according to your niche to boost SEO performance.',
  },
    {
    icon: <FaSearch size={24} />,
    title: 'Market & Keyword Research',
    description:
      'Once we have gone through your website, we perform rigorous market and keyword research according to your niche to boost SEO performance.',
  },
    {
    icon: <FaSearch size={24} />,
    title: 'Market & Keyword Research',
    description:
      'Once we have gone through your website, we perform rigorous market and keyword research according to your niche to boost SEO performance.',
  },
];

export const SeoMarketing = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 p-10">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-[32px] md:text-[48px] text-[#335D95] leading-tight">
          Delivering <br />
          <span className="text-[#00357A] font-semibold">
            SEO Marketing Excellence
          </span>{' '}
          Through a <br />
          Holistic Strategy
        </h1>
        <p className="text-[18px] md:text-[20px] text-gray-700">
          Access end-to-end SEO services through our structured and agile methodology.
          We follow a proven, results-driven approach that encompasses everything from
          requirement gathering and strategy design to final deployment. This
          commitment to excellence has established us as one of India’s leading SEO
          marketing companies with a strong track record of success.
        </p>
      </div>

      {/* Right Scrollable Section */}
      <div className="md:w-1/2 h-[500px] overflow-y-scroll space-y-6 pr-4">
        {cardData.map((card, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-[#00357A] p-4 rounded-md text-white">
              {card.icon}
            </div>
            <div>
              <h2 className="text-[22px] font-semibold">{card.title}</h2>
              <p className="text-[18px] text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
