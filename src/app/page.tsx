'use client'
import Image from "next/image";
import Navbar from "./components/Navbar"; 
import Particles from "./components/Particles";

const HomeSection = () => {
  return (
    <>
      <Particles />
      <Navbar />
    </>
  );
};

export default HomeSection;