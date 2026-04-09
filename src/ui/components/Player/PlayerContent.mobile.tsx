"use client";
import { PauseCircle, PlayCircle, SkipBack, SkipForward } from "phosphor-react";
import { usePlayer } from "@/client/providers/PlayerProvider";
import Image from "next/image";
import converDuration from "@/utils/convertDuration";
import TimeSlider from "./TimeSlider";

const PlayerContent = ({ open }: { open: boolean }) => {
  const { player, audio, play, pause } = usePlayer();

  if (!player.playback) return null;
  return (
    <div
      className={`flex flex-1 flex-col border border-neutral-700 bg-neutral-800  ${
        open ? "rounded-none" : "rounded-t-2xl"
      }`}
    >
      <div className="flex flex-col h-[80px] items-center justify-between p-4">
        <div className="flex flex-1 self-stretch justify-between gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-neutral-500">
            <Image
              src={player.playback.image}
              alt={player.playback.name}
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-1 items-center justify-between gap-0">
            <div>
              <h2 className="text-md font-bold">{player.playback.name}</h2>
              <h3 className="text-sm text-neutral-400">
                {converDuration(audio.duration)}
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <SkipBack size={28} weight="duotone" />
              {player.paused ? (
                <button onClick={play}>
                  <PlayCircle weight="duotone" size={32} />
                </button>
              ) : (
                <button onClick={pause}>
                  <PauseCircle weight="duotone" size={32} />
                </button>
              )}
              <SkipForward size={28} weight="duotone" />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col p-4 justify-center">
        <TimeSlider />
      </div>
    </div>
  );
};

export default PlayerContent;
