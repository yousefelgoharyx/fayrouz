export const useAudioElement = () => {
  if (typeof window === "undefined") return {} as HTMLAudioElement;
  return document.getElementById("global-audio") as HTMLAudioElement;
};
