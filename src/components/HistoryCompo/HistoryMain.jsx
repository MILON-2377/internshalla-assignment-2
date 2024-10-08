"use client";
import React from 'react'
import HistoryText from './HistoryText';
import Text from './Text';
import ThreeDImg from './ThreeDImg';

export default function HistoryMain() {
  return (
    <div className="relative overflow-hidden">

        {/* reactangle with text compo */}
        <HistoryText />

        {/* text section */}
        <Text />

        {/* image section */}
        <ThreeDImg />

        <div className="h-[2000px] w-full mt-[200px] "></div>
      
    </div>
  )
}
