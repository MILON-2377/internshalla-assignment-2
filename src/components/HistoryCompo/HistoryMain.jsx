"use client";
import React from "react";
import Text from "./Text";
import ThreeDImg from "./ThreeDImg";

export default function HistoryMain() {
  return (
    <div className="relative overflow-hidden w-full h-[36vh] sm:h-[78vh] lg:h-[120vh]">
      {/* menu icon */}
      <div className=" absolute sm:w-[100vw] w-[120vw] -left-4 sm:-left-10 h-[45vh] sm:h-[73vh] lg:h-[100vh] -top-[15vh] sm:-top-[10vh]  bg-gradient-to-t from-[#FFF280] to-[#FFC700] transform rotate-[8deg] "></div>

      {/* text section */}
      <Text />

      {/* image section */}
      <ThreeDImg />
    </div>
  );
}
