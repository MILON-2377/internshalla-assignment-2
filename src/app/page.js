"use client";

import HistoryMain from "@/components/HistoryCompo/HistoryMain";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);
  const expandRef = useRef(null);

  const handleScroll = () => {
    if (expandRef.current) {
      const rect = expandRef.current.getBoundingClientRect();
      // Check if the element is in view
      if (rect.top <= 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('/home.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflowY: "scroll",
        height: "100vh", 
      }}
      className=" page-scroll-bar relative w-screen p-10 bg-no-repeat bg-cover bg-center"
    >
      <div
        ref={expandRef}
        className={`scroll-bar absolute w-[93.5vw] h-[95vh] rounded-t-xl rounded-r-none  overflow-y-scroll transition-all duration-300 ${
          isFixed ? "fixed top-[64px]" : "top-[90vh]"
        }`}
      >
        <HistoryMain />
      </div>
    </div>
  );
}
