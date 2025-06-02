'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function CaseStudyCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-md max-w-6xl mx-auto">
      
      {/* Left Section */}
      <div className="flex-1 relative bg-[#f5f5f5] rounded-lg p-4 w-full">
        <div className="flex items-center gap-4 mb-4">
          <Image src="/brick-icon.png" alt="Brick Icon" width={50} height={50} />
          <Image src="/code-icon.png" alt="Code Icon" width={50} height={50} />
          <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src="/buildings.jpg" alt="Buildings" width={56} height={56} className="object-cover" />
          </div>
        </div>
        <h2 className="text-xl font-semibold leading-tight">
          Case Study: Web Development & Digital Marketing for Cervino Ceramix
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <Image src="/cervino-logo.png" alt="Cervino Logo" width={40} height={40} />
          <h3 className="text-xl font-bold">Cervino Ceramix</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Cervino Ceramix LLP, a fast-emerging Indian manufacturer based in Jhajjar, Haryana, specializes in high-end bricks and tiles. Launched in 2022, Cervino merges traditional handcrafted materials with modern specifications. Their target customers include architects, interior designers, builders, and discerning end-users. The product range features:
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#00357A] text-white px-4 py-1 rounded-md transition"
          >
            View Case Study &gt;&gt;
          </button>
          <a
            href="https://cervinoceramix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#00357A] font-medium hover:underline"
          >
            Visit Website <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Modal for PDF */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full relative shadow-lg overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black"
            >
              <X size={24} />
            </button>
            <iframe
              src="/cervino-case-study.pdf" // Make sure this file exists in the /public folder
              className="w-full h-[80vh]"
              frameBorder="0"
              title="Cervino Case Study"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
