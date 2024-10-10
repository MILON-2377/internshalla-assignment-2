import React from 'react';
import dogImg from "../../../public/HomeImg/jumpingDog.png";
import Image from 'next/image';

export default function ThreeDImg() {
  return (
    <div className="absolute h-[100vh] lg:h-[90vh] top-[8vh] sm:top-[15vh] lg:top-[15.3vh] overflow-hidden">
      <Image src={dogImg} alt="dog group" className=" relative w-[58vw] lg:w-[42vw] z-50 object-cover " />
      <Image src={dogImg} alt="dog group"
      style={{transform: "rotateX(180deg)", opacity:"0.1"}}
      className=" absolute w-[58vw] lg:w-[42vw] top-[19.5vh] sm:top-[43vh] lg:top-[62.6vh] object-cover" />
    </div>
  )
}
