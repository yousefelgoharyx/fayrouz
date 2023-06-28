export async function loadAudioInto(element: HTMLAudioElement, url: string) {
  return new Promise((resolve, reject) => {
    element.src = url;
    element.autoplay = false;
    element.pause();
    element.addEventListener("canplaythrough", () => {
      element.play();
      resolve(true);
    });
    element.addEventListener("error", (e) =>
      reject(new Error("Failed to load audio", { cause: e }))
    );
  });
}
