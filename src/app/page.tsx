'use client'
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

const HomeSection = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      {/* Navbar */}
      {/* <div className="relative z-50">
        <Navbar />
      </div> */}

      {/* HomePageText */}
      <div className="relative z-10">
        <HomePage />
      </div>
    </div>
  );
};

export default HomeSection;