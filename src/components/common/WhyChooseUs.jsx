import { FaProjectDiagram } from "react-icons/fa";

const features = [
  {
    title: "Agile and Scalability",
    description:
      "Our agile methodology ensures faster delivery, flexibility to adapt to changes, and the ability to scale your app as the requirements of your business.",
  },
  {
    title: "Native Development",
    description:
      "Does not matter if you need a single codebase for Android, iOS app for a single codebase or both; we tailored our strategy to meet those requirements.",
  },
  {
    title: "Client Centric Approach",
    description:
      "We prioritise your vision and keep transparent communication clear, collaborative, and transparent from day one till launching of the app or beyond.",
  },
  {
    title: "End-to-End Expertise",
    description:
      "Our team of experts delivers end-to-end services from strategy to UI/UX design to development, testing, and deployment. We handle the full mobile app life cycle to ensure a seamless experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-light mb-12">
          What makes{" "}
          <span className="font-semibold text-blue-900">DevNexus Solutions</span> a better option
          for <span className="font-semibold text-blue-900">Mobile App Development</span> services?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-md shadow-sm p-6 flex flex-col gap-3"
            >
              <FaProjectDiagram className="text-2xl text-blue-900" />
              <h3 className="text-base font-semibold text-blue-900">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="bg-white border rounded-md shadow-sm p-6 flex flex-col gap-3">
            <FaProjectDiagram className="text-2xl text-blue-900" />
            <h3 className="text-base font-semibold text-blue-900">{features[3].title}</h3>
            <p className="text-sm text-gray-600">{features[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
