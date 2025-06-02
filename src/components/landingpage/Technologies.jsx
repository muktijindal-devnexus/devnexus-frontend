"use client";
import React, { useState } from "react";
import Image from "next/image";

// Icon Imports
import HtmlIcon from "../../../public/images/html.png";
import CSSIcon from "../../../public/images/CSS.svg";
import ReactIcon from "../../../public/images/React.svg";
import NextIcon from "../../../public/images/Nextjs.svg";
import FlutterIcon from "../../../public/images/Flutter.svg";
import TailwindIcon from "../../../public/images/Tailwind.svg";
import MUIIcon from "../../../public/images/MUI.svg";
import NativeIcon from "../../../public/images/React.svg";
import FrontendIcon from "../../../public/images/Frontend.svg";
import BackendIcon from "../../../public/images/Backend.svg";
import DatabaseIcon from "../../../public/images/Database.svg";
import UIIcon from "../../../public/images/UI UX.svg";
import CMSIcon from "../../../public/images/CMS.svg";

const tabs = [
  { label: "Frontend", icon: FrontendIcon },
  { label: "Backend", icon: BackendIcon },
  { label: "Database", icon: DatabaseIcon },
  { label: "UI/UX", icon: UIIcon },
  { label: "CMS", icon: CMSIcon },
  { label: "Deveops", icon: CMSIcon },
];

const techData = {
  Frontend: [
    { name: "HTML 5", icon: HtmlIcon },
    { name: "CSS 3", icon: CSSIcon },
    { name: "REACT.JS", icon: ReactIcon },
    { name: "NEXT.JS", icon: NextIcon },
    { name: "FLUTTER", icon: FlutterIcon },
    { name: "TAILWIND", icon: TailwindIcon },
    { name: "MUI", icon: MUIIcon },
    { name: "REACT NATIVE", icon: NativeIcon },
  ],
  Backend: [
    { name: "Node.js", icon: ReactIcon },
    { name: "Express.js", icon: NextIcon },
    { name: "Nest.js", icon: TailwindIcon },
    { name: "Python", icon: FlutterIcon },
    { name: "Django", icon: FlutterIcon },
    { name: "Flask", icon: FlutterIcon },
    { name: "Sprint Boot", icon: FlutterIcon },

    { name: "Java", icon: FlutterIcon },
    { name: "GSpring Boot", icon: FlutterIcon },

    { name: "Graph QL", icon: FlutterIcon },
  ],
  Database: [
    { name: "MongoDB", icon: TailwindIcon },
    { name: "MySQL", icon: HtmlIcon },
    { name: "PostgreSQL", icon: CSSIcon },
    { name: "FireBase", icon: CSSIcon },
  ],
  "UI/UX": [
    { name: "Figma", icon: UIIcon },
    { name: "Adobe XD", icon: MUIIcon },
    { name: "Adobe Illustrator", icon: MUIIcon },
    { name: "Adobe Photoshop", icon: MUIIcon },
    { name: "Canva  ", icon: MUIIcon },


  ],
  CMS: [
    { name: "WordPress", icon: CMSIcon },
    { name: "Shopify", icon: MUIIcon },
    { name: "Webflow", icon: MUIIcon },
    { name: "Woo Commerce", icon: MUIIcon },
  ],
  Deveops: [
    { name: "AWS", icon: CSSIcon },
    { name: "EC2", icon: CSSIcon },
    { name: "Azure", icon: CSSIcon },
    { name: "Digital Ocean", icon: CSSIcon },
    { name: "Docker", icon: CSSIcon },
    { name: "Kubernetes", icon: ReactIcon },
    { name: "GitHub Actions", icon: HtmlIcon },
  ],
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="bg-white text-center">
      {/* Title */}
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-4xl text-[#335D95] font-semibold">
          Technologies <span className="font-bold text-[#00357A]">We Work</span> with
        </h1>
      </div>

      {/* Tabs with Icons */}
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#335D95] text-sm font-medium transition-all
              ${
                activeTab === tab.label
                  ? "bg-[#335D95] text-white"
                  : "bg-white text-[#335D95]"
              }`}
          >
            <Image src={tab.icon} alt={tab.label} width={16} height={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {techData[activeTab]?.map((tech) => (
          <div
            key={tech.name}
            className="border-1 border-[#00357A] rounded-2xl p-4 flex flex-col items-center justify-center select-none"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              className="mb-2"
              height={80}
            />
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
