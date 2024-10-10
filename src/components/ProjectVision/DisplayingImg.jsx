import Image from "next/image";
import React from "react";
import img from "../../../public/HomeImg/dogGroup.png";

export default function DisplayingImg() {
  return (
    <div className="absolute -top-[7%] sm:-top-[10%] lg:-top-[11%] overflow-hidden p-5 ">
      <Image src={img} alt="dog group" className=" relative z-50 -top-[3.8vh] sm:-top-[6.5vh] lg:-top-[8vh] object-cover " />
      <Image src={img} alt="dog group" className=" absolute overflow-hidden top-[63.5%] sm:top-[70%] lg:top-[73%] right-[1.4%] px-5 transform rotate-[180deg] opacity-5 object-cover" />
    </div>
  );
}
