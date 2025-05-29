'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../../public/images/logo.svg";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
     <header className="bg-[#333] text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
          <div>
            <h1 className="text-sm font-bold">DevNexus Solutions</h1>
            <p className="text-xs text-gray-300">INNOVATE • BUILD • GROW</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Portfolio', 'Career', 'Blogs'].map((item, i) => (
            <Link key={i} href={`/${item.toLowerCase()}`} className="hover:text-blue-400">
              {item}
            </Link>
          ))}
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
            Free Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white text-xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#333] text-white px-4 py-4 space-y-3">
          {['Home', 'About', 'Services', 'Portfolio', 'Career', 'Blogs'].map((item, i) => (
            <Link key={i} href={`/${item.toLowerCase()}`} className="block hover:text-blue-400">
              {item}
            </Link>
          ))}
          <Link href="/contact" className="block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
            Free Consultation
          </Link>
        </nav>
      )}
    </header>
  );
};

