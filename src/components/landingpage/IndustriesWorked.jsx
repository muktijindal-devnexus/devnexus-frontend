"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Industry1 from '../../../public/images/industry1.png'
import Industry2 from '../../../public/images/industry2.png'
import { ChevronRight } from 'lucide-react'

const images = [
  { src: Industry1, alt: 'Industry1' },
  { src: Industry2, alt: 'Industry2' },
  // Add more images if needed (you'll need at least 4 for proper demonstration)

  { src: Industry2, alt: 'Industry4' },
    { src: Industry1, alt: 'Industry3' },
]

export const IndustriesWorked = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    // Move by 2 images at a time, and loop back to start if needed
    setCurrentIndex((prev) => (prev + 2 >= images.length ? 0 : prev + 2))
  }

  // Get the current pair of images to display
  const currentImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length] // Use modulo to wrap around
  ]

  return (
    <section className='py-6'>
      <div className='bg-[#335D95] flex p-10 '>
        <div className='text-white w-[55%] flex flex-col justify-center gap-7'>
          <h1 className='text-5xl font-semibold leading-16'>
            Industries We've Worked In
          </h1>
          <span className='text-[16px] leading-6'>
            We deliver tailored solutions across industries like healthcare, education, finance, e-commerce, and tech, leveraging deep expertise to drive impactful results.
          </span>
        </div>

        <div className='relative  flex items-center justify-center '>
          {currentImages.map((image, index) => (
            <div key={index} className='h-[425px] w-full flex  items-center ml-5 justify-center rounded-md'>
              <Image
                src={image.src}
                alt={image.alt}
                className='object-contain'
                priority
              />
            </div>
          ))}
        </div>

        <div className='flex items-center'>
          <ChevronRight 
            className='h-[60px] w-[60px] text-white cursor-pointer' 
            onClick={nextSlide} 
          />
        </div>
      </div>
    </section>
  )
}