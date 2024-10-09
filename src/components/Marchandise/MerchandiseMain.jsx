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

export default function MerchandiseMain() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
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
      }}
      className="relative bg-center bg-no-repeat bg-cover py-8 mt-32 border "
    >
      <Slider ref={sliderRef} {...settings}>
        {merchandises.map((item, idx) => (
          <div key={idx + item.title} className=" relative  w-full h-[40vh] ">
            <Image
              src={item.img}
              alt={item.title}
              className=" w-full h-full object-contain "
            />
          </div>
        ))}
      </Slider>

      {/* Custom Prev and Next buttons */}
      <button
        className="absolute left-4 top-[40%] z-10 bg-white border rounded-full p-2"
        onClick={() => sliderRef.current.slickPrev()}
      >
        Prev
      </button>
      <button
        className="absolute right-4 top-[40%] z-10 bg-white border rounded-full p-2"
        onClick={() => sliderRef.current.slickNext()}
      >
        Next
      </button>
    </div>
  );
}

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
