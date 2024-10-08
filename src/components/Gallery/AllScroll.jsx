"use client";
import { useRef, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import img1 from "../../../public/HomeImg/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png";
import img2 from "../../../public/HomeImg/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png";
import img3 from "../../../public/HomeImg/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png";

import Image from "next/image";

export default function ScrollItems({ section }) {
  const [activeScrollItem, setActiveScrollItem] = useState(scrollItems);
  const containerRef = useRef(null);

  useEffect(() => {
    if (section === "all") setActiveScrollItem(scrollItems);
    if (section === "photos") setActiveScrollItem(photos);
    if (section === "videos") setActiveScrollItem(videos);
  }, [section]);

  const handleNext = () => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth / 1.5;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handlePrevious = () => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth / 1.5;
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-5 ">
      {/* Scrolling items */}
      <div
        ref={containerRef}
        className=" gallery flex overflow-x-auto overflow-y-hidden gap-5"
      >
        {/* all */}
        {section === "all" &&
          scrollItems.map((item, idx) => (
            <>
              {item.category === "video" ? (
                <div
                  key={idx + 1 + "sdd"}
                  className="snap-center flex-none sm:w-[40vw] w-[60vw] lg:h-[40vh] lg:w-[30vw] h-[25vh] sm:h-[30vh] rounded-md border "
                >
                  <video
                    className="w-full h-full object-cover rounded-md "
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div
                  key={idx + 1}
                  className="snap-center flex-none sm:w-[40vw] w-[60vw] lg:h-[40vh] lg:w-[30vw] h-[25vh] sm:h-[30vh] rounded-md border "
                >
                  <Image
                    className="w-full h-full object-cover "
                    src={item.src}
                    alt={item.titel}
                  />
                </div>
              )}
            </>
          ))}

        {/* for photos */}
        {section === "photos" &&
          photos?.map((item, idx) => (
            <div
              key={idx + 1 + "photos"}
              className="snap-center flex-none sm:w-[40vw] w-[60vw] lg:h-[40vh] lg:w-[30vw] h-[25vh] sm:h-[30vh] rounded-md border "
            >
              <Image
                className="w-full h-full object-cover "
                src={item.src}
                alt={item.titel}
              />
            </div>
          ))}

        {/* for vidoes */}
        {section === "videos" &&
          videos?.map((item, idx) => (
            <div
              key={idx + 1 + "video"}
              className="snap-center flex-none sm:w-[40vw] w-[60vw] lg:h-[40vh] lg:w-[30vw] h-[25vh] sm:h-[30vh] rounded-md border "
            >
              <video
                className="w-full h-full object-cover rounded-md "
                controls
                autoPlay
                muted
                loop
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
      </div>

      {/* Scroll buttons */}
      <button
        onClick={handlePrevious}
        className={`absolute left-10 top-[40%]  py-4 px-3 rounded-md bg-black text-white `}
      >
        <FaArrowLeft className="text-2xl font-bold " />
      </button>
      <button
        onClick={handleNext}
        className=" top-[40%] py-4 px-3 rounded-md bg-black text-white absolute right-10"
      >
        <FaArrowRight className="text-2xl font-bold" />
      </button>
    </div>
  );
}

// scrolling items
const scrollItems = [
  {
    titel: "img1",
    category: "video",
    src: "https://videos.pexels.com/video-files/3194277/3194277-hd_1920_1080_30fps.mp4",
  },
  {
    titel: "img1",
    category: "photo",
    src: img2,
  },
  {
    titel: "img1",
    category: "video",
    src: "https://videos.pexels.com/video-files/1795797/1795797-hd_1920_1080_30fps.mp4",
  },
  {
    titel: "img3",
    category: "photo",
    src: img1,
  },
  {
    titel: "img1",
    category: "video",
    src: "https://videos.pexels.com/video-files/3191420/3191420-uhd_2560_1440_25fps.mp4",
  },
  {
    titel: "img2",
    category: "photo",
    src: img3,
  },
  {
    titel: "img3",
    category: "video",
    src: "https://videos.pexels.com/video-files/3191420/3191420-uhd_2560_1440_25fps.mp4",
  },
];

const photos = [
  {
    titel: "img1",
    src: img1,
  },
  {
    titel: "img2",
    src: img2,
  },
  {
    titel: "img3",
    src: img3,
  },
  {
    titel: "img1",
    src: img1,
  },
  {
    titel: "img2",
    src: img2,
  },
  {
    titel: "img2",
    src: img3,
  },
];

const videos = [
  {
    titel: "img3",
    category: "video",
    src: "https://videos.pexels.com/video-files/3191420/3191420-uhd_2560_1440_25fps.mp4",
  },
  {
    titel: "img1",
    category: "video",
    src: "https://videos.pexels.com/video-files/3191420/3191420-uhd_2560_1440_25fps.mp4",
  },
  {
    titel: "img1",
    category: "video",
    src: "https://videos.pexels.com/video-files/3194277/3194277-hd_1920_1080_30fps.mp4",
  },
  {
    titel: "img1",
    category: "video",
    src: "https://videos.pexels.com/video-files/1795797/1795797-hd_1920_1080_30fps.mp4",
  },
];
