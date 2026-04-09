import { atom, useAtom } from "jotai";
import { useAudioElement } from "../audio/useAudioElement";

export type TPlayback = {
  id: string;
  name: string;
  url: string;
  image: string;
};
export type TPlayerAtom = {
  playback: TPlayback | null;
  paused: boolean;
};

const playerAtom = atom<TPlayerAtom>({
  playback: null,
  paused: true,
});

export const usePlayer = () => {
  const [player, setPlayer] = useAtom(playerAtom);
  const audio = useAudioElement();

  const loadAndPlay = (playback: TPlayback) => {
    return new Promise((resolve) => {
      audio.src = playback.url;
      audio.addEventListener("canplay", () => {
        audio.play();
        setPlayer({
          paused: false,
          playback,
        });
        resolve(true);
      });
    });
  };

  const play = () => {
    setPlayer({ ...player, paused: false });
    audio.play();
  };

  const pause = () => {
    setPlayer({ ...player, paused: true });
    audio.pause();
  };

  const seek = (percentage: number) => {
    audio.currentTime = audio.duration * (percentage / 100);
  };

  return {
    loadAndPlay,
    play,
    pause,
    seek,
    player,
    audio,
  };
};
