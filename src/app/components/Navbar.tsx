import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Controls rendering

  const toggleNav = () => {
    if (menuOpen) {
      // Start closing animation
      setMenuOpen(false);
      // Delay unmounting to match animation duration
      setTimeout(() => setIsVisible(false), 300); // Matches `duration-300`
    } else {
      // Open menu
      setIsVisible(true);
      setMenuOpen(true);
    }
  };

  return (
    <>
      <nav className="fixed w-full h-20 shadow-xl bg-[#f0f0f0]">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <Link href="/">
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
                <li className="ml-10 font-sans">about</li>
              </Link>
              <Link href="/experience">
                <li className="ml-10 font-sans">experience</li>
              </Link>
              <Link href="/projects">
                <li className="ml-10 font-sans">projects</li>
              </Link>
              <Link href="/contact">
                <li className="ml-10 font-sans">contact</li>
              </Link>
            </ul>
          </div>
          <div className="md:hidden flex items-left">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white 
              hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
              onClick={toggleNav}
            >
              {menuOpen ? (
                <Image
                  src="/x.svg"
                  alt="x button"
                  width={25}
                  height={25}
                />
              ) : (
                <Image
                  src="bars.svg"
                  alt="3 bar menu"
                  width={25}
                  height={25}
                />
              )}
            </button>
          </div>
        </div>
        {isVisible && (
          <div
            className={`md:hidden bg-[#f0f0f0] absolute top-20 left-0 w-full shadow-lg z-50
              ${
                menuOpen ? "animate-fadeInDown" : "animate-fadeOutUp"
              }`}
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
    </>
  );
};

export default Navbar;
