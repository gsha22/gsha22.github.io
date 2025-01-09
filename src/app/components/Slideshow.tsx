'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideshowProps {
  images: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4140);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-[300px] h-[300px]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          fill
          sizes="300px"
          priority={index === 0} // Prioritize loading the first image
          className={`object-cover transition-opacity duration-1000 rounded-xl ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
