import React from "react";
import imgTwi from "../../public/HomeImg/DALL·E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png";
import Image from "next/image";


export default function SocialMediaLink() {
  return (
    <div className="mt-32 ml-20 ">
      <p className=" lg:text-7xl w-[50vw] font-bungee font-bold text-[#FFA800] ">
        SOCIAL MEDIA LINK
      </p>

      <div className=" relative overflow-hidden h-[105vh] ">
        <Image
          src={imgTwi}
          alt="image"
          className=" lg:ml-[20vw] mt-10 lg:w-[40vw] object-cover "
        />
        <Image
          src={imgTwi}
          alt="image"
          style={{transform: " rotateX(180deg)"}}
          className=" absolute top-[78vh] opacity-5 lg:ml-[20vw] mt-10 lg:w-[40vw] object-cover "
        />
      </div>
    </div>
  );
}
