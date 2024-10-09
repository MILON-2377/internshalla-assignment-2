"use client";

import GalleryMain from "@/components/Gallery/GalleryMain";
import HistoryMain from "@/components/HistoryCompo/HistoryMain";
import MerchandiseMain from "@/components/Marchandise/MerchandiseMain";
import DisplayingImg from "@/components/ProjectVision/DisplayingImg";
import RoadMapImg from "@/components/RoadMap/RoadMapImg";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);
  const expandRef = useRef(null);

  const handleScroll = () => {
    if (expandRef.current) {
      const rect = expandRef.current.getBoundingClientRect();
      // Check if the element is in view
      if (rect.top <= 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('/home.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflowY: "scroll",
        height: "100vh",
      }}
      className=" page-scroll-bar relative w-screen bg-no-repeat bg-cover bg-center"
    >
      <div
        ref={expandRef}
        className={`scroll-bar absolute bg-white ml-4 sm:ml-6 lg:ml-12 w-[93.5vw] h-[95vh] rounded-t-xl rounded-r-none  overflow-y-scroll transition-all duration-300 ${
          isFixed ? "fixed top-[64px]" : "top-[90vh]"
        }`}
      >
        <HistoryMain />

        {/* gallery section */}
        <GalleryMain />

        {/* project vision title */}
        <h1 className="text-[80px] font-bold leading-[200px] text-[#FFA800] mt-10 text-center ">
          PROJECT VISION
        </h1>

        {/* project vision section */}
        <section className="relative mt-[25vh]">
          <div className="relative w-full h-[40vh] sm:h-[70vh] lg:h-[120vh] overflow-hidden ">
            <div className="absolute w-[150vw] -right-[8%] h-[100%] top-[13%] sm:top-[15%] lg:top-[20%]  bg-gradient-to-t to-[#FFC700] from-[#FFF280] transform -rotate-[8deg] "></div>
          </div>
          <div className=" -top-[10%] relative w-full h-[20vh] sm:h-[40vh] lg:h-[70vh] overflow-hidden  ">
            <div className="absolute w-[150vw] -left-5 h-[100%] bottom-[20%] sm:bottom-[25%] lg:bottom-[20%] bg-gradient-to-t from-[#f9e325f6] to-[#FFF280] transform rotate-[8deg] "></div>
          </div>

          {/* displaying dog img */}
          <DisplayingImg />

          {/* text */}
          <p className=" w-[90%] left-[5%] text-center absolute bottom-[52%] sm:bottom-[47%] lg:bottom-[46%] text-sm sm:text-[24px] lg:text-[32px] font-[700] text-black leading-[20px] sm:leading-[30px] lg:leading-[38px] ">
            Our mission is to honor the heritage of the Alabay by creating a
            vibrant, loyal, and powerful community. Just as the Alabay protects
            its flock, we aim to build a pack that stands strong together.
          </p>

          {/* road map title */}
          <h2 className="absolute left-[5%] lg:left-[7%] top-[60%] lg:top-[60%] text-[45px] sm:text-[60px] lg:text-[100px] font-bold text-white ">ROAD MAP</h2>

          {/* road map image */}
          <RoadMapImg />

        </section>

        {/* merchandise section */}
        <MerchandiseMain />

        <div className="w-full h-[200vh] "></div>
      </div>
    </div>
  );
}
