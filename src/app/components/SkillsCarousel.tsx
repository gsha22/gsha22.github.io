import React from "react";

const skills = ["JavaScript", "ReactJS", "TypeScript", "TailwindCSS", "Node.js", "Git", "Next.js"];

const SkillsCarousel: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-10 h-10 border border-red-500">
      <div className="absolute animate-slide flex space-x-10">
        {skills.map((skill, index) => (
          <span key={index} className="text-lg font-semibold whitespace-nowrap">
            {skill}
          </span>
        ))}
        {skills.map((skill, index) => (
          <span key={`repeat-${index}`} className="text-lg font-semibold whitespace-nowrap">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
