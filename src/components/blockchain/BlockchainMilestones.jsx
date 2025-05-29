
import Image from "next/image";
import milestoneImage from "../../../public/images/Blockchain/blockchain 2030.png";

const milestones = [
  {
    number: "01.",
    text: "By 2030 The blockchain market is projected to reach a market volume of nearly $1,432 million, growing at a CAGR of over 90%.",
  },
  {
    number: "02.",
    text: "By 2030 Blockchain is poised to generate a business value of $3.1 trillion by 2030.",
  },
  {
    number: "03.",
    text: "By 2030 The number of users in the cryptocurrency market is poised to reach $1 billion by 2030.",
  },
];

const BlockchainMilestones = () => {
  return (
    <section className="bg-white px-4 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00357A] mb-6">
            Blockchain’s Path to 2030 - Key Milestones
          </h2>
          <ul className="space-y-5">
            {milestones.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-[#00357A] text-xl font-bold min-w-[40px]">
                  {item.number}
                </span>
                <p className="text-gray-700">{item.text}</p>
              </li>
            ))}
          </ul>

          <button className="mt-8 bg-[#00357A] hover:bg-blue-800 text-white font-medium px-5 py-2 rounded">
            Consult Our Experts
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3">
          <Image
            src={milestoneImage}
            alt="Blockchain Visual"
            className="w-full h-auto rounded shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default BlockchainMilestones;
