"use client";
import { useState } from "react";
import ScrollItems from "./AllScroll";

export default function GalleryMain() {
  const [activeSection, setActionSection] = useState("all");

  const scrollToSection = (sectioin) => {
    setActionSection(sectioin);
  };

  return (
    <div className=" relative -mt-12 z-50 sm:-mt-16 lg:-mt-40 ">
      {/* gallery nav */}
      <section className=" w-[60%] sm:w-[30%]  mx-auto flex items-center justify-between mt-5 sm:mt-0 ">
        <button
          onClick={() => scrollToSection("all")}
          className={`lg:text-[32px] text-xl font-[900] text-[#353535] `}
        >
          All
        </button>
        <button
          onClick={() => scrollToSection("photos")}
          className="lg:text-[32px] text-xl font-[900] text-[#FFA800] "
        >
          Photos
        </button>
        <button
          onClick={() => scrollToSection("videos")}
          className={`lg:text-[32px] text-xl font-[900] text-[#353535] `}
        >
          Vidoes
        </button>
      </section>

      {/* scroll items displaying */}
      <ScrollItems section={activeSection} />
    </div>
  );
}
