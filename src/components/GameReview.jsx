"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gamImg1 from "../../public/game-review/Abilities 2.png";
import gamImg2 from "../../public/game-review/artifacts 2.png";
import gamImg3 from "../../public/game-review/image 3 alabay guard 2.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

// game review images
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
];

export default function GameReview() {
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
    <div className="  relative w-[95%] mt-5 lg:w-[60vw] mx-auto bg-no-repeat bg-cover bg-center">
      <Slider ref={sliderRef} {...settings}>
        {gameImages.map((item, idx) => (
          <Image
            key={idx + item.title}
            src={item.img}
            alt={item.title}
            className=" h-[30vh] sm:h-[45vh] w-full rounded-md object-cover "
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

    </div>
  );
}
