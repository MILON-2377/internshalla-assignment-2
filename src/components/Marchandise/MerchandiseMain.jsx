"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import capBg from "../../../public/Alabay Merch/cap mockup.png";
import pTshirt from "../../../public/Alabay Merch/pink tshirt.png";
import yTshirt from "../../../public/Alabay Merch/yellow tshirt.png";
import bHoddie from "../../../public/Alabay Merch/black hoodie.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// Merchandise items
const merchandises = [
  {
    title: "Item 1",
    img: capBg,
    bgImg: "/blue cap bck.png",
  },
  {
    title: "Item 2",
    img: pTshirt,
    bgImg: "/pink tee bck.png",
  },
  {
    title: "Item 3",
    img: yTshirt,
    bgImg: "/yellow tee bck.png",
  },
  {
    title: "Item 4",
    img: bHoddie,
    bgImg: "/black hoodie bck.png",
  },
];

export default function MerchandiseMain() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    afterChange: (current) => setCurrentIndex(current),
  };

  return (
    <div
      style={{
        backgroundImage: `url('${merchandises[currentIndex].bgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "50% calc(100% -10px)",
      }}
      className="relative z-50 w-[80vw] lg:h-[50vh] lg:w-[60vw] lg:py-10 rounded-lg sm:py-4 mx-auto bg-no-repeat sm:bg-contain bg-center mt-16 "
    >
      <Slider ref={sliderRef} {...settings}>
        {merchandises.map((item, idx) => (
          <Image
            key={idx + item.title}
            src={item.img}
            alt={item.title}
            className=" w-full h-[30vh] sm:h-[50vh] lg:h-[40vh] lg:object-contain object-cover "
          />
        ))}
      </Slider>

      {/* Custom Prev and Next buttons */}
      <button
        className="absolute left-4 top-[40%] z-10 bg-white border rounded-full p-2"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaArrowLeft className="font-thin" />
      </button>
      <button
        className="absolute right-4 top-[40%] z-10 bg-white border rounded-full p-2"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaArrowRight className=" font-thin " />
      </button>
    </div>
  );
}


