// Testimonial.tsx
import { Quote, Star, StarHalf, User } from "lucide-react";
import React from "react";


const testimonials = [
  {
    name: "ANKIT",
    review:
      "DevNexus transformed our business with an incredible website and strategic marketing. Highly recommend their team!",
    rating: 4.5,
    platform: "Google reviews",
  },
    {
    name: "ANKIT",
    review:
      "DevNexus transformed our business with an incredible website and strategic marketing. Highly recommend their team!",
    rating: 4.5,
    platform: "Google reviews",
  },
    {
    name: "ANKIT",
    review:
      "DevNexus transformed our business with an incredible website and strategic marketing. Highly recommend their team!",
    rating: 4.5,
    platform: "Google reviews",
  },
];

export const Testimonial = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <span className="text-[#00357A] text-[20px] mb-4 md:mb-0">
          What Our Clients Say
        </span>
        <div className="md:w-[55%]">
          <h1 className="font-semibold text-[24px] md:text-[34px]">
            Trusted by Many for Digital and Web Solutions
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <div key={index} className="relative bg-white shadow-md rounded-xl px-6 py-10 text-center">
            <div className="text-blue-900 mb-6">
              <Quote className="w-[50px] h-[47px] mx-auto fill-blue-900" />
            </div>
            <p className="text-gray-700 mb-8">{t.review}</p>

            <div className="flex justify-center mb-4 text-blue-900">
              {Array.from({ length: Math.floor(t.rating) }).map((_, i) => (
                <Star key={i} className="w-5 h-5 mx-0.5 fill-current" />
              ))}
              {t.rating % 1 !== 0 && (
                <StarHalf className="w-5 h-5 mx-0.5 fill-current" />
              )}
            </div>

            <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-[-40px]">
              <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white mb-2">
                <User className="w-5 h-5" />
              </div>
              <p className="font-semibold text-gray-800">{t.name}</p>
              <p className="text-sm text-gray-500">Posted on {t.platform}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
