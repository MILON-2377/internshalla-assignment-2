"use client";
import React from "react";
import { IoPlay } from "react-icons/io5";

export default function ScrollBar({ isScroll }) {
  return (
    <div className=" absolute sm:right-10  sm:top-[30vh] flex flex-col items-center justify-center gap-1 ">
      <button
        className={`${
          isScroll ? " bg-gray-500 " : " bg-[#90FFAE] "
        } p-1 rounded-md `}
      >
        <IoPlay className=" text-sm transform -rotate-90 text-white " />
      </button>
      <div className=" w-3 sm:h-[20vh] lg:h-[25vh] bg-gray-400 rounded-t-xl rounded-b-xl flex justify-center ">
        <div
          className={` ${
            isScroll ? " transform translate-y-[86%] " : ""
          } h-20 w-3 rounded-t-xl rounded-b-xl bg-green-300 `}
        ></div>
      </div>
      <button
        className={`${
          isScroll ? " bg-[#90FFAE] " : " bg-gray-500 "
        } p-1 rounded-md `}
      >
        <IoPlay className={`  text-sm transform rotate-90 text-white `} />
      </button>
    </div>
  );
}
