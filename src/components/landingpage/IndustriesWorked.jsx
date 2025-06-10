"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const images = [
  { src: "/images/Industries/healthcare.jpeg", alt: "Health Care" },
  { src: "/images/Industries/industries.jpeg", alt: "Real Estate" },
  { src: "/images/Industries/manufacture.jpeg", alt: "Manufacture" },
  { src: "/images/Industries/logistics.jpeg", alt: "Logistics" },
  { src: "/images/Industries/ecomm.jpeg", alt: "Ecommerce" },
  { src: "/images/Industries/finance.jpeg", alt: "Finance" },
  { src: "/images/Industries/automotive.jpeg", alt: "Automotive" },
  { src: "/images/Industries/education.jpeg", alt: "Education" },
  { src: "/images/Industries/hospitality.jpeg", alt: "Hospitality" },
  { src: "/images/Industries/games.jpeg", alt: "Entertainment" },
];

export const IndustriesWorked = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <section className="py-6">
      <div className="bg-[#00357A] bg-gradient-to-b from-transparent to-black opacity-90 flex p-10">
        <div className="text-white w-[45%] flex flex-col justify-center gap-7">
          <h1 className="text-5xl font-semibold leading-16 pr-2">
            Industries We've Worked In
          </h1>
          <span className="text-[16px] leading-6">
            We deliver tailored solutions across industries like healthcare,
            education, finance, e-commerce, and tech, leveraging deep expertise
            to drive impactful results.
          </span>
        </div>

      <div className="relative flex items-center justify-center w-[55%]">
  <div className="flex gap-4 w-full">
    {currentImages.map((image, index) => (
      <div
        key={index}
        className="relative h-[400px] w-[300px] flex-1 overflow-hidden rounded-md"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-100" />

        {/* Text on top of overlay */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold z-10">
          {image.alt}
        </div>
      </div>
    ))}
  </div>
</div>


        <div className="flex items-center">
          <ChevronRight
            className="h-[60px] w-[60px] text-white cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>
    </section>
  );
};
