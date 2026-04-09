"use client";
import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { useAudioElement } from "@/client/audio/useAudioElement";
import converDuration from "@/utils/convertDuration";

const TimeSlider = () => {
  const audioElement = useAudioElement();
  const [value, setValue] = useState([0]);

  const handleCommit = (values: number[]) => {
    audioElement.currentTime = (audioElement.duration / 100) * values[0];
  };

  const handleTimeUpdate = () => {
    setValue([(audioElement.currentTime / audioElement.duration) * 100]);
  };
  return (
    <div className="flex gap-3">
      <div
        ref={() => {
          audioElement.addEventListener("timeupdate", handleTimeUpdate);
          return () => {
            audioElement.removeEventListener("timeupdate", handleTimeUpdate);
          };
        }}
        className=" flex-shrink-0 text-xs"
      >
        {audioElement &&
          converDuration((audioElement.duration / 100) * value[0])}
      </div>
      <Slider.Root
        className="relative flex h-[15px] w-full touch-none select-none items-center"
        defaultValue={value}
        onValueChange={setValue}
        onValueCommit={handleCommit}
        max={100}
        value={value}
        step={1}
        aria-label="Volume"
      >
        <Slider.Track className="relative h-[3px] flex-1 rounded-full bg-black">
          <Slider.Range className="absolute h-full rounded-full bg-white" />
        </Slider.Track>
        <Slider.Thumb className="block h-[12px] w-[12px] rounded-full bg-white focus:outline-none" />
      </Slider.Root>
      <div className=" flex-shrink-0 text-xs">
        {audioElement && converDuration(audioElement.duration)}
      </div>
    </div>
  );
};

export default TimeSlider;
