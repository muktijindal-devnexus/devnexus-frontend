import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/logo.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-[#3E3E3E] h-[60px] select-none fixed top-0 left-0 w-full z-50
">
      <div className="flex justify-between items-center text-center h-full px-6">
        <div className="flex items-center space-x-4">
          <Image src={Logo} width={48} height={68} alt="LogoImage" />
          <h1 className="text-white text-lg font-semibold">
            DevNexus Solutions
          </h1>
        </div>

        <nav className="hidden md:flex md:items-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-gray-300 transition"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-white hover:text-gray-300 transition"
          >
            Project
          </Link>
          <button className=" text-white border-1 px-5 py-1 rounded-sm hover:bg-gray-200 transition">
            Contact Us
          </button>
        </nav>
      </div>
    </div>
  );
};
