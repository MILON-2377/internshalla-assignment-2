"use client";
import React from "react";
import GamesSlides from "./GamesSlides";

export default function Games() {
  return (
    <div className="relative">
      <section className="relative mt-[25vh]">
        <div className="relative w-full h-[50vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden ">
          <div className="absolute w-[150vw] -right-[8%] h-[100%] top-[17%] sm:top-[15%] lg:top-[25%]  bg-gradient-to-t to-[#eac12c] from-[#fdf181] transform -rotate-[8deg] "></div>
        </div>
        <div className=" -top-[10%] relative w-full h-[20vh] sm:h-[40vh] lg:h-[70vh] overflow-hidden  ">
          <div className="absolute w-[150vw] -left-5 h-[100%] bottom-[20%] sm:bottom-[25%] lg:bottom-[20%] bg-gradient-to-t from-[#f0df49f6] to-[#fcf294] transform rotate-[8deg] "></div>
        </div>

        <div className=" absolute top-[25%] sm:top-[30%] w-full ">
          <p className=" text-[550%] leading-[160%] font-bold lg:text-[120px] text-white text-center lg:leading-[300px] ">
            GAMES
          </p>
          <p className=" text-[120%] sm:text-[150%] lg:text-[170%] text-center font-bold leading-[100%] lg:-mt-[5%] ">
            Stay tuned for upcoming games !
          </p>
        </div>
      </section>

      {/* games slides */}
        <GamesSlides />
     
    </div>
  );
}
