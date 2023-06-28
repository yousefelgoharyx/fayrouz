"use client";
import { useRef, useEffect, useState } from "react";
import { usePlayer } from "../atoms/playerAtom";
import * as Slider from "@radix-ui/react-slider";
import converDuration from "../utils/convertDuration";
const MusicBar = () => {
  const currentTimeRef = useRef<HTMLDivElement>(null);
  const { audioElement, seek } = usePlayer();
  const [value, setValue] = useState([0]);
  const isChanging = useRef<boolean>();
  const timeoutRef = useRef<any>();
  useEffect(() => {
    audioElement.addEventListener("timeupdate", () => {
      if (!isChanging.current) {
        setValue([(audioElement.currentTime / audioElement.duration) * 100]);
      }
    });
  }, [audioElement]);

  function handleValueChange(value: number[]) {
    clearTimeout(timeoutRef.current);
    isChanging.current = true;
    setValue(value);
    timeoutRef.current = setTimeout(() => {
      seek(value[0]);
    }, 40);
  }

  return (
    <div className="flex flex-1 items-center gap-2">
      <div ref={currentTimeRef} className="w-6 flex-shrink-0 text-xs">
        {converDuration((audioElement.duration / 100) * value[0])}
      </div>
      <Slider.Root
        className="relative flex h-5 w-full touch-none select-none items-center"
        defaultValue={value}
        onValueChange={handleValueChange}
        onValueCommit={() => (isChanging.current = false)}
        max={100}
        value={value}
        step={1}
        aria-label="Volume"
      >
        <Slider.Track className="relative h-1 flex-1 rounded-full bg-black">
          <Slider.Range className="absolute h-full rounded-full bg-white" />
        </Slider.Track>
        <Slider.Thumb className="block h-3 w-3 rounded-full bg-white focus:outline-none" />
      </Slider.Root>
      <div className="w-6 flex-shrink-0 text-xs">
        {converDuration(audioElement.duration)}
      </div>
    </div>
  );
};

export default MusicBar;
