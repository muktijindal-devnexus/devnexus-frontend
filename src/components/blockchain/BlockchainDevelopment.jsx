const services = [
  {
    title: "NFT Marketplace Development",
    highlight: false,
  },
  {
    title: "Crypto Wallet Development",
    highlight: false,
  },
  {
    title: "Custom Blockchain Development",
    description:
      "Build your blockchain solution from scratch. At DevNexus Solutions, our team of experts is designing, developing, and deploying private, public blockchain networks with custom consensus algorithms and smart functionality.",
    highlight: true,
  },
  {
    title: "Smart Contract Development",
    highlight: false,
  },
  {
    title: "Decentralized Application (dApp) Development",
    highlight: false,
  },

];

const BlockchainDevelopment = () => {
  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           <div className=" mb-10">
        <h1 className="text-2xl md:text-4xl  text-[#00357A]">
          Our <span className="font-bold">Blockchain Development</span>{" "}
          Services
        </h1>
      </div>
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-md shadow-md h-full min-h-[220px] flex justify-center flex-col ${
              service.highlight
                ? "bg-[#335D95] text-white"
                : "bg-[#F4FAFF] text-blue-900 relative"
            }`}
          >
            {/* Top line decoration for normal cards */}
            {!service.highlight && (
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-transparent flex justify-end pr-4 pt-2">
                <span className="w-4 h-1 bg-blue-900 mr-1"></span>
                <span className="w-3 h-1 bg-blue-900"></span>
              </div>
            )}

            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

            {service.description && (
              <p className="text-sm font-light leading-relaxed">
                {service.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlockchainDevelopment;
