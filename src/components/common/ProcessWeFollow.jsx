import React from "react";

export const ProcessWeFollow = () => {
  const steps = [
    {
      title: "Discovery & Requirement Gathering",
      description:
        "First we begin with the understanding of your brand's goals, potential audience and technical requirement needs to define the project scope clearly.",
    },
    {
      title: "Planning Strategy",
      description:
        "First we begin with the understanding of your brand's goals, potential audience and technical requirement needs to define the project scope clearly.",
    },
    {
      title: "UI UX Design",
      description:
        "First we begin with the understanding of your brand's goals, potential audience and technical requirement needs to define the project scope clearly.",
    },
    {
      title: "Frontend & Backend Development",
      description:
        "First we begin with the understanding of your brand's goals, potential audience and technical requirement needs to define the project scope clearly.",
    },
    {
      title: "Deployment",
      description:
        "First we begin with the understanding of your brand's goals, potential audience and technical requirement needs to define the project scope clearly.",
    },
    {
      title: "Maintenance & Support",
      description:
        "First we begin with the understanding of your brand's goals, potential audience and technical requirement needs to define the project scope clearly.",
    },
  ];

  return (
    <section className="bg-white overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto text-center">
      <div className="w-[50%] mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-medium text-[#00357A]">
          Process We Follow As The <span className="font-bold">Web Design</span>{" "}
          and <span className="font-bold">Web Development</span> services
        </h2>
        </div>
    

        <div className="mt-10 flex flex-col md:flex-row justify-center items-stretch gap-4 flex-wrap">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 bg-white text-[#00357A] p-4 rounded-lg shadow-md min-w-[120px] w-full 
              md:w-auto border border-gray-200 transition-all duration-300 hover:bg-[#335D95]
               hover:text-white hover:scale-105 hover:min-w-[220px] 
               hover:z-10 h-[200px] md:h-[400px] group"
            >
              {/* Default state - centered */}
              <div
                className="h-full flex flex-col items-center justify-center
               group-hover:hidden"
              >
                <h3 className="text-xl font-bold">{`0${index + 1}`}</h3>
                <hr className="border-gray-300 w-10 my-2" />
                <h4 className="font-semibold text-center">
                  {step.title}
                </h4>
              </div>

              {/* Hover state - left aligned */}
              <div className="h-full hidden group-hover:flex flex-col items-start justify-start text-left px-2">
                <h3 className="text-xl font-bold mb-2">{`0${index + 1}`}</h3>
                <hr className="border-gray-300 mb-4 w-10" />
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm leading-relaxed flex-1 overflow-y-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
