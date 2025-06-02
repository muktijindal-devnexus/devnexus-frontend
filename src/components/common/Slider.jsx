"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Brand3 from '../../../public/images/brandslogo/Jindal.svg';
import Brand4 from '../../../public/images/brandslogo/Studio.svg';
import Brand5 from '../../../public/images/brandslogo/Rotunneling.svg';
import Brand6 from '../../../public/images/brandslogo/travel.svg';
import Brand7 from '../../../public/images/brandslogo/DCI.svg';
import Brand10 from '../../../public/images/brandslogo/SRE.svg';
import Brand11 from '../../../public/images/brandslogo/KG.svg';
import Brand12 from '../../../public/images/brandslogo/nano.svg';
import Brand13 from '../../../public/images/brandslogo/cafe.svg';
import Brand14 from '../../../public/images/brandslogo/vize.svg';

const brands = [
   Brand3.src,
    Brand4.src,
     Brand5.src,
 Brand6.src,
  Brand7.src,
];
const brand2 = [
   Brand10.src,
    Brand11.src,
     Brand12.src,
 Brand13.src,
 Brand14.src,

];

export default function Slider() {
  return (

    
    <div className="relative bg-white p-[70px]">
        
       <div>
    <div className='flex flex-col justify-center text-center items-center pt-10'>
        <h1 className='text-[48px] font-medium text-[#335D95] leading-14 font-[Monstreat]'>
          Your go-to partner for Digital <br/>Marketing success
        </h1>
        <p className='text-[26px] text-[#335D95] font-[Poppins]'>
          We deliver Digital Marketing Services to brands of all sizes
        </p>
      </div>
      </div>


      {/* Swiper Row 1 - Left to Right */}
      
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        grabCursor={true}
        className="mt-12 px-4"
      >
        {[...brands, ...brands].map((logo, i) => (
          <SwiperSlide key={`top-${i}`}>
            <img
              src={logo}
              alt={`Brand ${i}`}
              className="h-16 w-auto object-contain mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Row 2 - Right to Left */}
      <Swiper
        dir="rtl"
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        grabCursor={true}
        className="mt-2 px-4"
      >
        {[...brand2, ...brand2].map((logo, i) => (
          <SwiperSlide key={`bottom-${i}`}>
            <img
              src={logo}
              alt={`Brand ${i}`}
              className="h-16 w-auto object-contain mx-auto mt-[60px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
