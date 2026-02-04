"use client";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";
import React from "react";

export const ProgressBarShow = () => {
  return (
    <>
      <div>
        <ProgressBar
          color1="#c5c5c500"
          color2="#a19e9e"
          height="3px"
          position="fixed"
        />
      </div>
    </>
  );
};
