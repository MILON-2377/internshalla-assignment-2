import React from "react";
import img from "../../../public/HomeImg/dogGroup.png";
import Image from "next/image";

export default function DisplayingShadow() {
  return (
    <div className="relative">
      <Image src={img} alt="dog group" className=" absolute top-0 w-full  object-cover " />
    </div>
  );
}
