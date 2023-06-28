"use client";
import Image from "next/image";
import { SkipBack, SkipForward } from "phosphor-react";
import { usePlayer } from "../atoms/playerAtom";
import converDuration from "../utils/convertDuration";
import Lyrics from "./Lyrics.new";
import MusicBar from "./MusicBar";
import PlayerSheet from "./PlayerSheet";
import PlayPause from "./PlayPause";

const lyrics = [
  {
    text: "-- موسيقي --",
    start: 0,
  },
  {
    text: "دقّ الهوا عَ الباب .. قلنا حبايبنا ",
    start: 17,
  },
  {
    text: "قلنا الحلو اللي غاب .. جايي يعاتبنا",
    start: 25,
  },
  {
    text: "قمنا فتحنا الباب .. والشوق دوّبنا",
    start: 32,
  },
  {
    text: "تاري الهوا كذّاب .. قصدو يلاعبنا",
    start: 40,
  },

  {
    text: "دقّ الهوا عَ الباب .. قلنا حبايبنا ",
    start: 48,
  },
  {
    text: "قلنا الحلو اللي غاب .. جايي يعاتبنا",
    start: 56,
  },
  {
    text: "قمنا فتحنا الباب .. والشوق دوّبنا",
    start: 64,
  },
  {
    text: "تاري الهوا كذّاب .. قصدو يلاعبنا",
    start: 72,
  },

  {
    text: "تعب الشتا والنار غفيت بموقدنا ",
    start: 79,
  },

  {
    text: "لا في حكي ولا قمار تنزل وتاخذنا ",
    start: 87,
  },
  {
    text: "ودق الهوى على الباب قلنا الهوى كذاب",
    start: 95,
  },
  {
    text: "ولما فتحنا الباب طلوا حبايبنا",
    start: 103,
  },
];
const Player = () => {
  const { play, pause, player, audioElement } = usePlayer();
  if (!player)
    return (
      <div className="flex flex-1 items-center justify-center bg-neutral-800 text-xl font-bold">
        Play something
      </div>
    );
  return (
    <PlayerSheet>
      <div className="mb-[80px] flex flex-1 flex-col">
        <div className="flex h-[80px] items-center justify-between py-3 px-4">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-neutral-500">
              <Image src={player.image} fill alt={player.title} />
            </div>
            <div className="flex flex-1 items-center justify-between gap-0">
              <div>
                <h2 className="text-md font-bold">{player.title}</h2>
                <h3 className="text-sm text-neutral-400">
                  {converDuration(audioElement.duration)} min
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <SkipBack size={28} weight="duotone" />
                <PlayPause
                  state={player.state}
                  onClickPlay={play}
                  onClickPause={pause}
                  size={32}
                />
                <SkipForward size={28} weight="duotone" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex-1">
          <Lyrics lyrics={lyrics} />
        </div>
        <div className="p-4">
          <MusicBar />
        </div>
      </div>
    </PlayerSheet>
  );
};

export default Player;
