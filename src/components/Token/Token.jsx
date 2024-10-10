import Image from "next/image";
import React from "react";
import img1 from "../../../public/HomeImg/DALL·E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png";

export default function Token() {
  return (
    <div className=" relative -mt-[24vh] sm:-mt-[26vh] lg:-mt-[15vh] ">
      <div className="relative w-full h-[40vh] sm:h-[40vh] lg:h-[70vh] overflow-hidden ">
        <div className="absolute w-[150vw] -right-[8%] h-[100%] top-[17%] sm:top-[25%] lg:top-[35%]  bg-gradient-to-t to-[#f1c72f] from-[#fff599] transform -rotate-[8deg] "></div>
      </div>
      <div className=" -top-[10%] relative w-full h-[20vh] sm:h-[55vh] lg:h-[65vh] overflow-hidden  ">
        <div className="absolute w-[150vw] -left-5 h-[100%] bottom-[20%] sm:bottom-[25%] lg:bottom-[20%] bg-gradient-to-t from-[#f0df49f6] to-[#fff599] transform rotate-[8deg] "></div>
      </div>

      <p className=" absolute text-xl sm:text-5xl lg:text-7xl text-white font-bungee top-[15vh] sm:top-[17vh] left-10 lg:top-[30vh] lg:left-20 ">TOKENOMICS</p>
      <div className=" w-[35vw] lg:w-[25vw] absolute left-10 top-[20vh] sm:top-[25vh] lg:left-20 lg:top-[50vh] flex flex-col items-center justify-center gap-5 ">
        <div className=" w-full bg-[#353535] rounded-xl py-3 px-5 ">
            <p className=" font-bungee font-bold text-sm sm:text-xl lg:text-2xl text-white ">LIQUIDITY</p>
            <p className=" text-xl sm:text-2xl lg:text-4xl font-bungee font-bold text-[#FFF280] ">LOCKED</p>
        </div>
        <div className=" w-full bg-[#353535] rounded-xl py-3 px-5 ">
            <p className=" font-bungee font-bold text-sm sm:text-xl lg:text-2xl text-white ">CONTRACT</p>
            <p className=" text-xl sm:text-2xl lg:text-4xl font-bungee font-bold text-[#FFF280] ">RENOUNCED</p>
        </div>
        <div className=" w-full bg-[#353535] rounded-xl py-3 px-5 ">
            <p className=" font-bungee font-bold text-sm sm:text-xl lg:text-2xl text-white ">RENOUNCED</p>
            <p className=" text-xl sm:text-2xl lg:text-4xl font-bungee font-bold text-[#FFF280] ">0%</p>
        </div>
      </div>

      {/* image */}
      <div className=" absolute h-[30vh] sm:h-[60vh] lg:h-[86vh] top-[20vh] sm:top-[18vh] lg:top-[30vh] overflow-hidden right-0 ">
            <Image src={img1} alt="cartoon illustate image" 
            className=" w-[50vw] sm:w-[50vw] lg:w-[37vw] relative object-cover  "
            />
            <Image src={img1} alt="cartoon illustate image" 
            style={{transform: " rotateX(180deg) "}}
            className=" w-[50vw] sm:w-[50vw] lg:w-[37vw] -top-[6vh] sm:-top-[15vh] lg:-top-[20vh] relative  object-cover opacity-5  "
            />
      </div>
    </div>
  );
}
