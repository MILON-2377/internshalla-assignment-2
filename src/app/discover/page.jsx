"use client";
import React, { useEffect, useState } from "react";
import GameReview from "@/components/Discover/GameReview";
import ScrollBar from "@/components/Discover/ScrollBar";
import Features from "@/components/Discover/Features";

export default function Discover() {
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowFeatures(true);
      } else {
        setShowFeatures(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url('/discover.png'), linear-gradient(226.59deg, rgba(24, 23, 28, 0) 17.03%, rgba(24, 23, 28, 0.76) 45.57%, #18171C 81.8%)",
      }}
      className="relative bg-center bg-fixed bg-cover bg-no-repeat w-[100vw] h-[110vh] "
    >
      <section className="sticky top-0"> 
        <h1 className="text-white font-bold flex flex-col gap-2 ml-5 lg:ml-10 py-10">
          <span className=" text-3xl sm:text-5xl lg:text-5xl">ALABAY HERITAGE</span>
          <span className=" text-xl sm:text-2xl text-[#90FFAE]">THE LOST ADVENTURE</span>
        </h1>
        <p className="px-5 -mt-5 sm:-mt-0 lg:px-10 text-xs sm:text-xl font-bold text-white w-[50vw]">
          Take on the role of the legendary Alabay on a quest to uncover the
          ancient secrets of its ancestors.
        </p>

        {/* ScrollBar */}
        <ScrollBar isScroll={showFeatures} />
      </section>

      {/* Conditionally render GameReview or Features */}
      <div className="min-h-[70vh]">
        {" "}
        {/* Increased height for proper scrolling */}
        {showFeatures ? <Features /> : <GameReview />}
      </div>
    </div>
  );
}
