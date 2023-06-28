"use client";
import { usePlayer } from "../atoms/playerAtom";
import Lyrics from "./Lyrics.new";
import PlayerCard from "./PlayerCard";

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
const LgPlayer = () => {
  const { player, play, pause } = usePlayer();

  if (!player)
    return (
      <div className="flex flex-1 items-center justify-center text-2xl font-bold">
        Select a song
      </div>
    );
  return (
    <div className="flex flex-1 flex-col">
      <PlayerCard player={player} onPlay={play} onPause={pause} />
      <Lyrics lyrics={lyrics} />
    </div>
  );
};

export default LgPlayer;
