'use client';

import React from 'react';
import Image from 'next/image';
import worldMap from '../../../public/images/contact/globalContact.png'; // Replace with your actual image path

const IndustryExperience = () => {
  return (
    <section className="bg-white py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#7B7B7B]">
          <span className="text-[#00357A] font-bold">Our</span>{' '}
          industry experience <span className="text-[#00357A] font-bold">and</span>{' '}
          market research <span className="text-[#00357A] font-bold">make the difference</span>
        </h2>

        <p className="text-[#4C4C4C] text-lg md:text-base my-10 ">
          With any industry, understanding how to most effectively approach the market is crucial to growing
          a business. If you’re looking for help from a digital marketing agency it pays to choose one that
          already understands your industry and your customers. Take a flying start with Stramasa as your
          B2B digital agency partner thanks to our industry insights, local & global learnings and understanding
          of your ideal brand positioning for your target audience in your sector. We’re always eager to deepen
          our expertise & learn about new industries so let’s connect!
        </p>

        <div className="mt-10">
          <Image
            src={worldMap}
            alt="Global Network"
            className="mx-auto"
            width={700}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default IndustryExperience;
