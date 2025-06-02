import Image from "next/image";
import React from "react";
import ContactImage from "../../../public/images/contact/Contact.jpeg";
import Arrow from "../../../public/images/Arrow.svg";

export const Contact = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center text-white ">
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <Image src={ContactImage} alt="Contact" fill />
      </div>

      <div className="relative z-10 text-center px-4 flex justify-center items-center flex-col">
        <h1 className="text-3xl md:text-5xl font-bold text-[#00357A]">
          Let’s Connect & Build Something!
        </h1>
        <p className="mt-4 text-sm md:text-lg text-[#00357A] font-semibold w-[45%] p-2">
          Ready to take your digital presence to the next level? Let’s work
          together to build innovative solutions that drive results.
        </p>
        <button className="mt-20 border border-white text-white py-2 px-8 flex gap-4 rounded-xl bg-[#00357A]  transition duration-300">
          Free Consultation
          <Image src={Arrow} alt="arrow" width={40} height={20}  />
        </button>
      </div>
    </div>
  );
};
