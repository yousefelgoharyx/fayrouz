import { atom, useRecoilValue } from "recoil";

class AudioFacade {}
function createIsomorphicAudio() {
  if (typeof window !== "undefined") {
    let audio = new Audio();
    audio.autoplay = false;
    audio.pause();
    return audio;
  }
  return new AudioFacade() as HTMLAudioElement;
}

const audioElementAtom = atom<HTMLAudioElement>({
  key: "audioElement",
  default: createIsomorphicAudio(),
});

export const useGlobalAudioElement = () => {
  return useRecoilValue(audioElementAtom);
};
