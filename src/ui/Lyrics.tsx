"use client";

import { useSpring, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useCurrentSong } from "../atoms/playerAtom";
const variants = {
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, y: "100%", scale: 0.7, transition: { duration: 0.3 } },
};
const Lyrics = ({ lyrics }: any) => {
  const { audioElement } = useCurrentSong();
  const [activeLyric, setActiveLyric] = useState(0);
  const y = useSpring(0);

  useEffect(() => {
    function onTimeUpdate() {
      lyrics.forEach((lyric: any, index: number) => {
        if (audioElement.currentTime >= lyric.time) {
          setActiveLyric(index);
        }
      });
    }
    audioElement.addEventListener("timeupdate", onTimeUpdate);

    return () => audioElement.removeEventListener("timeupdate", onTimeUpdate);
  }, [y, audioElement, lyrics]);
  return (
    <div className="relative flex h-full flex-1 flex-col-reverse gap-8 overflow-hidden">
      <div className=" relative flex h-full flex-1 flex-col-reverse ">
        {lyrics.map((lyric: any, index: number) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 10000,
              }}
              variants={variants}
              animate={activeLyric === index ? "visible" : "hidden"}
              key={index}
              className={`absolute top-0 my-4 w-full text-center text-white md:top-auto`}
            >
              {lyric.text}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Lyrics;
