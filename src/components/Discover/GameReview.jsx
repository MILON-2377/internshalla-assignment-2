import React from "react";
import Image from "next/image";
import { IoIosPlayCircle } from "react-icons/io";
import gamImg1 from "../../../public/Alabay Games/Alabay Adventure - The Lost Heritage/overview.png";
import gamImg2 from "../../../public/Alabay Games/Alabay Adventure - The Lost Heritage/locations preview.png";
import gamImg3 from "../../../public/Alabay Games/Alabay Adventure - The Lost Heritage/artifacts.png";
import gamImg4 from "../../../public/Alabay Games/Alabay Adventure - The Lost Heritage/Abilities.png";

export default function GameReview() {
  return (
    <div>
      <button className=" px-4 py-2 bg-[#90FFAE] flex items-center gap-2  text-white text-xl font-semibold rounded-3xl w-[20vw] lg:w-[10vw] sm:ml-5 lg:ml-10 mt-16 ">
        <IoIosPlayCircle className=" text-2xl text-black " />
        Play
      </button>

      {/* game review */}
      <div className=" ml-5 sm:mt-40 lg:mt-20 w-[95vw] gap-5 lg:flex sm:grid grid-cols-3 items-center  ">
        <Image
          src={gamImg1}
          alt="game1"
          className=" sm:h-[25vh] lg:h-[35vh] object-cover rounded-xl border-2 "
        />

        <Image
          src={gamImg3}
          alt="game1"
          className=" sm:h-[25vh] lg:h-[35vh] object-cover rounded-xl border-2 "
        />
        <Image
          src={gamImg4}
          alt="game1"
          className=" sm:h-[25vh] lg:h-[35vh] object-cover rounded-xl border-2 "
        />
      </div>
    </div>
  );
}
