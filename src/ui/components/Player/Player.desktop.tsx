"use client";
import React from "react";
import {
  PauseCircle,
  PlayCircle,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "phosphor-react";
import { usePlayer } from "@/client/providers/PlayerProvider";
import Image from "next/image";
import converDuration from "@/utils/convertDuration";
import TimeSlider from "./TimeSlider";
import VStack from "@/ui/layout/VStack";
import HStack from "@/ui/layout/HStack";

const PlayerDesktop = () => {
  const { player, audio, play, pause } = usePlayer();
  if (player.playback === null) return null;
  return (
    <VStack className="m-4 flex-1 self-stretch overflow-hidden">
      <HStack className="relative flex w-full items-center gap-2 p-4 bg-neutral-800 rounded-xl">
        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-neutral-500">
          <Image
            src={player.playback.image}
            alt={player.playback.name}
            className="object-cover object-center"
            fill
          />
        </div>
        <VStack className="gap-0.5">
          <h1 className="text-base font-bold">{player.playback.name}</h1>
          <h3 className="text-xs text-neutral-400">
            {converDuration(audio.duration)}
          </h3>
        </VStack>
      </HStack>

      <div className="flex w-full flex-col p-4 mt-auto">
        <div className=" flex w-full flex-1 items-center justify-between gap-1 pb-0">
          <Shuffle size={24} weight="duotone" />
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
          <Repeat size={24} weight="duotone" />
        </div>

        <div className=" w-full pt-2 self-stretch">
          <TimeSlider />
        </div>
      </div>
    </VStack>
  );
};

export default PlayerDesktop;
