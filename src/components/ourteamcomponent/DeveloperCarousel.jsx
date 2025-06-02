'use client'
import { useState } from "react";
import DeveloperCard from "./DeveloperCard";
import FilterButtons from "./FilterButtons";

const developers = [
  {
    name: "Ashish Sharma",
    role: "Lead Frontend Developer",
    experience: "5+ years",
    skills: ["Bootstrap", "CSS3", "HTML5"],
    imgUrl: "/avatar1.png",
  },
  {
    name: "Ashish Sharma",
    role: "Lead Frontend Developer",
    experience: "5+ years",
    skills: ["Tailwind CSS", "HTML5", "Bootstrap"],
    imgUrl: "/avatar2.png",
  },
  {
    name: "Ashish Sharma",
    role: "Lead Backend Developer",
    experience: "5+ years",
    skills: ["HTML5", "CSS3", "Tailwind CSS"],
    imgUrl: "/avatar3.png",
  },
];

const DeveloperCarousel = () => {
  const [activeFilter, setActiveFilter] = useState("HTML5 / CSS3");

  const matchSkills = (skills, filter) => {
    if (filter === "HTML5 / CSS3") {
      return skills.includes("HTML5") || skills.includes("CSS3");
    }
    return skills.includes(filter);
  };

  const filtered = developers.filter((dev) =>
    matchSkills(dev.skills, activeFilter)
  );

  return (
    <div className="text-center px-4">
      <h2 className="text-2xl font-semibold text-[#00357A] mb-4">
        Frontend Developers
      </h2>

      <FilterButtons active={activeFilter} setActive={setActiveFilter} />

      <div className="flex items-center justify-center gap-6 mt-6">
        {/* Left Arrow */}
        <button className="text-2xl text-[#00357A]">{'<'}</button>

        {/* Cards */}
        {filtered.map((dev, idx) => (
          <DeveloperCard key={idx} {...dev} />
        ))}

        {/* Right Arrow */}
        <button className="text-2xl text-[#00357A]">{'>'}</button>
      </div>
    </div>
  );
};

export default DeveloperCarousel;
