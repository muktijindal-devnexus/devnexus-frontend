import React from "react";
import { ArrowRight } from "lucide-react"; // Optional, replace with SVG if not using lucide

const services = [
  {
    title: "Full Stack Development",
    description:
      "Creating seamless, high-performing websites that engage users and drive results",
    icon: "/icons/fullstack.png",
    active: true,
  },
  {
    title: "UI/UX Design",
    description:
      "Elevate user engagement through intuitive design and seamless digital experiences.",
    icon: "/icons/uiux.png",
  },
  {
    title: "Mobile Development",
    description:
      "Transforming ideas into high-performing Android & iOS applications",
    icon: "/icons/mobile.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Let the Right Digital Marketing Company Uplift Your Web Traffic, Generate More Leads and Sales for Your Business.",
    icon: "/icons/marketing.png",
  },
  {
    title: "Blockchain Development",
    description:
      "We build next-gen systems that redefine trust, resilience, and innovation for the world of tomorrow.",
    icon: "/icons/blockchain.png",
  },
  {
    title: "AI Technologies",
    description:
      "Unleashing the power of AI to drive growth, streamline operations, and create scalable solutions for the digital age.",
    icon: "/icons/ai.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center border-2 rounded-xl p-6 shadow-sm transition-all duration-300 ${
              service.active
                ? "border-blue-900 shadow-md"
                : "border-gray-200 hover:shadow-md"
            }`}
          >
            <img src={service.icon} alt={service.title} className="h-16 mb-4" />
            <h3 className="text-lg font-semibold text-[#00357A] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <div className="mt-auto">
              <ArrowRight className="text-blue-800" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
