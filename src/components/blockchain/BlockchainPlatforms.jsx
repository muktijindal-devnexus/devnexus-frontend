import Image from "next/image";

// Update this array with actual image paths
const platforms = [
  { name: "Etherium", src: "/platforms/ethereum.png" },
  { name: "Solana", src: "/platforms/solana.png" },
  { name: "Hyperledger", src: "/platforms/stellar.png" },
  { name: "Corda", src: "/platforms/hyperledger.png" },
  { name: "Polkadot", src: "/platforms/credits.png" },
  { name: "Steller", src: "/platforms/bigchaindb.png" },
  { name: "Hadera", src: "/platforms/hashgraph.png" },
  { name: "Tezos", src: "/platforms/ripple.png" },
  { name: "Algorand", src: "/platforms/corda.png" },
  { name: "Stellar", src: "/platforms/multichain.png" },
  { name: "Cardano", src: "/platforms/tron.png" },
  { name: "Hybrid Chain", src: "/platforms/eos.png" },
  { name: "Multi-chain", src: "/platforms/eos.png" },

];

const BlockchainPlatforms = () => {
  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-10">
        <span className="text-blue-800 font-semibold">Blockchain</span> Platforms We Work On
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="flex flex-col items-center border rounded-lg shadow-sm p-4 w-full max-w-[120px] hover:shadow-md transition"
          >
            <Image
              src={platform.src}
              alt={platform.name}
              width={50}
              height={50}
              className="mb-3 object-contain"
            />
            <p className="text-sm font-medium text-gray-700 text-center">{platform.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlockchainPlatforms;
