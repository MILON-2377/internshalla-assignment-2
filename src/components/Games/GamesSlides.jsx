"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gamImg1 from "../../../public/games/alabay guard prev 2 1.png";
import gamImg2 from "../../../public/games/Alabay Guard prev gradient.png";
import gamImg3 from "../../../public/games/Alabay heritage prev gradient.png";
import gamImg4 from "../../../public/games/alabay lost heritage prev 1.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

// games images
const gameImages = [
  {
    title: "Item 1",
    img: gamImg1,
  },
  {
    title: "Item 2",
    img: gamImg2,
  },
  {
    title: "Item 3",
    img: gamImg3,
  },
  {
    title: "Item 4",
    img: gamImg4,
  },
];

export default function GamesSlides() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className=" -mt-[25vh] sm:-mt-[40vh] relative w-[95%] lg:w-[60vw] border-4 border-white rounded-md mx-auto bg-no-repeat bg-cover bg-center">
      <Slider ref={sliderRef} {...settings}>
        {gameImages.map((item, idx) => (
          <Image
            key={idx + item.title}
            src={item.img}
            alt={item.title}
            className=" w-full h-[36vh] sm:h-[50vh] rounded-md object-cover "
          />
        ))}
      </Slider>

      {/* Custom Prev and Next buttons */}
      <button
        className="absolute right-10 top-[46%] z-10 bg-gray-600 rounded-md px-2 py-4"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaArrowRight className=" font-thin text-white text-2xl " />
      </button>

      {/* navigation btn */}
      <Link href="/discover" className="absolute flex font-bold text-white items-center justify-evenly right-[40%] top-[80%] z-10 w-[20vw] bg-[#843AFC] rounded-3xl p-2">
        Discover
        <FaArrowRight className=" font-thin text-white text-2xl " />
      </Link>
    </div>
  );
}
