import Image from "next/image";
import React from "react";
import img1 from "../../../public/HomeImg/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png";
import img2 from "../../../public/HomeImg/DALL·E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png";
import img3 from "../../../public/HomeImg/DALL·E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png";
import img4 from "../../../public/HomeImg/DALL·E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png";

export default function ComunityAndFeature() {
  return (
    <div className=" mt-[14vh] sm:mt-48 lg:mt-[30vh] grid grid-cols-4 gap-3 sm:gap-4 mb-[200px] px-5 ">
      <div className=" h-[20vh] sm:h-[40vh] bg-gradient-to-b from-[#f9e31b] to-[rgba(255, 242, 128, 0)] transition-opacity rounded-l-xl flex flex-col gap-4 ">
        <p className=" text-xs sm:text-sm font-bold text-white text-center px-2 py-1 sm:p-4 ">
          Community Building and Initial Launch
        </p>
        <Image src={img1} alt="img 1" className=" -mt-3 w-[80vw] object-cover " />
      </div>
      <div className=" h-[20vh] sm:h-[40vh] bg-gradient-to-b from-[#00D4D4] to-[rgba(65, 255, 255, 0)] transition-opacity  ">
        <p className=" text-xs sm:text-sm font-bold text-white text-center p-2 sm:p-4 ">
          Merchandise Store Launch
        </p>
        <Image src={img2} alt="img 1" className=" mt-2 sm:mt-5 w-[80vw] object-cover " />
      </div>
      <div className="  h-[20vh] sm:h-[40vh] bg-gradient-to-b from-[#D427FF] to-[rgba(212, 39, 255, 0)] transition-opacity  ">
        <p className=" text-xs sm:text-sm font-bold text-white text-center p-2 sm:p-4 ">
          Community Events and contests
        </p>
        <Image src={img3} alt="img 1" className=" w-[80vw] object-cover " />
      </div>
      <div className=" h-[20vh] sm:h-[40vh] bg-gradient-to-b from-[#8F3A3C] to-[rgba(143, 58, 60, 0)] transition-opacity rounded-r-xl  ">
        <p className=" text-xs sm:text-sm font-bold text-white text-center p-2 sm:p-4 ">
          Expansion and New Features
        </p>
        <Image src={img4} alt="img 1" className=" mt-2 sm:mt-5 lg:mt-0 w-[80vw] object-cover " />
      </div>
    </div>
  );
}
