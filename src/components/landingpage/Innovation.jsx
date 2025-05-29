"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Design from "../../../public/images/design 1.svg";
import Image1 from "../../../public/images/innovation1.svg";
import Image2 from "../../../public/images/innovation2.svg";
import Image3 from "../../../public/images/innovation3.svg";
import Image4 from "../../../public/images/innovation4.svg";

const services = [
  { title: "User-focused, result-driven approach", icon: Image1 },
  { title: "Innovative Tech, Creative Solutions", icon: Image2 },
  { title: "Dedicated team of experts", icon: Image3 },
  { title: "Scalable & future-ready development", icon: Image4 },
];

export default function ServiceGrid() {
  const floatingCorners = [
    { className: "top-0 left-0", transform: "-scale-y-100" },
    { className: "top-0 right-0", transform: "-scale-x-100" },
    { className: "bottom-0 left-0", transform: "-scale-y-100" },
    { className: "bottom-0 right-0", transform: "-scale-100" },
  ];

  return (
    <section className="relative bg-[#E5EBF2] overflow-hidden py-16 px-4">
      {/* Floating Corners */}
      {floatingCorners.map((pos, idx) => (
        <motion.div
          key={idx}
          animate={{ y: [0, 10, 0, -10, 0], x: [0, 10, 0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className={`absolute w-[165px] h-[145px] ${pos.className} ${pos.transform}`}
        >
          <Image src={Design} alt={`corner-${idx}`} className="w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Services Grid with Center Box */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-3 gap-y-12">
        {/* Top Left Service */}
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-blue-100 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image src={services[0].icon} alt="" width={88} height={88} className="mb-3" />
          <p className="text-sm">{services[0].title}</p>
        </motion.div>

        {/* Center Box */}
        <motion.div
          className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-lg rounded-xl w-[477px] relative top-[70%] right-[10%]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-700">
          DevNexus Solutions is a leading digital agency delivering custom software, web/mobile apps, UI/UX design, and marketing services. We empower startups and enterprises with innovative, scalable, and user-focused digital solutions.
          </p>
        </motion.div>

        {/* Top Right Service */}
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-blue-100 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image src={services[1].icon} alt="" width={88} height={88} className="mb-3" />
          <p className="text-sm">{services[1].title}</p>
        </motion.div>

        {/* Bottom Left Service */}
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-blue-100 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image src={services[2].icon} alt="" width={88} height={88} className="mb-3" />
          <p className="text-sm">{services[2].title}</p>
        </motion.div>

        {/* Spacer to keep grid alignment */}
        <div className="hidden sm:block" />

        {/* Bottom Right Service */}
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-blue-100 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image src={services[3].icon} alt="" width={88} height={88} className="mb-3" />
          <p className="text-sm">{services[3].title}</p>
        </motion.div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#00357A", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border border-[#00357A] text-[#00357A] rounded-md font-medium transition-all"
        >
          Know more
        </motion.button>
      </div>
    </section>
  );
}
