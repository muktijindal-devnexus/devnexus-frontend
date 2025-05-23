'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Arrow from '../../../public/images/Arrow.svg'
import BannerImage1 from '../../../public/images/BannerImage.jpg'
import BannerImage2 from '../../../public/images/BannerImage1.jpg'
import BannerImage3 from '../../../public/images/BannerImage2.jpg'
import BannerSheet from '../../../public/images/Bannersheet.png'

const bannerData = [
  {
    image: BannerImage1,
    heading: 'Transforming Ideas into Digital Excellence',
    description: 'We craft cutting-edge digital solutions that drive growth, enhance user experience, and elevate your brand. From software development to strategic marketing, we turn your vision into reality.',
  },
  {
    image: BannerImage2,
    heading: 'Innovative Designs that Speak for You',
    description: 'Our team delivers pixel-perfect designs and seamless UX, ensuring your users stay engaged and loyal.',
  },
  {
    image: BannerImage3,
    heading: 'Code That Powers Your Ambition',
    description: 'From scalable architecture to flawless deployment, we build robust applications that grow with your business.',
  },
  
]

export const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeBanner = bannerData[activeIndex]

  return (
    <div className="relative w-full h-[500px] md:h-[600px] select-none px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Background and overlay images */}
      <Image
        src={activeBanner.image}
        alt="banner"
        fill
        className="object-cover z-0 transition-all duration-500"
      />
      <Image
        src={BannerSheet}
        alt="banner sheet"
        fill
        className="object-cover z-10 transition-all duration-500"
      />

      {/* Text content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center text-white px-4 sm:px-6 md:px-10 w-full md:w-[55%]">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight font-[Montserrat]">
          {activeBanner.heading}
        </h1>
        <span className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-6 md:leading-8">
          {activeBanner.description}
        </span>
        <span className="flex items-center gap-2 pt-4 cursor-pointer text-sm sm:text-base w-fit">
          Request Quote
          <Image src={Arrow} alt="arrow" width={30} height={15} />
        </span>

        {/* Dots */}
        <div className="flex gap-4 mt-6">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex items-center gap-1"
            >
              <div
                className={`w-6 sm:w-10 h-0.5 transition-all duration-300 ${
                  activeIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
              <span
                className={`text-white text-xs sm:text-sm ${
                  activeIndex === index ? 'font-bold' : 'opacity-50'
                }`}
              >
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
