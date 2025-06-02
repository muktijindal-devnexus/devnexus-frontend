import React from "react";
import { MoveRight } from "lucide-react"; // Optional, replace with SVG if not using lucide

const services = [
  {
    title: "Full Stack Development",
    description:
      "Creating seamless, high-performing websites that engage users and drive results",
    icon: "/images/services/image 155.svg",
    active: true,
  },
  {
    title: "UI/UX Design",
    description:
      "Elevate user engagement through intuitive design and seamless digital experiences.",
    icon: "/images/services/image 156.svg",
  },
  {
    title: "Mobile Development",
    description:
      "Transforming ideas into high-performing Android & iOS applications",
     icon: "/images/services/image 156.svg",
  },
  {
    title: "Digital Marketing",
    description:
      "Let the Right Digital Marketing Company Uplift Your Web Traffic, Generate More Leads and Sales for Your Business.",
   icon: "/images/services/image 156.svg",
  },
  {
    title: "Blockchain Development",
    description:
      "We build next-gen systems that redefine trust, resilience, and innovation for the world of tomorrow.",
    icon: "/images/services/image 156.svg",
  },
  {
    title: "AI Technologies",
    description:
      "Unleashing the power of AI to drive growth, streamline operations, and create scalable solutions for the digital age.",
     icon: "/images/services/image 157.svg",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center border-2 rounded-xl p-16 shadow-sm transition-all duration-300 ${
              service.active
                ? " shadow-md border-gray-200 hover:border-blue-900"
                : "border-gray-200 hover:border-blue-900 hover:shadow-md"
            }`}
          >
            <img src={service.icon} alt={service.title} className="h-20 mb-4" />
            <h3 className="text-lg font-semibold text-[#00357A] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <div className="mt-auto bg-[#c2cfe0] py-1 px-6 rounded-xl">
              <MoveRight className="text-[#00357A]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
