import { atom, useRecoilState } from "recoil";
import { SongProps } from "../components/home/Song";
import { bootstrapMediaSession } from "../utils/bootstrapMediaSession";
import { loadAudioInto } from "../utils/fetchAudio";
import { useGlobalAudioElement } from "./audioElementAtom";

export interface PlayerAtom extends SongProps {
  state: "paused" | "playing";
}

const playerAtom = atom<PlayerAtom | null>({
  key: "currentSong", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const usePlayer = () => {
  const [player, setPlayer] = useRecoilState(playerAtom);
  const audioElement = useGlobalAudioElement();

  function pause() {
    if (!player) return;
    audioElement.pause();
    setPlayer({ ...player, state: "paused" });
  }
  function play() {
    if (!player) return;
    audioElement.play();
    setPlayer({ ...player, state: "playing" });
  }

  function seek(timePercentage: number) {
    audioElement.currentTime = audioElement.duration * (timePercentage / 100);
  }
  async function playSong(song: SongProps) {
    await loadAudioInto(audioElement, song.url);
    setPlayer({ ...song, state: "playing" });
    bootstrapMediaSession({ ...song, onPlay: play, onPause: pause });
    return true;
  }

  return {
    player,
    playSong,
    pause,
    play,
    audioElement,
    seek,
  };
};
