"use client";
import Image from "next/image";
import { PlayCircle } from "phosphor-react";
import React from "react";
import { usePlayer } from "../atoms/playerAtom";
import { SongProps } from "../components/home/Song";
import converDuration from "../utils/convertDuration";
interface PlaylistSongProps extends SongProps {
  rank: number;
}
const PlaylistSong = (props: PlaylistSongProps) => {
  const { playSong } = usePlayer();
  return (
    <div className="flex items-center gap-2 bg-neutral-800 p-4">
      <div className="w-6">
        {props.rank > 8 ? props.rank + 1 : `0${props.rank + 1}`}
      </div>
      <div className="relative flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-full bg-neutral-600">
        <Image src={props.image} alt={props.title} width={48} height={48} />
      </div>
      <div className="flex flex-col gap-0">
        <h1 className="text-sm font-bold">{props.title}</h1>
        <h3 className="text-xs text-neutral-400">
          {converDuration(+props.duration)}
        </h3>
      </div>
      <button className="ml-auto text-[0px]" onClick={() => playSong(props)}>
        <PlayCircle weight="duotone" size={32} />
      </button>
    </div>
  );
};

export default PlaylistSong;
