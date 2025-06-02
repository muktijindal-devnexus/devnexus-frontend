'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const aboutDropdown = [
    { name: 'About', href: '/about' },
    { name: 'Our Team', href: '/ourteam' },
  ];

  const servicesDropdown = [
    { name: 'Web Development', href: '/fullstack' },
    { name: 'Mobile App Development', href: 'mobile-app' },
    { name: 'Digital Marketing', href: '/services/nlp' },
    { name: 'Mobile Development', href: '/services/ai-integration' },
    { name: 'Blockchain Development', href: '/services/ai-integration' },
    { name: 'AI Technologies', href: '/services/ai-integration' },

  ];

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
          <Link href="/" className="hover:text-blue-400">Home</Link>

          {/* About with dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-400">About</button>
            <div className="absolute left-0 top-full bg-white rounded-md shadow-md
             opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all flex justify-center items-left flex-col  mt-5 text-[#7E7E7E]
              duration-200 z-20 min-w-[200px]">
              {aboutDropdown.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services with dropdown */}
          <div className="relative group">
            <button className="hover:text-white hover:font-bold">Services</button>
            <div className="absolute left-0 top-full  text-[#7E7E7E] rounded-md 
            shadow-md opacity-0 group-hover:opacity-100 group-hover:visible invisible mt-5 flex justify-center items-left flex-col 
             transition-all duration-200 z-20 min-w-[300px] bg-white p-8">
              {servicesDropdown.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block p-2 text-sm hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {['Portfolio', 'Career', 'Blogs'].map((item, i) => (
            <Link key={i} href={`/${item.toLowerCase()}`} className="hover:text-white hover:font-bold">
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            className="bg-[#4D77AF] text-white text-sm px-4 py-2 rounded-md"
          >
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
          <Link href="/" className="block hover:text-blue-400">Home</Link>

          {/* About dropdown in mobile */}
          <div className="space-y-1">
            <p className="font-semibold">About</p>
            {aboutDropdown.map((item, index) => (
              <Link key={index} href={item.href} className="block pl-4 text-sm hover:text-blue-400">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Services dropdown in mobile */}
          <div className="space-y-1">
            <p className="font-semibold">Services</p>
            {servicesDropdown.map((item, index) => (
              <Link key={index} href={item.href} className="block pl-4 text-sm hover:text-blue-400">
                {item.name}
              </Link>
            ))}
          </div>

          {['Portfolio', 'Career', 'Blogs'].map((item, i) => (
            <Link key={i} href={`/${item.toLowerCase()}`} className="block hover:text-blue-400">
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            className="block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
          >
            Free Consultation
          </Link>
        </nav>
      )}
    </header>
  );
};
