import React from "react";
import Particles from "./Particles";
import TypingEffect from "./TypingEffect";
import Slideshow from "./Slideshow";
import Image from "next/image";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const images = [
  "images/student.jpg",
  "images/workin.jpg",
  "images/teaching.jpg",
  "images/vball.jpg",
  "images/climb.jpg"
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      {/* Main Content Container */}
      <div className="relative min-h-[88vh] w-full flex items-center justify-center px-4">
        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="flex flex-col items-center justify-center w-full space-y-8">
            <div className="flex flex-col items-center lg:items-start space-y-8">
              <h1 className="text-[40px] text-white font-sans font-bold text-center lg:text-left">
                hi! i&apos;m gabriel.
                <br/>
                <TypingEffect />
              </h1>
              
              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start space-x-8">
                <a
                  href="/Gabriel_Sha_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-[#4285F4] hover:bg-[#4285F4]/90 text-white px-5 py-2.5 rounded-lg transition-colors duration-300"
                >
                  <Image
                    src="/download.svg"
                    width={25}
                    height={25}
                    alt="download button icon"
                  />
                  <span className="text-sm font-medium">Resume</span>
                </a>
                
                {/* Social Icons */}
                <div className="flex space-x-8">
                  <a
                    href="mailto:gsha@andrew.cmu.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#EA4335] flex items-center justify-center transition-colors duration-300"
                  >
                    <SiGmail className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gabriel-sha-64b581251/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center transition-colors duration-300"
                  >
                    <FaLinkedinIn className="text-white text-xl" />
                  </a>
                  <a
                    href="https://github.com/gsha22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#333] flex items-center justify-center transition-colors duration-300"
                  >
                    <FaGithub className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slideshow Section */}
          <div className="hidden lg:flex justify-center">
            <Slideshow images={images} />
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <IoIosArrowDown className="text-2xl" />
      </div>
    </div>
  );
};

export default HomePage;
