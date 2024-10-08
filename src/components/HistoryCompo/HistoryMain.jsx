"use client";
import React from "react";
import HistoryText from "./HistoryText";
import Text from "./Text";
import ThreeDImg from "./ThreeDImg";
import Shadow from "./Shadow";

export default function HistoryMain() {
  return (
    <div className="relative overflow-hidden w-full h-[70vh] ">
      {/* reactangle with text compo */}
      <HistoryText />

      {/* text section */}
      <Text />

      {/* image section */}
      <ThreeDImg />

      {/* shadow img */}
      <Shadow />
    </div>
  );
}
