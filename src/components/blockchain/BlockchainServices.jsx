"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery Process",
    description:
      "In the very first process we will understand your business goals, challenges and what changes we should start with. Through in depth research and market research trends, we assess the feasibility of blockchain for your use case and define a tailored roadmap.",
  },
  {
    number: "02",
    title: "Architecture & Select The Technology",
    description: "",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "",
  },
  {
    number: "04",
    title: "Blockchain Integration",
    description: "",
  },
  {
    number: "05",
    title: "Smart Contract and Backend Development",
    description: "",
  },
  {
    number: "06",
    title: "Testing",
    description: "",
  },
  {
    number: "07",
    title: "Deployment",
    description: "",
  },
];

const BlockchainServices = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        Our Blockchain Development Services
      </h2>
      <p className="text-sm text-gray-600 mb-10 max-w-2xl">
        At DevNexus Solutions we are following a systematic and collaborative approach to
        deliver the most securable, scalable and blockchain aligned solutions.
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Steps List */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4">
        {steps.map((step, index) => (
  <div
    key={index}
    onClick={() => setActiveStep(index)}
    role="button"
    tabIndex={0}
    className={`flex items-center gap-3 py-2 border-b cursor-pointer focus:outline-none ${
      activeStep === index ? "text-blue-700 font-medium" : "text-gray-600"
    }`}
  >
    <span className="w-8">{step.number}</span>
    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
      {step.title}
    </span>
    {activeStep === index && <span className="ml-auto">›</span>}
  </div>
))}

        </div>

        {/* Right: Content */}
        <div className="flex flex-col md:w-2/3">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-[#00357A] text-white px-3 py-1 rounded text-xl font-bold">
              {steps[activeStep].number}
            </div>
            <h3 className="text-xl font-semibold">{steps[activeStep].title}</h3>
          </div>
          <p className="text-gray-600 max-w-xl">
            {steps[activeStep].description || "Details coming soon..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlockchainServices;
