"use client";
import { useState } from "react";
import ScrollItems from "./AllScroll";

export default function GalleryMain() {
  const [activeSection, setActionSection] = useState("all");

  const scrollToSection = (sectioin) => {
    setActionSection(sectioin);
  };

  return (
    <div className="mt-10">
      {/* gallery nav */}
      <section className=" w-[50%] sm:w-[30%] lg:w-[25%] mx-auto flex items-center justify-between ">
        <button
          onClick={() => scrollToSection("all")}
          className={`lg:text-[32px] font-[900] text-[#353535] `}
        >
          All
        </button>
        <button
          onClick={() => scrollToSection("photos")}
          className="lg:text-[32px] font-[900] text-[#FFA800] "
        >
          Photos
        </button>
        <button
          onClick={() => scrollToSection("videos")}
          className={`lg:text-[32px] font-[900] text-[#353535] `}
        >
          Vidoes
        </button>
      </section>

      {/* scroll items displaying */}
      <ScrollItems section={activeSection} />
    </div>
  );
}
