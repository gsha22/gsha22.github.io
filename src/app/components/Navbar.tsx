import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleNav = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => setIsVisible(false), 300);
    } else {
      setIsVisible(true);
      setMenuOpen(true);
    }
  };

  return (
    <nav className="fixed w-full h-20 shadow-xl bg-[#c7ced6]">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/" className="nav-link">
          <Image
            src="/home.svg"
            alt="home icon"
            width={25}
            height={25}
            className="cursorPointer"
          />
        </Link>
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <Link href="/about">
              <li className="ml-10 font-sans nav-link">about</li>
            </Link>
            <Link href="/experience">
              <li className="ml-10 font-sans nav-link">experience</li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 font-sans nav-link">projects</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 font-sans nav-link">contact</li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden flex items-left">
          <button
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={toggleNav}
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out
                ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span 
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out
                ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span 
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out
                ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>
      {isVisible && (
        <div
          className={`md:hidden bg-[#f0f0f0] absolute top-20 left-0 w-full shadow-lg z-50
            ${menuOpen ? "animate-fadeInDown" : "animate-fadeOutUp"}`}
        >
          <div className="px-4 pt-4 pb-4 space-y-4">
            <ul>
              <Link href="/about">
                <li className="block font-sans text-gray-800 hover:text-gray-500">
                  about
                </li>
              </Link>
              <Link href="/experience">
                <li className="block font-sans text-gray-800 hover:text-gray-500">
                  experience
                </li>
              </Link>
              <Link href="/projects">
                <li className="block font-sans text-gray-800 hover:text-gray-500">
                  projects
                </li>
              </Link>
              <Link href="/contact">
                <li className="block font-sans text-gray-800 hover:text-gray-500">
                  contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;