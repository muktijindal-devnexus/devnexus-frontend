// import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";

export default function Footer() {
  return (
    <section className="bg-[#003B80] text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 border-b border-white/30 pb-8">
        {/* Logo and Contact Info */}
        <div>
          <div className="flex items-center gap-2 pb-5">
            <img src="/images/logo.svg" alt="Logo" className="h-14 w-auto" />
            <div>
              <div>
                <h1 className="text-sm font-bold">DevNexus Solutions</h1>
                <p className="text-xs text-gray-300">INNOVATE • BUILD • GROW</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Email:</span>{" "}
            contactus@devnexus.in
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Phone:</span> +91
            9711010160
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Location:</span> 26-B,
            Spaze Itech Park, Sector-49, Gurgaon, 122001
          </p>
        </div>

        {/* Explore On */}
        <div className="pl-20">
          <h3 className="font-semibold text-white mb-2 ">Explore On</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold text-white mb-2">Our Services</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Mobile App Development</li>
            <li>Website Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="font-semibold text-white mb-2">Join Our Community</h3>
          {/* <div className="flex gap-3 mb-4 text-white text-xl">
            <FaInstagram />
            <FaFacebookF />
            <IoClose />
            <FaLinkedinIn />
          </div> */}
          <h4 className="text-sm font-medium mb-2">
            Subscribe us for Latest News
          </h4>
          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 text-sm rounded-md w-full text-black bg-white focus:outline-none focus:ring-0 focus:border-transparent"
            />

            <button className=" px-6 py-1 rounded-md text-sm text-white border border-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
