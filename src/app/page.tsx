'use client'
// import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";

const HomeSection = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Navbar */}
        {/* <div className="relative z-50">
          <Navbar />
        </div> */}

        {/* HomePageText */}
        <div className="relative z-0">
          <HomePage />
        </div>
        {/* <div className="z-10">
          <AboutPage />
        </div> */}
      </div>
    </>
  );
};

export default HomeSection;