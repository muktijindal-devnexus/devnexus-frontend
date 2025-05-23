const ExecutionSection = () => {
  const cards = [
    {
      id: 1,
      title: "Hybrid App Development",
      content: "Hybrid App Development combines both worlds, web and native apps, allowing us to build an app that works seamlessly on both iOS and Android systems. Hybrid apps are based on a single codebase, which reduces development time and cost while ensuring to improve user experience.",
      active: true
    },
    {
      id: 2,
      title: "Mobile UX Development",
      content: "At AI Database Solutions, we focus on creating intuitive interfaces that connect with users. Our team works closely with UI designers to craft experiences that not only look visually appealing but also significantly enhance user engagement and satisfaction.",
      active: false
    },
    {
      id: 3,
      title: "AI Integration",
      content: "Leverage cutting-edge artificial intelligence to automate processes, gain insights from data, and deliver personalized experiences. Our AI solutions integrate seamlessly with your existing systems.",
      active: false
    },
    {
      id: 4,
      title: "Cloud Solutions",
      content: "Scalable cloud infrastructure tailored to your business needs. We provide secure, reliable, and cost-effective cloud services with 24/7 monitoring and support.",
      active: false
    },
    {
      id: 5,
      title: "Data Analytics",
      content: "Transform raw data into actionable insights. Our analytics solutions help you make data-driven decisions with real-time dashboards and predictive modeling.",
      active: false
    },
    {
      id: 6,
      title: "IoT Development",
      content: "Build connected devices and smart solutions with our IoT expertise. From hardware integration to data visualization, we cover the full IoT spectrum.",
      active: false
    }
  ];

  return (
    <section className="px-6 lg:px-24 py-16 bg-white">
      {/* Top Title Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
        <h2 className="text-3xl font-bold text-[#1C3C6B] mb-4 lg:mb-0">
          From Ideas to Execution
        </h2>
        <p className="text-[#1C3C6B] max-w-xl text-lg leading-relaxed mt-2 lg:mt-0">
          Getting concepts from our client, we understand the requirement to build a robust mobile app for your business goals.
        </p>
      </div>

      {/* Card Scroll Row */}
      <div className="flex space-x-6 overflow-x-auto pb-4 ">
        {cards.map((card) => (
          <div 
            key={card.id}
            className={`min-w-[488px] max-w-[320px] p-10 rounded-xl border ${
              card.active ? 'border-[#1C3C6B] ring-2 ring-[#1C3C6B] ring-offset-2' : 'border-[#D3DBE6]'
            } shadow-lg bg-white transition-all duration-300 hover:shadow-xl`}
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[#1C3C6B] mr-3">
                {String(card.id).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-bold text-[#1C3C6B]">
                {card.title}
              </h3>
            </div>
            <p className="text-[#7B8794] text-base leading-relaxed">
              {card.content}
            </p>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
 
    </section>
  );
};

export default ExecutionSection;
