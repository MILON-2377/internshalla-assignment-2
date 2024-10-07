"use client";

import { useEffect, useState, useRef } from "react";

const ExpandingDiv = () => {

  const expandedDiv = useRef(null);

  useEffect(() => {
    
  },[])

  return <div ref={expandedDiv} className="bg-blue-400 w-full absolute bottom-0 z-10 "></div>;
};

export default ExpandingDiv;
