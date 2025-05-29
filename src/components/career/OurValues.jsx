import { FaUsers, FaBullseye, FaHourglassHalf, FaRegClipboard, FaBookOpen } from "react-icons/fa";

export default function OurValues() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white text-[#335D95]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-12 items-center">
          <h2 className="text-3xl font-bold text-[#335D95]">Our Values</h2>
          <p className="mt-4 lg:mt-0 max-w-xl text-[#000000]">
            From hiring people to training them for building solutions, we have diverse values to establish strong work culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Teamwork */}
          <div>
            <FaUsers className="text-[#335D95] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-[#335D95] mb-2">Teamwork</h3>
            <p className="text-[#727272]">
              At DevNexus Solutions, we believe in the power of teamwork to achieve shared goals. Our focus lies in effective collaboration and leveraging each team member’s unique skills, knowledge, and strengths to drive success.
            </p>
          </div>

          {/* Excellence */}
          <div>
            <FaBullseye className="text-[#335D95] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-[#335D95] mb-2">Excellence</h3>
             <p className="text-[#727272]">
              DevNexus strive for excellence ensures that the services offered meet or exceed customer expectations. We are committed to surpass standards and achieve the highest level of efficiency.
            </p>
          </div>

          {/* Transparency */}
          <div>
            <FaHourglassHalf className="text-[#335D95] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-[#335D95] mb-2">Transparency</h3>
            <p className="text-[#727272]">
              We promote openness, honesty, and the clear communication of information both internal and external. DevNexus shares information about its operations, decision-making processes, and financial performance openly.
            </p>
          </div>

          {/* Accountability */}
          <div>
            <FaRegClipboard className="text-[#335D95] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-[#335D95] mb-2">Accountability</h3>
            <p className="text-[#727272]">
              We make employees accountable to fulfill their duties and meet project deadlines. Employees take responsibility for one’s actions, decisions, and performance. Being accountable is the key aspect of a healthy work environment.
            </p>
          </div>

          {/* Continuous Learning */}
          <div>
            <FaBookOpen className="text-[#335D95] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-[#335D95] mb-2">Continuous Learning</h3>
            <p className="text-[#727272]">
              We ensure continuous learning for every employee for ongoing, voluntary, and self-motivated pursuit of personal development. Continuous learning is a critical component of professional development and career growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
