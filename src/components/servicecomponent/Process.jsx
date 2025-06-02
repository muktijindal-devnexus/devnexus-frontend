import React from "react";
import { Briefcase, ClipboardList, Code } from "lucide-react"; // Optional: Replace with actual SVGs/icons

const processSteps = [
  {
    title: "Consultation",
    description: "Gaining a clear understanding of your business goals and requirements.",
    icon: <Briefcase className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "Planning",
    description: "Develop a tailored strategic roadmap for your custom software solutions.",
    icon: <ClipboardList className="h-10 w-10 text-red-500" />,
  },
  {
    title: "Development",
    description: "Crafting your software with accuracy and professional excellence.",
    icon: <Code className="h-10 w-10 text-indigo-600" />,
  },
    {
    title: "Development",
    description: "Crafting your software with accuracy and professional excellence.",
    icon: <Code className="h-10 w-10 text-indigo-600" />,
  },
    {
    title: "Development",
    description: "Crafting your software with accuracy and professional excellence.",
    icon: <Code className="h-10 w-10 text-indigo-600" />,
  },
];

const OurProcess = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-20">
      <div className=" mb-12">
        <h2 className="text-3xl font-bold text-[#00357A]">Our Process</h2>
        <p className="text-[#727272] mt-6 w-[90%] ">
          Partner with the many businesses that have elevated their operations through DevNexus Solutions' tailored software development services. Get in touch with us today to discover how our custom software experts can drive your business toward greater success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {processSteps.map((step, idx) => (
          <div key={idx} className="border-2 border-[#00357A] rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300 w-[90%]">
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
