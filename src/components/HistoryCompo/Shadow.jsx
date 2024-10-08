import React from "react";
import shadowImg from "../../../public/HomeImg/jumpingDog.png";
import Image from "next/image";

export default function Shadow() {
  return (
    <div style={{ transform: "rotateX(180deg) "}}
      className="absolute opacity-[8%] transform w-[62%] top-[14.3%] sm:w-[65%] overflow-hidden
      sm:top-[22.3%] lg:w-[55%] lg:top-[36%] ">
      <Image src={shadowImg} alt="shadow 3d dog img" className=" w-full h-full object-cover" />
    </div>
  );
}
