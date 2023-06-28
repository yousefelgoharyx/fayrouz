import Image from "next/image";
import React from "react";
import ShuffleIcon from "../icons/Shuffle";
import SkipBackIcon from "../icons/SkipBack";
import converDuration from "../utils/convertDuration";
import PlayPause from "./PlayPause";
import { PlayerAtom } from "../atoms/playerAtom";
import SkipForwardIcon from "../icons/SkipForward";
import RepeatIcon from "../icons/Repeat";
import MusicBar from "./MusicBar";
interface PlayerCardProps {
  onPlay: () => void;
  onPause: () => void;
  player: PlayerAtom;
}
const PlayerCard = ({ player, onPlay, onPause }: PlayerCardProps) => {
  return (
    <div className="m-4 flex flex-shrink-0 flex-col items-center overflow-hidden rounded-lg bg-neutral-800">
      <div className="relative flex w-full items-center gap-2 bg-neutral-900 p-4">
        <Image
          src={player.image}
          alt={player.title}
          width={75}
          height={75}
          className="aspect-square rounded-full"
        />
        <div className="flex flex-col ">
          <h1 className="text-lg font-bold">{player.title}</h1>
          <h3 className="text-sm text-neutral-400">
            {converDuration(+player.duration)} min
          </h3>
        </div>
      </div>

      <div className="flex w-full flex-col p-4">
        <div className=" flex w-full flex-1 items-center justify-between gap-1 pb-0">
          <ShuffleIcon size={24} weight="duotone" />
          <div className="flex items-center justify-between">
            <SkipBackIcon size={28} weight="duotone" />
            <PlayPause
              state={player.state}
              onClickPlay={onPlay}
              onClickPause={onPause}
            />
            <SkipForwardIcon size={28} weight="duotone" />
          </div>
          <RepeatIcon size={24} weight="duotone" />
        </div>

        <div className="flex w-full pt-2">
          <MusicBar />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
