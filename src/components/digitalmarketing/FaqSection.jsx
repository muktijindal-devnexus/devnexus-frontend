'use client'
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: 'Why do businesses need digital marketing services?',
    answer:
      'Every business wants to grow and capture most of the market value in their niche, this is where digital marketing services come into play. With most of the consumers, products, and services being online, digital marketing services help to get more visibility and quality leads. It offers measurable results and is cost-effective. On the other hand, with digital marketing techniques, one can adopt the market trends very easily.',
  },
  {
    question: 'What makes DevNexus Solutions the best digital marketing company?',
    answer:
      'Our tailored strategies, proven results, and expert team make DevNexus a trusted choice for businesses seeking impactful digital growth.',
  },
  {
    question: 'Which digital marketing channels are most result oriented for B2B?',
    answer:
      'For B2B, SEO, LinkedIn marketing, content marketing, and email marketing usually provide the best returns.',
  },
  {
    question: 'I wish to market my business. How should I get started?',
    answer:
      'You can start by contacting our team for a free consultation. We’ll understand your business goals and suggest the best approach.',
  },
  {
    question: 'How much does it cost to hire a digital marketing agency?',
    answer:
      'Costs vary depending on the services required, industry competitiveness, and goals. We offer tailored packages to suit your needs.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="px-6 md:px-16 py-12 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00357A]">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-gray-600 mt-2">
          Answers to Your Most Common Questions – <br className="md:hidden" />
          <span className="font-medium">Fast, Clear, and Helpful.</span>
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-md transition-all duration-300 ${
              openIndex === index ? 'bg-[#00357A] text-white' : 'bg-white'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center"
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-sm text-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
