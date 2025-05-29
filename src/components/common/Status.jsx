import { FaThumbsUp, FaUsers } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

const StatusCard = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex justify-between items-center bg-white px-10 py-6 rounded-xl shadow-md border border-blue-200 w-full max-w-4xl">
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center px-4">
          <FaThumbsUp className="text-3xl text-blue-900 mb-2" />
          <h3 className="text-xl font-bold">96%</h3>
          <p className="text-sm text-gray-500">Satisfaction Rate</p>
        </div>

        {/* Divider */}
        <div className="border-l h-12 border-gray-300" />

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center px-4">
          <MdBusinessCenter className="text-3xl text-blue-900 mb-2" />
          <h3 className="text-xl font-bold">10+</h3>
          <p className="text-sm text-gray-500">Years of Business</p>
        </div>

        {/* Divider */}
        <div className="border-l h-12 border-gray-300" />

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center px-4">
          <FaUsers className="text-3xl text-blue-900 mb-2" />
          <h3 className="text-xl font-bold">1200+</h3>
          <p className="text-sm text-gray-500">Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
