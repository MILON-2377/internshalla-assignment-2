import React from 'react';
import dogImg from "../../../public/HomeImg/jumpingDog.png";
import Image from 'next/image';

export default function ThreeDImg() {
  return (
    <div className="absolute z-20 w-[62%] top-[6%] sm:w-[65%] sm:top-[7%] lg:w-[55%] lg:top-[10%]  ">
      <Image src={dogImg} alt="3d dog image"
       className=" object-cover"
      />
    </div>
  )
}
