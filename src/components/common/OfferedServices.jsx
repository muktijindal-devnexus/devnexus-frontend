'use client'
import Image from "next/image";
import React from "react";
import DigitalMarketing from "../../../public/images/image 81.png";
import BannerSheet from "../../../public/images/ServiceBannerSheet.png";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Digital Marketing", href: "/digitalmarketing" },
  { title: "Full-Stack Development", href: "/fullstackdevelopment" },
  { title: "UI/UX Designing", href: "/uiux" },
  { title: "Mobile Development", href: "/mobiledevelopment" },
  { title: "Blockchain development", href: "/blockchain" },
  { title: "AI Technologies", href: "/ai-tech" },
];

export const OfferedServices = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-10">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-[34px] text-[#335D95] leading-snug">
          Services Offered by <br />
          <span className="text-[#00357A] text-[30px] md:text-[36px] lg:text-[40px] font-bold">
            DevNexus Solutions
          </span>
        </h1>
        <div className="w-full lg:w-[62%] h-[3px] bg-[#00357A] mt-6 lg:mt-14"></div>
      </div>

      {/* Cards with custom scroll */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "1rem",
          paddingTop: "2.5rem",
          paddingBottom: "1rem",
        }}
        className="custom-scroll"
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: "300px",
              height: "350px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              position: "relative",
            }}
          >
            <Image
              src={DigitalMarketing}
              alt={service.title}
              fill
              className="object-cover z-0"
            />
            <Image
              src={BannerSheet}
              alt="Banner Sheet"
              fill
              className="object-cover z-10 absolute"
            />
            <div className="absolute inset-0 z-20 flex w-[100px] text-white text-xl font-semibold p-8 leading-8">
              <h2 className="text-white text-lg md:text-xl font-semibold leading-8">
                {service.title}
              </h2>
            </div>
            <Link href={service.href} passHref>
              <div className="bg-white text-blue-950 h-8 py-2 px-6 rounded-xl text-center items-center flex absolute z-50 bottom-10 right-10 cursor-pointer">
                <MoveRight />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Embedded scrollbar styles */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #00357a;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background-color: #e5e7eb;
        }
      `}</style>
    </section>
  );
};
