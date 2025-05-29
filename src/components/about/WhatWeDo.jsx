'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const WhatWeDo = () => {
  const [showVision, setShowVision] = useState(true);
  const [showMission, setShowMission] = useState(false);

  return (
    <section className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-[#00357A] mb-2">What We Do</h2>
      <p className="text-black mb-8 text-base md:text-lg">
        We solve the world's problems, live by the code, and deliver it back to society.
      </p>

      <div className="text-left max-w-3xl mx-auto">
        {/* Vision Accordion */}
        <button
          className={`w-full px-4 py-3 rounded-md flex justify-between items-center font-semibold text-lg transition-colors duration-200 ${
            showVision
              ? 'bg-[#00357A] text-white'
              : 'bg-white text-[#00357A] border border-gray-300'
          }`}
          onClick={() => {
            setShowVision(!showVision);
            if (!showVision) setShowMission(false); // Optionally close the other
          }}
        >
          Our Vision
          {showVision ? <Minus size={20} /> : <Plus size={20} />}
        </button>

        {showVision && (
          <div className="py-6 text-sm text-gray-700 space-y-3">
            <blockquote className="border-l-4 rounded-l-lg border-[#00357A] pl-4 text-base font-medium text-gray-900">
              "To be a global leader in delivering innovative and sustainable IT solutions that empower businesses, inspire people, and drive digital transformation."
            </blockquote>
            <p>
              We envision a future where technology bridges the gap between complexity and simplicity—
              where every business, no matter the size, can leverage cutting-edge tools to unlock growth and
              efficiency. Our goal is to create impactful digital experiences, build long-lasting partnerships,
              and remain at the forefront of technological advancement.
            </p>
          </div>
        )}

        {/* Mission Accordion */}
        <button
          className={`w-full mt-6 px-4 py-3 rounded-md flex justify-between items-center font-semibold text-lg transition-colors duration-200 ${
            showMission
              ? 'bg-[#00357A] text-white'
              : 'bg-white text-[#00357A] border border-gray-300'
          }`}
          onClick={() => {
            setShowMission(!showMission);
            if (!showMission) setShowVision(false); // Optionally close the other
          }}
        >
          Our Mission
          {showMission ? <Minus size={20} /> : <Plus size={20} />}
        </button>

        {showMission && (
          <div className="py-6 text-sm text-gray-700 space-y-3">
            <blockquote className="border-l-4 rounded-l-lg border-[#00357A] pl-4 text-base font-medium text-gray-900">
              "To deliver exceptional technology solutions with integrity, creativity, and precision to drive progress and empower our clients globally."
            </blockquote>
            <p>
              Our mission is to drive digital innovation through sustainable and scalable solutions. We aim to
              empower organizations by providing reliable technology, fostering creativity, and ensuring every
              line of code contributes to a better future.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatWeDo;
