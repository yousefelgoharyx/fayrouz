"use client";
import { usePlayer } from "@/client/providers/PlayerProvider";
import Image from "next/image";
import { Heart, PauseCircle, PlayCircle } from "phosphor-react";

export type SongProps = {
  id: string;
  name: string;
  image: string;
  url: string;
  duration: string;
  liked: boolean;
};
const Song = (props: SongProps) => {
  const { image, name, duration, liked, url, id } = props;
  const { loadAndPlay, play, pause, player } = usePlayer();

  const handlePlay = () => {
    loadAndPlay({
      name,
      image,
      url,
      id,
    });
  };

  return (
    <div className="relative aspect-[6/4.5] overflow-hidden rounded-2xl">
      <Image src={image} className="object-cover" fill alt="Song 1" />
      <div className="absolute bottom-2 left-0 mx-2 w-[calc(100%_-_16px)] rounded-xl bg-neutral-700/30 p-3 px-4 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-2">
          <div className="overflow-hidden">
            <h1 className="text-md flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {name}
            </h1>
            <h2 className="text-xs text-gray-400">{duration}</h2>
          </div>

          <div className="flex gap-2 ">
            <button>
              <Heart
                size={28}
                weight={liked ? "fill" : "duotone"}
                className="cursor-pointer transition-transform active:scale-90"
                color={liked ? "#ff3333" : "white"}
              />
            </button>

            {player.paused ? (
              <PlayCircle
                size={28}
                weight="duotone"
                className="cursor-pointer transition-transform active:scale-90"
                onClick={player.playback?.id === id ? play : handlePlay}
              />
            ) : player.playback?.id === id ? (
              <PauseCircle
                size={28}
                weight="duotone"
                className="cursor-pointer transition-transform active:scale-90"
                onClick={pause}
              />
            ) : (
              <PlayCircle
                size={28}
                weight="duotone"
                className="cursor-pointer transition-transform active:scale-90"
                onClick={handlePlay}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
