"use client";
import Image from "next/image";
import {
  DotsThreeCircleVertical,
  Headset,
  Heart,
  PlayCircle,
} from "phosphor-react";
import Spinner from "./Spinner";
import { Song, useCurrentSong } from "../atoms/playerAtom";
import { useState } from "react";
interface MiniSongProps extends Song {
  plays: number;
}

export const MiniSong = (props: MiniSongProps) => {
  return (
    <div className="flex items-center justify-between gap-4 ">
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-full bg-neutral-500"></div>
        <div className="flex flex-col gap-0">
          <h2 className="text-md font-bold">{props.title}</h2>
          <p className="text-sm text-neutral-500">{props.duration}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center gap-1">
          <Headset size={16} weight="duotone" className="text-neutral-400" />
          <p className="text-xs text-neutral-400">{props.plays}</p>
        </div>
        <PlayCircle size={32} weight="duotone" />
      </div>
    </div>
  );
};

const Song = (props: Song) => {
  const { imgSrc, title, duration, url } = props;
  const { changeSong, currentSong } = useCurrentSong();
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);
  async function handlePlay() {
    let finished = false;
    setTimeout(() => {
      !finished ? setLoading(true) : null;
    }, 250);
    await changeSong(props);
    finished = true;
    setLoading(false);
  }

  function handleLike() {
    setLiked(!liked);
  }
  return (
    <div className="relative aspect-[6/4.5] overflow-hidden rounded-2xl">
      <Image src={imgSrc} fill alt="Song 1" />
      <div className="absolute bottom-2 left-0 mx-2 w-[calc(100%_-_16px)] rounded-xl bg-neutral-700/30 p-3 px-4 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-2">
          <div className="overflow-hidden">
            <h1 className="text-md flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {title}
            </h1>
            <h2 className="text-xs text-gray-400">{duration}</h2>
          </div>

          <div className="flex gap-2 ">
            <button onClick={handleLike}>
              <Heart
                size={28}
                weight={liked ? "fill" : "duotone"}
                color={liked ? "red" : "white"}
              />
            </button>
            {loading ? (
              <Spinner size={28} />
            ) : (
              <PlayCircle
                size={28}
                weight="duotone"
                className="cursor-pointer transition-transform active:scale-90"
                onClick={handlePlay}
              />
            )}
            <DotsThreeCircleVertical
              className="cursor-pointer"
              size={28}
              weight="duotone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
