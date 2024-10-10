import React from "react";
import roadMapImg from "../../../public/HomeImg/roadmap.png";
import Image from "next/image";

export default function RoadMapImg() {
  return (
    <div className="absolute h-[35vh] sm:h-[70vh] lg:h-[104vh] top-[68%] lg:top-[65.5%] -right-4 sm:right-0 overflow-hidden p-5 ">
      <Image
        src={roadMapImg}
        alt="roadmap dog img"
        className=" relative z-50 w-[55vw] lg:w-[36vw] sm:w-[48vw] -top-[1vh] sm:-top-[3.7vh] lg:-top-[5vh]  object-cover "
      />
      <Image
        src={roadMapImg}
        alt="dog group"
        className=" absolute right-[0.1%] top-[74%] sm:top-[67%] opacity-5 object-cover px-5"
        style={{ transform: 'rotateX(180deg)' }}
      />
    </div>
  );
}
