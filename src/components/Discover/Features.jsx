"use client";
import Link from "next/link";
import React from "react";
import { IoIosPlayCircle } from "react-icons/io";

export default function Features() {
  return (
    <div className=" absolute top-[50vh] left-5 lg:left-10 overflow-scroll lg:overflow-auto sm:overflow-hidden scroll-smooth ">
      <h1 className=" text-3xl font-bold text-[#90FFAE] ">FEATURES</h1>
      <p className=" text-white w-[80vw] mt-5 ">
        Explore a variety of landscapes, including mountains, forests, deserts,
        and ancient ruins. Use the Alabay's abilities to solve puzzles that
        involve moving objects, activating mechanisms, or finding hidden clues.
        <p className="mt-4">
          Discover relics that tell the story of the Alabay’s ancestors, each
          piece contributing to a larger narrative about the breed's role in
          ancient history. Unlock new skills and abilities for the Alabay,
          enhancing its capacity to explore and solve puzzles.
        </p>
        <p className=" font-bold mt-4 ">Challenge Modes:</p>
        <p className=" ml-4">
          <span className=" text-[#90FFAE] font-bold ">- Time Trials:</span>{" "}
          Compete in special timed challenges where the Alabai must navigate
          through complex mazes or complete puzzles within a time limit.
        </p>
        <p className="ml-4">
          -{" "}
          <span className=" text-[#90FFAE] font-bold ">
            {" "}
            Exploration Mastery:
          </span>{" "}
          A mode that rewards players for fully exploring every nook and cranny
          of the game’s world, uncovering all secrets
        </p>
      </p>

      {/* btn section */}
      <div className=" mt-10 flex items-center gap-5 ">
        <button className=" w-[12vw] py-1 px-2 rounded-3xl bg-white flex items-center gap-2 ">
          <IoIosPlayCircle className=" text-xl" />
          <span className=" text-sm font-semibold ">PLAY</span>
        </button>
        <Link
          href="/"
          className=" w-[12vw] py-1 text-white px-2 font-bold border-[2px] text-sm border-white rounded-3xl  flex justify-center items-center gap-2 "
        >
          EXIT
        </Link>
      </div>
    </div>
  );
}
