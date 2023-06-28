import { motion, useSpring, MotionConfig } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { usePlayer } from "../atoms/playerAtom";

type Lyric = {
  text: string;
  start: number;
};
type LyricsProps = {
  lyrics: Lyric[];
};

type LyricItemProps = {
  lyric: Lyric;
  active?: boolean;
  onClick: () => void;
};
const LyricItem = ({ lyric, active = false, onClick }: LyricItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex h-10 flex-shrink-0 cursor-pointer items-center justify-center self-stretch ${
        active ? "opacity-100" : "opacity-50"
      }`}
    >
      {lyric.text}
    </div>
  );
};
const Lyrics = (props: LyricsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { audioElement } = usePlayer();
  const limit = Math.floor(height / 40);
  const [activeLyric, setActiveLyric] = useState(0);
  const y = useSpring(0);
  useEffect(() => {
    setHeight(containerRef.current?.clientHeight || 0);
  }, []);

  useEffect(() => {
    function onTimeUpdate() {
      props.lyrics.forEach((lyric, index) => {
        if (audioElement.currentTime >= lyric.start) {
          if (index + 1 >= limit) {
            y.set((index + 2 - limit) * -40);
          } else {
            y.set(0);
          }
          setActiveLyric(index);
        }
      });
    }
    audioElement.addEventListener("timeupdate", onTimeUpdate);
    return () => audioElement.removeEventListener("timeupdate", onTimeUpdate);
  }, [audioElement, limit, props.lyrics, y]);

  const handleClick = (lyric: Lyric) => {
    audioElement.currentTime = lyric.start;
  };

  return (
    <div
      className="mx-4 mb-4 flex flex-1 flex-col items-center overflow-hidden "
      ref={containerRef}
    >
      <MotionConfig transition={{ type: "tween" }}>
        <motion.div className="flex flex-1 flex-col" style={{ y }}>
          {props.lyrics.map((lyric, index) => (
            <LyricItem
              key={index}
              lyric={lyric}
              active={activeLyric === index}
              onClick={() => handleClick(lyric)}
            />
          ))}
        </motion.div>
      </MotionConfig>
    </div>
  );
};

export default Lyrics;
