'use client';

import React from 'react';
import { Award, Handshake, Lightbulb, ThumbsUp } from 'lucide-react';

const values = [
  { icon: Award, label: 'Excellence' },
  { icon: Handshake, label: 'Integrity' },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: ThumbsUp, label: 'Customer-Centricity' },
];

const OurValues = () => {
  return (
    <div className="w-full flex justify-center py-12 bg-white">
      <div className="border border-[#cbd5e1] rounded-xl px-6 py-8 w-full max-w-4xl shadow-[0_6px_6px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {values.map(({ icon: Icon, label }, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2">
              <Icon size={40} className="text-gray-700" />
              <p className="text-sm font-medium text-gray-800">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
