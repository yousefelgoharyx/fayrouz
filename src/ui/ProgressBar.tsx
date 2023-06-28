"use client";
import { useTime, useTransform, motion } from "framer-motion";
import React from "react";

type ProgressBarProps = {
  duration: number;
  onTimeChange: (time: number) => void;
};

const ProgressBar = ({ duration, onTimeChange }: ProgressBarProps) => {
  const time = useTime();
  const width = useTransform(time, [0, duration], ["0%", "100%"]);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    time.set((e.nativeEvent.offsetX / 204) * duration);

    width.set((e.nativeEvent.offsetX / 204) * 100 + "%");
    onTimeChange((e.nativeEvent.offsetX / 204) * duration);
  }
  return (
    <div
      className="relative h-[6px] w-[204px] cursor-pointer rounded-md bg-neutral-900"
      onClick={handleClick}
    >
      <motion.div
        style={{
          width,
        }}
        className="h-full w-full  cursor-pointer rounded-md bg-neutral-600"
      >
        {/* <motion.div
        
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[-1px] right-0 h-[8px] w-[8px] cursor-pointer touch-none rounded-full bg-neutral-500"
        ></motion.div> */}
      </motion.div>
    </div>
  );
};

export default ProgressBar;
