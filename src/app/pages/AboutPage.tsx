import React from "react";
import { BentoGridItem } from "../components/BentoGrid";
import { gridItems } from "../data/bentoData"

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Text Column (spans 1 column, full height) */}
        <div className="md:row-span-2 bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
          <div className="font-sans text-white mb-8">
            <h1 className="text-4xl font-bold mb-6">about</h1>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Bento Grid Items */}
        {gridItems.map((item) => (
          <BentoGridItem 
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
