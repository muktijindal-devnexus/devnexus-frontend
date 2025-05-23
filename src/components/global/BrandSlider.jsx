"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Brand1 from '../../../public/images/brandslogo/GargBrick.svg';
import Brand2 from '../../../public/images/brandslogo/AA.svg';
import Brand3 from '../../../public/images/brandslogo/Jindal.svg';
import Brand4 from '../../../public/images/brandslogo/Studio.svg';
import Brand5 from '../../../public/images/brandslogo/Rotunneling.svg';
import Brand6 from '../../../public/images/brandslogo/travel.svg';
import Brand7 from '../../../public/images/brandslogo/DCI.svg';
import Brand8 from '../../../public/images/brandslogo/AA.svg';
import Brand9 from '../../../public/images/brandslogo/Circle.svg';
import Brand10 from '../../../public/images/brandslogo/SRE.svg';
import Brand11 from '../../../public/images/brandslogo/KG.svg';
import Brand12 from '../../../public/images/brandslogo/nano.svg';
import Brand13 from '../../../public/images/brandslogo/cafe.svg';
import Brand14 from '../../../public/images/brandslogo/vize.svg';

const brands = [
 Brand1.src,
  Brand2.src,
   Brand3.src,
    Brand4.src,
     Brand5.src,
 Brand6.src,
  Brand7.src,
];
const brand2 = [
 Brand8.src,
  Brand9.src,
   Brand10.src,
    Brand11.src,
     Brand12.src,
 Brand13.src,
 Brand14.src,

];

export default function BrandSlider() {
  return (
    <div className="relative bg-white p-[70px] mt-[100px] ">
      {/* Dotted Circle */}
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[350px] w-[350px] border-2 mt-[60px] mb-[60px] border-dotted border-[#00357A] rounded-full flex items-center justify-center">
          <div className="w-[225px] h-[225px] bg-white flex items-center justify-center  rounded-full text-center shadow-md">
            <p className="text-[#00357A] font-semibold text-lg leading-tight">
              Brands We've <br /> Worked With
            </p>
          </div>
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
